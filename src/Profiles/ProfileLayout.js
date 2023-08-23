import ProfileNavbar from "../Components/ProfileNavbar";
import { Outlet } from "react-router-dom";


function ProfileLayout() {
    return (
        <div>
            <ProfileNavbar />
            <Outlet />
        </div>
    );
}

export default ProfileLayout;