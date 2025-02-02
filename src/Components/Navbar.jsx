import React from 'react';
import { NavLink, Link } from 'react-router-dom'; // NavLink use korbo
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
    const { user, userSignOut } = useAuth();

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Logged out! 🚀');
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    return (
        <div className="navbar bg-base-100 rounded-2xl shadow-lg">
            {/* Navbar Start */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/my-collage' className={({ isActive }) => (isActive ? 'active' : '')}>
                                My College
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/college' className={({ isActive }) => (isActive ? 'active' : '')}>
                                Colleges
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/admission' className={({ isActive }) => (isActive ? 'active' : '')}>
                                Admission
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost text-xl">EduBook</Link>
            </div>

            {/* Navbar Center (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'bg-black text-white' : '')}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/my-collage' className={({ isActive }) => (isActive ? 'bg-black text-white' : '')}>
                            My College
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/college' className={({ isActive }) => (isActive ? 'bg-black text-white' : '')}>
                            Colleges
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admission' className={({ isActive }) => (isActive ? 'bg-black text-white' : '')}>
                            Admission
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end">
                {user === null ? (
                    <Link to={'/sign-in'}>
                        <button className="btn btn-success">Login</button>
                    </Link>
                ) : (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li className='text-2xl'>
                                <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : '')}>
                                    Profile
                                </NavLink>
                            </li>
                            <li className='text-2xl' onClick={handleLogOut}>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;