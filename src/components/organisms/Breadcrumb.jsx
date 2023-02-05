import React from 'react';
import { } from 'react-bootstrap';
import { Link } from "react-router-dom";

import { getRoute } from '~utils/routes';

export default function Breadcrumb(props) {
    return <>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {props.breadcrumb.map((item, index) =>
                        <li key={index} className={`breadcrumb-item ${item.active ? 'active' : ''}`} aria-current="page">
                            {!item.active && <Link to={getRoute(item.route)}>{item.name}</Link>}
                            {item.active && item.name}
                        </li>
                    )}
                </ol>
            </nav>
        </div>
    </>;
};
