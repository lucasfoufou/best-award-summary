import React from 'react';
import { } from 'react-bootstrap';

import { movies } from '~utils/movies';
import { getTMDBImage } from '~utils/routes';

export default function Home() {

    const items = [
        { type: 'Best Picture', poster: 776503, main: 'Coda', secondary: 'Siân Heder', date: '08/11/2021' },
        { type: 'Best Director', poster: 776503, main: 'Coda', secondary: 'Siân Heder', date: '08/11/2021' },
        { type: 'Best Actor', poster: 776503, main: 'Coda', secondary: 'Siân Heder', date: '08/11/2021' },
    ];

    return <>
        <div className="container">
            <h2 className='text-uppercase'>Awards</h2>
            <div className="row">
                {items.map((item, index) =>
                    <div className="col-12 col-md-6 col-lg-4 p-3">
                        <div className='bg-card-bg m-3'>
                            <h4 className='text-uppercase text-center'>{item.type}</h4>
                            <img src={getTMDBImage(movies[item.poster].poster)} width={250} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>;
};
