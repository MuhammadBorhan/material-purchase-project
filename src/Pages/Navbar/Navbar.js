import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    return (
        <div className="navbar bg-purple-800 px-12 text-white font-bold z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact bg-purple-800 dropdown-content mt-3 p-2 shadow rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><a>Item 1</a></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl">Purchase</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 z-10">
                    <li><Link to='/'> <span><FaHome /></span>Home</Link></li>
                    <li tabIndex="0">
                        <a>
                            Orders
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-800 p-2">
                            <li><Link to='/purchasepage'>Purchase</Link></li>
                            <li><Link to='vendors'>Vendors</Link></li>
                        </ul>
                    </li>
                    <li tabIndex="0">
                        <a>
                            Products
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="bg-purple-800 p-2">
                            <li><Link to='allproduct'>Product</Link></li>
                            <li><Link to='ownproduct'>Owners Product</Link></li>
                            <li><Link to='allproductvariant'>Product Variant</Link></li>
                        </ul>
                    </li>
                    <li><a>Reporting</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <ul>
                    {
                        user ? <li className='mr-6'><button onClick={logout} className='text-xl font-bold'>Logout</button></li> : <li className='mr-6'><Link to='signin'>Signin</Link></li>
                    }
                </ul> */}
                <h4>{user ? user?.displayName || user?.name : 'Three Brothers LTD'}</h4>
            </div>

        </div>
    );
};

export default Navbar;