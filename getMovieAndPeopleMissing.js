import { people as peopleFile } from 'best-award-summary/src/utils/people.js';
import { movies as movieFile } from 'best-award-summary/src/utils/movies.js';
import { getMovie } from 'best-award-summary/getMovie.js';
import { getPeople } from 'best-award-summary/getPeople.js';
import { oscars } from 'best-award-summary/src/utils/oscars.js';

let currentPeople = Object.keys(peopleFile);
let currentMovies = Object.keys(movieFile);
let moviesToDo = [];
let peopleToDo = [];

for (const key in oscars) {
    const oscarYear = oscars[key];
    for (let index = 0; index < oscarYear.length; index++) {
        const oscarCategory = oscarYear[index]?.items;
        for (let i = 0; i < oscarCategory.length; i++) {
            const items = oscarCategory[i]?.items;
            for (let i = 0; i < items.length; i++) {
                const { main, mainType, secondary, secondaryType } = items[i];
                [{ item: main, type: mainType }, { item: secondary, type: secondaryType }].forEach((item, index) => {
                    if (item.type === 'movie') {
                        moviesToDo.push(item.item);
                    } else if (item.type === 'people') {
                        peopleToDo.push(item.item);
                    }
                });
            }
        }
    }
}

console.log('Movies :');
let tmpPromises = [];
moviesToDo.forEach((movie) => {
    if (currentMovies.includes(String(movie))) return;
    currentMovies.push(String(movie));
    tmpPromises.push(new Promise(async (resolve) => {
        await getMovie(movie);
        resolve();
    }));
});
await Promise.all(tmpPromises);
console.log('People :');
peopleToDo.forEach((people) => {
    if (currentPeople.includes(String(people))) return;
    currentPeople.push(String(people));
    getPeople(people);
});
