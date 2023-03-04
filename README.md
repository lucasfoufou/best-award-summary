# best-award-summary

## How to participate
It's easy, just add lines in oscars.js, people.js and movies.js so we can collaboratively build the best award summary.
To propose a change, just fork the project, make your changes and submit a pull request.

## How to help by adding a new award:
1. Add a new line in oscars.js with the following format:
```javascript
{ type: 'Best Picture', main: 776503, secondary: 154865, mainType: 'movie', secondaryType: 'people' },
```
With `type` being the name of the award, `main` being the TMDB id of the main winner, `secondary` being the TMDB id of the secondary winner, `mainType` being the type of the main winner (movie or people) and `secondaryType` being the type of the secondary winner (movie or people).
2. Then run the following command to get the right lines to add in the movies and people files:
```bash
node getMovieAndPeopleMissing.js
```

## How to get the TMDB id of a movie or a people:
1. Go to [TMDB](https://www.themoviedb.org/)
2. Look for the movie or the people you want to add
3. In the URL, you will find the TMDB id, for example, for CODA, the URL is https://www.themoviedb.org/movie/776503-coda, so the TMDB id is 776503
