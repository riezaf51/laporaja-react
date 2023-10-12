import { Link } from "react-router-dom";
import logo from "../assets/logo header.png"
import { routes } from "../strings";

export default function ServerInactive() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <Link to={routes.root}>
                    <img src={logo} alt="logo" />
                </Link>
                <h1 className="display-1 fw-bold">503</h1>
                <p className="lead">Layanan Tidak Tersedia</p>
            </div>
        </div>
    );
}
