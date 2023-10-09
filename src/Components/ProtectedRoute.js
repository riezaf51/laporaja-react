import { useContext } from "react";
import { AppContext } from "../App";
import { Navigate } from "react-router-dom";
import { routes } from "../strings";

export default function ProtectedRoute({ children }) {
    const { user } = useContext(AppContext);

    if (!user) {
        return <Navigate replace to={'/' + routes.login} state={{ error: "Silahkan Log In terlebih dahulu!" }} />;
    }

    return children;
};
