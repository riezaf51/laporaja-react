import HomeNavbar from '../Components/HomeNavbar'
import HomeFooter from '../Components/HomeFooter'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <div>
            <HomeNavbar />
            <Outlet />
            <HomeFooter />
        </div>
    )
}

export default HomeLayout;