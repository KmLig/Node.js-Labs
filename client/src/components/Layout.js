import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return(
        <React.Fragment>
            <nav className='navbar navbar-expand-sm bg-warning navbar-dark'>
                <ul className='navbar-nav text-light'>
                    <li className='narbar-item ms-4 me-2'>
                        <Link className='narbar-link text-dark' to='/'>Admin</Link>
                    </li>
                    <li className='narbar-item'>
                        <Link className='narbar-link text-dark' to='/users'>Users</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </React.Fragment>
    )
}

export default Layout;