import ProfileNavbar from "../Components/ProfileNavbar";
import { Outlet } from "react-router-dom";
import '../Style/styled.css'

function ProfileLayout() {
    return (
        <div className="body-profile">
            <ProfileNavbar />
            <Outlet />
        </div>
    );
}

export default ProfileLayout;