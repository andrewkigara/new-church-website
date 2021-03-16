import React from 'react';
import './Ministries.css';
import MinistriesCarousel from './MinistriesCarousel';

export const Ministries = () => {
    return (
        <div className="contentSection container bg-light text-dark py-3">
            <h1 className="text-center pageTitle pt-3">Ministries Page</h1>
            <p className="container pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <MinistriesCarousel/>
        </div>
    )
}