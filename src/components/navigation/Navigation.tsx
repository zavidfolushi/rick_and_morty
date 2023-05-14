import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation: FC = () => {
    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
            Rick & Morty
            <span>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-2 mr-8' : 'mr-8')} to="/">Characters</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'border-b-2' : '')} to="/episodes">Episodes</NavLink>
            </span>
        </nav>
    );
};

export default Navigation;