import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Navigate } from "react-router-dom";
import routes from "../strings";
import loadingGif from "../Images/loading.gif";
import '../Style/styled.css'

function ProtectedRoute({ children }) {
    const { user, setUser, loading } = useContext(AppContext);
    const [routeLoad, setRouteLoad] = useState(true);

    useEffect(() => {
        setRouteLoad(false);
    }, [loading]);

    if (routeLoad) {
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                <img height="50px" src={loadingGif} alt="Loading..." />
            </div>
        );
    }

    if (!user) {
        return <Navigate replace to={'/' + routes.login} />;
    }

    return children;
};

export default ProtectedRoute;