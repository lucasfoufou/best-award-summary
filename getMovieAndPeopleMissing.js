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
                if (mainType === 'movie') {
                    moviesToDo.push(main);
                } else if (mainType === 'people') {
                    peopleToDo.push(main);
                }

                if (secondaryType === 'movie') {
                    moviesToDo.push(secondary);
                } else if (secondaryType === 'people') {
                    if(!Array.isArray(secondary)) {
                        peopleToDo.push(secondary);
                    } else {
                        secondary.forEach((people) => {
                            peopleToDo.push(people);
                        });
                    }
                }
            }
        }
    }
}

console.log('Movies :');
let tmpPromises = [];
moviesToDo.forEach((movie) => {
    if (currentMovies.includes(String(movie)) || !movie) return;
    currentMovies.push(String(movie));
    tmpPromises.push(new Promise(async (resolve) => {
        await getMovie(movie);
        resolve();
    }));
});
await Promise.all(tmpPromises);
console.log('People :');
peopleToDo.forEach((people) => {
    if (currentPeople.includes(String(people)) || !people) return;
    currentPeople.push(String(people));
    getPeople(people);
});
