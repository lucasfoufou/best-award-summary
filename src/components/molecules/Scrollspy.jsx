import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Scrollspy(props) {
    const { scrollTargetIds, children } = props;
    const navigate = useNavigate();
    const location = useLocation();
    const current = location.hash.replace('#', '');

    const onScroll = () => {
        let scrollSectionOffsetTop;
        scrollTargetIds.forEach((sectionID, index) => {
            if (!document.getElementById(sectionID)) {
                console.warn(`${SCROLLSPY_NAV_NAMESPACE}: no element with id ${sectionID} present in the DOM`);
                return;
            }

            scrollSectionOffsetTop = document.getElementById(sectionID).offsetTop;

            if (
                window.scrollY >= scrollSectionOffsetTop
                && window.scrollY < scrollSectionOffsetTop + document.getElementById(sectionID).scrollHeight
                && current !== sectionID
            ) {
                navigate(`#${sectionID}`, { replace: true });
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    });

    return <>
        {children}
    </>;
};
