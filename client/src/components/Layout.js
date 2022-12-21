import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Admin</Link>
                    </li>
                    <li>
                        <Link to='/users'>Users</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout;