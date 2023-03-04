import React, { useEffect, useMemo } from 'react';
import { } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';

import { oscars } from '~utils/oscars';
import { movies } from '~utils/movies';
import { people } from '~utils/people';
import { getOrdinal } from "~utils/maths";
import { getTMDBImage } from '~utils/routes';
import Scrollspy from '~components/molecules/Scrollspy';

export default function Oscars() {
    const { year } = useParams();
    const location = useLocation();
    const category = location.hash.replace('#', '');

    const items = oscars?.[year] ?? [];
    const categories = ['Statistics', ...oscars?.[year]?.map(e => e.name) ?? []];

    const illustrationMaker = (item, movies, people) => {
        if (item.mainType == 'movie') {
            if (movies[item.main] && movies[item.main].poster) {
                return <img src={getTMDBImage(movies[item.main].poster)} />;
            }
            return <svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill="#b5b5b5" id="user" d="M27,24.23669V27a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V24.23669a1.57806,1.57806,0,0,1,.93115-1.36462L10.0672,20.167A5.02379,5.02379,0,0,0,14.55273,23h1.89454a5.02336,5.02336,0,0,0,4.48535-2.83313l5.13623,2.7052A1.57806,1.57806,0,0,1,27,24.23669ZM9.64478,14.12573a2.99143,2.99143,0,0,0,1.31073,1.462l.66583,3.05176A2.99994,2.99994,0,0,0,14.55237,21h1.89526a2.99994,2.99994,0,0,0,2.931-2.36047l.66583-3.05176a2.99115,2.99115,0,0,0,1.31073-1.462l.28-.75146A1.2749,1.2749,0,0,0,21,11.62988V9c0-3-2-5-5.5-5S10,6,10,9v2.62988a1.2749,1.2749,0,0,0-.63519,1.74439Z" />
            </svg>;
        } else {
            if (people[item.main] && people[item.main].profile) {
                return <img src={getTMDBImage(people[item.main].profile)} />;
            }
            return <svg id="glyphicons-basic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path fill="#b5b5b5" id="picture" d="M27.5,5H4.5A1.50008,1.50008,0,0,0,3,6.5v19A1.50008,1.50008,0,0,0,4.5,27h23A1.50008,1.50008,0,0,0,29,25.5V6.5A1.50008,1.50008,0,0,0,27.5,5ZM26,18.5l-4.79425-5.2301a.99383.99383,0,0,0-1.44428-.03137l-5.34741,5.34741L19.82812,24H17l-4.79291-4.793a1.00022,1.00022,0,0,0-1.41418,0L6,24V8H26Zm-17.9-6a2.4,2.4,0,1,1,2.4,2.4A2.40005,2.40005,0,0,1,8.1,12.5Z" />
            </svg>;
        }
    };

    useEffect(() => {
        if (category) {
            window.scrollTo(0, document.querySelector(`#${category}`).offsetTop + 1);
        }
    }, []);

    const statistics = useMemo(() => {
        const statistics = {};
        items.filter(category => category.name == 'Awards').forEach(awards => {
            awards.items[0]?.items.forEach(award => {
                const movie = award.mainType == 'movie' ? award.main : award.secondary;
                if (!statistics[movie]) {
                    statistics[movie] = { awards: 0, nominations: 0 };
                }
                statistics[movie].awards++;
            });
        });
        items.filter(category => category.name == 'Nominations').forEach(nominations => {
            nominations.items.forEach(nomination => {
                nomination.items.forEach(nominee => {
                    const movie = nominee.mainType == 'movie' ? nominee.main : nominee.secondary;
                    if (!statistics[movie]) {
                        statistics[movie] = { awards: 0, nominations: 0 };
                    }
                    statistics[movie].nominations++;
                });
            });
        });
        return statistics;
    }, [items]);

    const getSecondary = (item) => {
        if (item.secondaryType == 'movie') {
            return movies[item.secondary]?.title;
        } else if (item.secondaryType == 'people') {
            if (typeof (item.secondary) == 'object') {
                return item.secondary.map((secondary, index) =>
                    <span key={index}>
                        {people[secondary]?.name}{index + 1 < item.secondary.length ? <br /> : ''}
                    </span>
                );
            } else {
                return people[item.secondary]?.name;
            }
        }
    };

    return <>
        <div className="container mb-5">
            <h1 className='text-uppercase text-center'>{`The ${year}${getOrdinal(year)} Academy Awards`}</h1>
            <Scrollspy scrollTargetIds={categories}>
                <div id="Statistics" className='mb-5'>
                    <h2 className='text-uppercase text-center text-md-start'>Statistics</h2>
                    <div className="d-flex">
                        <table className="table w-50 mx-2 align-self-start">
                            <thead>
                                <tr>
                                    <th>Movie</th>
                                    <th>Awards</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(statistics)
                                        ?.filter(index => statistics[index]?.awards > 1)
                                        ?.sort((a, b) => statistics[b]?.awards - statistics[a]?.awards)
                                        ?.map((movie, index) =>
                                            <tr key={index}>
                                                <td>{movies[movie]?.title}</td>
                                                <td>{statistics[movie]?.awards}</td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                        <table className="table w-50 mx-2">
                            <thead>
                                <tr>
                                    <th>Movie</th>
                                    <th>Nominations</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(statistics)
                                        .filter(index => statistics[index]?.nominations > 1)
                                        .sort((a, b) => statistics[b]?.nominations - statistics[a]?.nominations)
                                        .map((movie, index) =>
                                            <tr key={index}>
                                                <td>{movies[movie]?.title}</td>
                                                <td>{statistics[movie]?.nominations}</td>
                                            </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {items.map((category, index) =>
                    <div key={index} id={category.name}>
                        <hr />
                        <h2 className='text-uppercase text-center text-md-start'>{category.name}</h2>
                        {category.items.map((subcategory, subIndex) =>
                            <div key={subIndex}>
                                {subcategory.name &&
                                    <h3 className='text-uppercase text-center text-md-start'>{subcategory.name}</h3>
                                }
                                <div className="row">
                                    {subcategory.items.map((item, itemIndex) =>
                                        <div className="col-12 col-md-6 col-lg-4 p-3 item-card" key={itemIndex}>
                                            <div className='bg-card-bg m-0 m-md-3 py-3 item-card-container'>
                                                <h4 className='text-uppercase text-center'>{item.type}</h4>
                                                <div className="content">
                                                    {illustrationMaker(item, movies, people)}
                                                    <div className="description">
                                                        <h5>{item.mainType == 'movie' ? movies[item.main]?.title : people[item.main]?.name}</h5>
                                                        <p>{getSecondary(item)}</p>
                                                        <p>{item.mainType == 'movie' ? movies[item.main]?.release_date : movies[item.secondary]?.release_date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </Scrollspy>
        </div>
    </>;
};
