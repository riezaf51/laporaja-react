import '../Style/style.css'
import logo_sidebar from '../Images/logo sidebar.png'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import routes from '../strings';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

function ProfileNavbar() {
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser();
        localStorage.clear();
        navigate(routes.root);
    };

    return (
        <section id="menu">
            <div className="logo">
                <Link to={routes.root}><img src={logo_sidebar} alt="" /></Link>
            </div>

            <div className="items">
                <li><a className="fa-solid fa-circle-user"></a><NavLink to={routes.profile_user}>Profile</NavLink></li>
                <li><a className="fa-solid fa-clipboard-list"></a><NavLink to={routes.laporan}>Laporan</NavLink></li>
                <li><a className="fa-solid fa-right-from-bracket"></a><a onClick={handleLogout}>Keluar</a></li>
            </div>
        </section>
    );
}

export default ProfileNavbar;