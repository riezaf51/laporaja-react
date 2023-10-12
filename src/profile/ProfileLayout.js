import ProfileNavbar from "./ProfileNavbar";
import { Outlet } from "react-router-dom";
import '../style/styled.css'

export default function ProfileLayout() {
    return (
        <div className="body-profile">
            <ProfileNavbar />
            <Outlet />
        </div>
    );
}
