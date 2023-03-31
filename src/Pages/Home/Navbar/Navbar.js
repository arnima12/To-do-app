import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-white ">
            <Link to="/" className="btn btn-ghost normal-case text-xl">To Do App</Link>
        </div>
    );
};

export default Navbar;