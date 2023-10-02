import '../Style/style.css'
import logo_sidebar from '../Images/logo sidebar.png'
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { API_URL, routes } from '../strings';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import axios from 'axios';

function ProfileNavbar() {
    const { user, setUser, stateToken, setToken, setLoading } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        const logout = async () => {
            setLoading(true)
            const headers = { Authorization: "Bearer " + stateToken };
            const response = await axios.get(API_URL + '/api/logout', { headers })
                .then(res => {
                    setUser();
                    setToken();
                    localStorage.clear();
                    navigate(routes.root);
                    console.log(response)
                }).catch(error => {
                    console.log(error);
                });
            setLoading(false);
        };

        logout();
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