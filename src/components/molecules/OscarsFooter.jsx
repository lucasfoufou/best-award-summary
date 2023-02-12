import React from 'react';
import { } from 'react-bootstrap';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import { oscars } from '~utils/oscars';
import { getRoute } from '~utils/routes';
import { getOrdinal } from "~utils/maths";

export default function OscarsFooter() {
    const { year } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const categories = oscars?.[year]?.map(e => e.name) ?? [];
    const category = location.hash.replace('#', '') == '' ? categories[0] : location.hash.replace('#', '');
    const years = Object.keys(oscars).sort((a, b) => parseInt(a) - parseInt(b));
    const changeYear = (delta) => () => {
        const newYear = years?.[years.findIndex((val) => parseInt(val) == parseInt(year)) + delta] ?? null;
        if (newYear) {
            navigate(getRoute('home.oscars', { year: newYear }));
        }
    };
    const changeCategory = (delta) => () => {
        const newCategory = categories?.[categories.findIndex((val) => val == category) + delta] ?? null;
        if (newCategory) {
            window.scrollTo(0, document.querySelector(`#${newCategory}`).offsetTop + 1);
        }
    };

    return <>
        <div className="footer d-flex flex-row justify-content-around">
            <>
                <div className="col-3 m-auto d-flex flex-row">
                    {
                        parseInt(years[0]) < parseInt(year) &&
                        <div className='pointer' onClick={changeYear(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 24.723 38.319">
                                <path id="caret-left-fill" d="M4.646,23.849,22.763,39.7a3.3,3.3,0,0,0,5.479-2.488V5.511a3.3,3.3,0,0,0-5.483-2.488L4.649,18.872a3.3,3.3,0,0,0,0,4.977Z" transform="translate(-3.519 -2.203)" fill="#adadad" />
                            </svg>
                        </div>
                    }
                    {
                        parseInt(years[0]) >= parseInt(year) &&
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 24.723 38.319"></svg></div>
                    }
                    <div className='mx-2 cartouche'>
                        <p>{year}<sup>{getOrdinal(year)}</sup></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="25" viewBox="0 0 167 50">
                            <path id="Polygone_1" data-name="Polygone 1" d="M125.25,0,167,25,125.25,50H41.75L0,25,41.75,0Z" fill="#fff" />
                        </svg>
                    </div>
                    {
                        parseInt(years[years.length - 1]) > parseInt(year) &&
                        <div className='pointer' onClick={changeYear(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 24.723 38.319">
                                <path id="caret-left-fill" d="M4.646,23.849,22.763,39.7a3.3,3.3,0,0,0,5.479-2.488V5.511a3.3,3.3,0,0,0-5.483-2.488L4.649,18.872a3.3,3.3,0,0,0,0,4.977Z" transform="translate(28.242 40.522) rotate(180)" fill="#adadad" />
                            </svg>
                        </div>
                    }
                    {
                        parseInt(years[years.length - 1]) <= parseInt(year) &&
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 24.723 38.319"></svg></div>
                    }
                </div>
                <div className="col-3 m-auto d-none d-md-flex flex-row">
                    {
                        categories?.[categories.findIndex((val) => val == category) + 1] &&
                        <div className='pointer' onClick={changeCategory(1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 38.319 24.723">
                                <path id="caret-left-fill" d="M4.646,23.849,22.763,39.7a3.3,3.3,0,0,0,5.479-2.488V5.511a3.3,3.3,0,0,0-5.483-2.488L4.649,18.872a3.3,3.3,0,0,0,0,4.977Z" transform="translate(-2.203 28.242) rotate(-90)" fill="#adadad" />
                            </svg>
                        </div>
                    }
                    {
                        !categories?.[categories.findIndex((val) => val == category) + 1] &&
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 38.319 24.723"></svg></div>
                    }
                    <div className='mx-2 cartouche'>
                        <p>{category == '' ? categories[0] : category}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="25" viewBox="0 0 340.521 50">
                            <path id="Tracé_1" data-name="Tracé 1" d="M125.25,0,167,25,125.25,50H-131.771l-41.75-25,41.75-25Z" transform="translate(173.521)" fill="#fff" />
                        </svg>
                    </div>
                    {
                        categories?.[categories.findIndex((val) => val == category) - 1] &&
                        <div className='pointer' onClick={changeCategory(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 38.319 24.723">
                                <path id="caret-left-fill" d="M4.646,23.849,22.763,39.7a3.3,3.3,0,0,0,5.479-2.488V5.511a3.3,3.3,0,0,0-5.483-2.488L4.649,18.872a3.3,3.3,0,0,0,0,4.977Z" transform="translate(40.522 -3.519) rotate(90)" fill="#adadad" />
                            </svg>
                        </div>
                    }
                    {
                        !categories?.[categories.findIndex((val) => val == category) - 1] &&
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" viewBox="0 0 38.319 24.723"></svg></div>
                    }
                </div>
            </>
        </div>
    </>;
};
