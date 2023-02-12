import React from 'react';
import { useLocation } from 'react-router-dom';

import OscarsFooter from '~components/molecules/OscarsFooter';
import { getRoute } from '~utils/routes';

export default function Footer() {
    const location = useLocation();
    const oscarsRegex = new RegExp(`^${getRoute('home.oscars', { year: '([0-9]+)' })}$`);
    const isOscars = oscarsRegex.test(location.pathname);
    return <>
        <div className="footer d-flex flex-row justify-content-around">
            {isOscars &&
                <OscarsFooter />
            }
        </div>
    </>;
};
