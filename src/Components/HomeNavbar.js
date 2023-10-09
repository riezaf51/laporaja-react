import '../Style/stylelanding.css'
import { NavLink } from 'react-router-dom';
import logo_header from '../Images/logo header.png'
import { routes } from '../strings';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

export default function HomeNavbar() {
    const { user, setUser } = useContext(AppContext);

    return (
        <section id="header">
            <NavLink to=''><img src={logo_header} className="logo" alt="" /></NavLink>
            <div>
                <ul id="navbar">
                    <li><NavLink to={routes.home}>Beranda</NavLink></li>
                    <li><NavLink to={routes.laporan}>Laporan</NavLink></li>
                    <li><NavLink to={routes.forum}>Forum</NavLink></li>
                    <li><NavLink to={routes.contact}>Kontak</NavLink></li>
                    {user && user.role === 'admin' &&
                        <li><NavLink to={'/' + routes.profile + '/' + routes.laporan}>Tanggapi</NavLink></li>
                    }
                    <li>|</li>
                    {user
                        ? <li><NavLink to={'/' + routes.profile}>Profile</NavLink></li>
                        :
                        <>
                            <li><NavLink to={'/' + routes.login}>Masuk</NavLink></li>
                            <li><NavLink to={'/' + routes.register}>Daftar</NavLink></li>
                        </>
                    }
                </ul>
            </div>
        </section >
    )
}
