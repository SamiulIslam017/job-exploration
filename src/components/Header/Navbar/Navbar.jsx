import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex flex-col justify-center items-center md:flex-row lg:flex-row gap-6 md:gap-4 lg:gap-4'>
            <NavLink
                    to={'/'}
                    className={({ isActive}) =>
                    isActive
                        ? "active"
                        : ""
                    }
                >
                    Home
                </NavLink>
            <NavLink
                    to={'/statistics'}
                    className={({ isActive}) =>
                    isActive
                        ? "active"
                        : ""
                    }
                >
                    Statistics
                </NavLink>
            <NavLink
                    to={'/applied'}
                    className={({ isActive }) =>
                    isActive
                        ? "active"
                        : ""
                    }
                >
                    Applied Job
                </NavLink>
            <NavLink
                    to={'/blog'}
                    className={({ isActive}) =>
                    isActive
                        ? "active"
                        : ""
                    }
                >
                    Blog
                </NavLink>
                <Link to={'/job'}><button className='text-white text-md font-extrabold rounded-lg py-3 px-5 cursor-pointer md:hidden lg:hidden'>Start Applying</button></Link>
        </div>
    );
};

export default Navbar;