import { useContext } from "react";
import { AppContext } from "../App";
import { Navigate } from "react-router-dom";
import { routes } from "../strings";

export default function AdminRoute({ children }) {
    const { user } = useContext(AppContext);

    if (user.role !== 'admin') {
        return <Navigate replace to={'/' + routes.dashboard + '/' + routes.home} state={{ error: "Anda tidak memiliki akses ke halaman ini." }} />;
    }

    return children;
};
