import '../Style/style.css'
import Carousel from './Carousel';
import { Link, Navigate } from 'react-router-dom';
import { API_URL, routes } from '../strings';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../App';

function Login() {
    const { user, setUser, setToken } = useContext(AppContext);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    // useEffect(() => {
    //     const fetchCSRF = async () => {
    //         const response = await axios.get(API_URL + '/sanctum/csrf-cookie')
    //             .then(response => {
    //                 setDisabled(false);
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 setError("Gagal mengambil token")
    //             });
    //     };
    //     fetchCSRF();
    // }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        setDisabled(true);
        const user = { email, password };
        // send the email and password to the server
        try {
            const response = await axios.post(
                API_URL + '/api/login',
                user
            );
            // set the state of the user

            // store the user in localStorage
            localStorage.setItem('user_id', response.data.user_id);
            localStorage.setItem('token', response.data.token);
            setToken(response.data.token);
            setUser(response.data.user);
            setError("");
        } catch {
            setError("Email atau password salah!");
            console.log("fail");
            setDisabled(false);
        }
    };

    return (
        <section className="login d-flex">
            <div className="login-left w-50 h-100">
                <div className="row justify-content-center align-item-center h-10">
                    <div className="col-6">
                        <div className="header">
                            <h1>Masuk</h1>
                            <p className="d-inline">
                                Belum punya akun? <Link to={'/' + routes.register} className="d-inline text text-decoration-none">Daftar</Link>
                            </p>
                        </div>

                        <div className="login-form">

                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={({ target }) => setEmail(target.value)}
                                    placeholder="Email"
                                    required
                                />

                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                    placeholder="Kata sandi"
                                    autoComplete="off"
                                    required
                                />

                                <div className="masuk">
                                    <button disabled={disabled} style={{ cursor: 'pointer' }} type="submit" className="btn btn-outline-secondary border-">Masuk</button>
                                </div>

                                <Link to={'/' + routes.dashboard + '/' + routes.home} className="text-decoration-none d-flex justify-content-center">Masuk Sebagai Guest</Link>
                            </form>
                        </div>
                        <br />
                        {error &&
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Carousel />
        </section>
    );
}

export default Login;