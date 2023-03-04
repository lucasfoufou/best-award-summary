import * as dotenv from 'dotenv';
import axios from 'axios';

import { people as peopleFile } from 'best-award-summary/src/utils/people.js';

dotenv.config();
const { TMDB_API_KEY } = process.env;

export function getPeople(peopleId) {
    return new Promise((resolve) => {
        if (peopleFile[peopleId]) {
            console.log('Person already found, delete it first before calling the api again : ' + peopleId);
            resolve(true);
            return;
        }
        const url = `https://api.themoviedb.org/3/person/${peopleId}?api_key=${TMDB_API_KEY}&language=en-US`;
        axios.get(url).then((people) => {
            const ret = {
                name: people.data.name,
                gender: people.data.gender,
                profile: people.data.profile_path,
            };
            console.log(peopleId + ':' + JSON.stringify(ret) + ',');
            resolve(true);
        }).catch((err) => {
            console.log('Error for peopleId ' + peopleId + ' : ' + err);
            resolve(true);
        });
    });
}
