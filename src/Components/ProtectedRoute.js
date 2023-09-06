import { useContext } from "react";
import { AppContext } from "../App";
import { Navigate } from "react-router-dom";
import { routes } from "../strings";

function ProtectedRoute({ children }) {
    const { user } = useContext(AppContext);

    if (!user) {
        return <Navigate replace to={'/' + routes.login} />;
    }

    return children;
};

export default ProtectedRoute;