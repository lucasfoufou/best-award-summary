import React from 'react';
import { } from 'react-bootstrap';

import { movies } from '~utils/movies';
import { people } from '~utils/people';
import { getTMDBImage } from '~utils/routes';

export default function Home() {
    return <>
        <div className="container mb-5 text-center">
            <p>This is a work in progress.</p>
            <p>I'm still working on adding awards and nominations to the database.</p>
            <p>I'm also willing to add more award ceremonies, especially the French César Awards.</p>
            <p>Feel free to contact me if you have any suggestions and to make pull requests on the <a href="https://github.com/lucasfoufou/best-award-summary" className="text-decoration-underline" target='_blank'>Github</a> if you want to help.</p>
        </div>
    </>;
};
