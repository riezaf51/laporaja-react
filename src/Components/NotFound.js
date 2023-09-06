import { Link } from "react-router-dom";
import logo from "../Images/logo header.png"
import { routes } from "../strings";

function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <Link to={routes.root}>
                    <img src={logo} alt="logo" />
                </Link>
                <h1 className="display-1 fw-bold">404</h1>
                <p className="lead">Halaman tidak ditemukan</p>
            </div>
        </div>
    );
}

export default NotFound;