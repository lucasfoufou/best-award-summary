import * as dotenv from 'dotenv';
import axios from 'axios';

import { people as peopleFile } from 'best-award-summary/src/utils/people.js';

const peopleIds = [136495, 287, 234352, 1413392]; // <--- Change this to the people you want to get


dotenv.config();
const { TMDB_API_KEY } = process.env;

peopleIds.forEach((peopleId) => {
    if (peopleFile[peopleId]) {
        console.log('Person already found, delete it first before calling the api again : ' + peopleId);
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
    });
});
