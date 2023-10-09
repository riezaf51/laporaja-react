import HomeNavbar from '../Components/HomeNavbar'
import HomeFooter from '../Components/HomeFooter'
import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <div>
            <HomeNavbar />
            <Outlet />
            <HomeFooter />
        </div>
    )
}
