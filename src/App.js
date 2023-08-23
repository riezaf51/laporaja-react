import logo from './logo.svg';
import './App.css';
import HomeLayout from './Homepage/Layout';
import ScrollToTop from './Components/ScrollToTop';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from './strings';
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

export const AppContext = createContext("");

function App() {
  const [authenticated, setauthenticated] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(loggedInUser);
      setUser(foundUser);
      setauthenticated(loggedInUser);
    }
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate replace to={'/' + routes.login} />;
    }
    return children;
  };

  const RedirectIfAuthenticated = ({ children }) => {
    if (user) {
      return <Navigate replace to={routes.root} />;
    }
    return children;
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ user, setUser }}>
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
            <Route path={routes.laporan} element={<Laporan />} />
          </Route>
          <Route path={routes.profile} element={<ProtectedRoute><ProfileLayout /></ProtectedRoute>}>
            <Route index element={<Profile />} />
            <Route path={routes.profile_laporan} element={<ProfileLaporan />} />
          </Route>
          <Route path={routes.login} element={<RedirectIfAuthenticated><Login /></RedirectIfAuthenticated>} />
          <Route path={routes.register} element={<RedirectIfAuthenticated><Register /></RedirectIfAuthenticated>} />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
