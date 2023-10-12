import HomeLayout from './homepage/Layout';
import ScrollToTop from './common/ScrollToTop';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { API_URL, routes } from './strings';
import Login from './auth/Login';
import Register from './auth/Register';
import Contact from './homepage/Contact';
import ContactFormEdit from './homepage/ContactFormEdit';
import ContactFormAdd from './homepage/ContactFormAdd';
import Home from './homepage/Home';
import Forum from './homepage/Forum';
import Laporan from './homepage/LaporanForm';
import ProfileLayout from './profile/ProfileLayout';
import Profile from './profile/Profile';
import ProfileLaporan from './profile/ProfileLaporan';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import ProtectedRoute from './middleware/ProtectedRoute';
import NotFound from './common/NotFound';
import axios from 'axios';
import Loading from './common/Loading';
import RedirectIfAuthenticated from './middleware/RedirectIfAuthenticated';
import ServerInactive from './common/ServerInactive';
import ForumDetails from './homepage/ForumDetails';
import AdminRoute from './middleware/AdminRoute';
import ProfileEditLaporan from './profile/ProfileEditLaporan';
import ProfileEdit from './profile/ProfileEdit';

export const AppContext = createContext("");

export default function App() {
  const [user, setUser] = useState();
  const [stateToken, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const [serverInactive, setServerInactive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token && !user) {
        await axios.get(API_URL + '/api/status')
          .catch(error => {
            if (error.request) {
              setServerInactive(true);
            }
          });
        setLoading(false);
        return;
      }

      setToken(token);
      const headers = { Authorization: 'Bearer ' + token };
      console.log(headers);
      await axios.get(API_URL + '/api/user', { headers })
        .then(res => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch(function (error) {
          if (error.response) {
            localStorage.clear();
            setUser();
            setToken();
            navigate('/' + routes.login, { state: { error: "Silahkan login kembali!" } });
          } else if (error.request) {
            setServerInactive(true);
          }
        });
      setLoading(false);
    };

    fetchUser();
  }, [pathname]);

  if (loading) {
    return (
      <Loading />
    );
  }

  if (serverInactive) {
    return (
      <ServerInactive />
    );
  }

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser, loading, setLoading, stateToken, setToken }}>
        <ScrollToTop />
        <Routes>
          <Route index element={<Navigate to={'/' + routes.dashboard + '/' + routes.home} />} />
          <Route path={routes.dashboard} element={<Navigate to={'/' + routes.dashboard + '/' + routes.home} />} />
          <Route path={routes.dashboard} element={<HomeLayout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.contact + '/edit/:id'} element={<ProtectedRoute><ContactFormEdit /></ProtectedRoute>} />
            <Route path={routes.contact + '/tambah'} element={<ProtectedRoute><ContactFormAdd /></ProtectedRoute>} />
            <Route path={routes.forum} element={<Forum />} />
            <Route path={routes.forum + '/:id'} element={<ForumDetails />} />
            <Route path={routes.laporan} element={<ProtectedRoute><Laporan /></ProtectedRoute>} />
          </Route>
          <Route path={routes.profile} element={<ProtectedRoute><ProfileLayout /></ProtectedRoute>}>
            <Route index element={<Navigate to={routes.profile_user} />} />
            <Route path={routes.profile_user} element={<Profile />} />
            <Route path={routes.profile_laporan} element={<ProfileLaporan />} />
            <Route path={routes.profile_tanggapi} element={<AdminRoute><ProfileLaporan forAdmin={true} /></AdminRoute>} />
            <Route path={routes.profile_tanggapi + '/:id'} element={<AdminRoute><ProfileEditLaporan /></AdminRoute>} />
            <Route path={routes.profile_edit} element={<ProfileEdit />} />
          </Route>
          <Route path={routes.login} element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
          <Route path={routes.register} element={<RedirectIfAuthenticated><Register /></RedirectIfAuthenticated>} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}
