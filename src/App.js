import logo from './logo.svg';
import './App.css';
import HomeLayout from './Homepage/Layout';
import ScrollToTop from './Components/ScrollToTop';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { API_URL, routes } from './strings';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Contact from './Homepage/Sections/Contact';
import EditContact from './Homepage/Sections/EditContact';
import AddContact from './Homepage/Sections/AddContact';
import Home from './Homepage/Sections/Home';
import Forum from './Homepage/Sections/Forum';
import Laporan from './Homepage/Sections/Laporan';
import ProfileLayout from './Profiles/ProfileLayout';
import Profile from './Profiles/Profile';
import ProfileLaporan from './Profiles/ProfileLaporan';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import ProtectedRoute from './Components/ProtectedRoute';
import NotFound from './Components/NotFound';
import axios from 'axios';
import Loading from './Components/Loading';

export const AppContext = createContext("");

function App() {
  const [user, setUser] = useState();
  const [stateToken, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      setToken(token);
      if (token) {
        const headers = { Authorization: 'Bearer ' + token };
        console.log(headers);
        const response = await axios.get(API_URL + '/api/user', { headers })
          .then(res => {
            console.log(res.data);
            setUser(res.data);
          })
          .catch(function (error) {
            if (error.response) {
              localStorage.clear();
              setUser();
              setToken();
              navigate('/' + routes.login);
            }
          });
      }
      setLoading(false);
    };

    fetchUser();
  }, [pathname]);

  const RedirectIfAuthenticated = ({ children }) => {
    if (user) {
      return <Navigate replace to={routes.root} />;
    }
    return children;
  };

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser, loading, stateToken, setToken }}>
        <ScrollToTop />
        <Routes>
          <Route index element={<Navigate to={'/' + routes.dashboard + '/' + routes.home} />} />
          <Route path={routes.dashboard} element={<Navigate to={'/' + routes.dashboard + '/' + routes.home} />} />
          <Route path={routes.dashboard} element={<HomeLayout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.contact + '/edit/:id'} element={<EditContact />} />
            <Route path={routes.contact + '/tambah'} element={<AddContact />} />
            <Route path={routes.forum} element={<Forum />} />
            <Route path={routes.laporan} element={<ProtectedRoute><Laporan /></ProtectedRoute>} />
          </Route>
          <Route path={routes.profile} element={<ProtectedRoute><ProfileLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to={routes.profile_user} />} />
            <Route path={routes.profile_user} element={<Profile />} />
            <Route path={routes.profile_laporan} element={<ProfileLaporan />} />
          </Route>
          <Route path={routes.login} element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
          <Route path={routes.register} element={<RedirectIfAuthenticated><Register /></RedirectIfAuthenticated>} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
