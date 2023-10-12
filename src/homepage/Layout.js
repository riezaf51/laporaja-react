import HomeNavbar from './HomeNavbar'
import HomeFooter from './HomeFooter'
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
