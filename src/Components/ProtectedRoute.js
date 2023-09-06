import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { Navigate } from "react-router-dom";
import { routes } from "../strings";
import loadingGif from "../Images/loading.gif";
import '../Style/styled.css'
import Loading from "./Loading";

function ProtectedRoute({ children }) {
    const { user, setUser, loading } = useContext(AppContext);

    if (!user) {
        return <Navigate replace to={'/' + routes.login} />;
    }

    return children;
};

export default ProtectedRoute;