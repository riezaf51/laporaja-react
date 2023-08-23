import '../Style/style.css'
import logo_sidebar from '../Images/logo sidebar.png'
import { NavLink, Navigate } from 'react-router-dom';
import routes from '../strings';
import { useEffect, useState } from 'react';

function ProfileNavbar() {
    const [authenticated, setauthenticated] = useState(true);

    const handleLogout = () => {
        localStorage.clear();
        setauthenticated(false);
    };

    if (!authenticated) {
        return (<Navigate replace to={routes.root} />);
    }

    require("../Style/styled.css");
    return (
        <section id="menu">
            <div className="logo">
                <a href="/dashboard"><img src={logo_sidebar} alt="" /></a>
            </div>

            <div className="items">
                <li><a className="fa-solid fa-circle-user"></a><NavLink to=''>Profile</NavLink></li>
                <li><a className="fa-solid fa-clipboard-list"></a><NavLink to={routes.laporan}>Laporan</NavLink></li>
                <li><a className="fa-solid fa-right-from-bracket"></a><a onClick={handleLogout}>Keluar</a></li>
            </div>
        </section>
    );
}

export default ProfileNavbar;