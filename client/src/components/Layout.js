import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return(
        <React.Fragment>
            <nav className='navbar navbar-expand-sm bg-warning navbar-dark'>
                <ul className='navbar-nav text-light'>
                    <li className='narbar-item ms-4 me-2'>
                        <a className='narbar-link text-dark' href='/'>Admin</a>
                    </li>
                    <li className='narbar-item'>
                        <a className='narbar-link text-dark' href='/users'>Users</a>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </React.Fragment>
    )
}

export default Layout;