import * as dotenv from 'dotenv';
import axios from 'axios';

import { movies as moviesFile } from 'best-award-summary/src/utils/movies.js';

const movieIds = [776503]; // <--- Change this to the movies you want to get


dotenv.config();
const { TMDB_API_KEY } = process.env;

movieIds.forEach((movieId) => {
    if (moviesFile[movieId]) {
        console.log('Movie already found, delete it first before calling the api again : ' + movieId);
        return;
    }
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;
    const urlCredits = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}&language=en-US`;
    axios.get(url).then((movie) => {
        axios.get(urlCredits).then((credits) => {
            const ret = {
                title: movie.data.title,
                poster: movie.data.poster_path,
                release_date: movie.data.release_date,
                production_country: movie.data.production_countries[0].iso_3166_1,
                main_cast: [credits.data.cast[0].id, credits.data.cast[1].id, credits.data.cast[2].id],
                director: credits.data.crew.find((crew) => crew.job === 'Director').id,
            };
            console.log(movieId + ':' + JSON.stringify(ret) + ',');
        });
    });
});
