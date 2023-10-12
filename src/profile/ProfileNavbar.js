import '../style/style.css'
import logo_sidebar from '../assets/logo sidebar.png'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { API_URL, routes } from '../strings';
import { useContext } from 'react';
import { AppContext } from '../App';
import axios from 'axios';

export default function ProfileNavbar() {
    const { user, setUser, stateToken, setToken, setLoading } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        const logout = async () => {
            setLoading(true)
            const headers = { Authorization: "Bearer " + stateToken };
            const response = await axios.get(API_URL + '/api/logout', { headers })
                .then(res => {
                    setUser();
                    setToken();
                    localStorage.clear();
                    navigate('/' + routes.dashboard + '/' + routes.home, { state: { message: 'Berhasil logout!' } })
                    console.log(response)
                }).catch(error => {
                    console.log(error);
                });
            setLoading(false);
        };

        logout();
    };
    console.log(location);
    return (
        <section id="menu">
            <div className="logo">
                <Link to={routes.root}><img src={logo_sidebar} alt="" /></Link>
            </div>

            <div className="items">
                <li className={location.pathname.includes('/' + routes.profile + '/' + routes.profile_user) && 'active'}><NavLink to={routes.profile_user}><i className="p-3 fa-solid fa-circle-user" />Profile</NavLink></li>
                <li className={location.pathname.includes('/' + routes.profile + '/' + routes.profile_laporan) && 'active'}><NavLink to={routes.profile_laporan}><i className="p-3 fa-solid fa-clipboard-list" />Laporan</NavLink></li>
                {user.role === 'admin' &&
                    <li className={location.pathname.includes('/' + routes.profile + '/' + routes.profile_tanggapi) && 'active'}><NavLink to={routes.profile_tanggapi}><i className="p-3 fa-solid fa-flag" />Tanggapi</NavLink></li>
                }
                <li><Link onClick={handleLogout}><i className="p-3 fa-solid fa-right-from-bracket" />Keluar</Link></li>
            </div>
        </section >
    );
}
