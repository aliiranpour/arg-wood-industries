import React, { useEffect, useState } from 'react';
import stickyHeaderData from './stickyHeaderData';
import { Link } from 'react-router-dom';
import './stickyHeader.style.css'
import 'react-bootstrap'


const StickyHeader = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleSticky = () => {
            if (window.scrollY >= 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleSticky);

        return () => {
            window.removeEventListener('scroll', handleSticky);
        };
    }, []);


    return (
        <>
            <div className={  `header-wrapper ${isSticky ? 'sticked' : ''}`}>
                <div className="container">
                    <nav>
                        <ul>
                            {
                                stickyHeaderData.map((currValue) => {
                                    const { id, title, path } = currValue;
                                    return (
                                        <li key={id}>
                                            <Link to={path} className=' list-item'>
                                                {title}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default StickyHeader;