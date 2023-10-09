import '../Style/style.css'
import Carousel from './Carousel';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL, routes } from '../strings';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        provinsi: "",
        kabkota: "",
        kecamatan: "",
        phonenumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        console.log(inputs);
        e.preventDefault();
        setDisabled(true);
        if (inputs.password !== inputs.confirmPassword) {
            setError("Password dan Konfirmasi Password tidak sama!");
            setDisabled(false);
            return;
        }
        try {
            const response = await axios.post(
                API_URL + '/api/users', inputs
            );
            console.log(response.data.data);
            navigate('/' + routes.login, { state: { message: 'Silahkan login dengan email yang sudah terdaftar!' } });
        } catch {
            setError("Terjadi kesalahan, silahkan coba lagi");
            setDisabled(false);
        }
    }

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="login d-flex ">
            <div className="login-left w-50 h-100">
                <div className="row justify-content-center align-item-center h-10">
                    <div className="col-6">
                        <div className="header">
                            <h1 className="gis">
                                Buat Akun
                            </h1>
                            <p className="d-inline">
                                Sudah punya akun? <Link to={'/' + routes.login} className="d-inline text text-decoration-none">Masuk</Link>
                            </p>
                        </div>

                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input
                                                type="firstname"
                                                className="form-control"
                                                id="floatingInputGrid"
                                                name="firstname"
                                                required
                                                value={inputs.firstname}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="floatingInputGrid">Nama depan</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input
                                                type="lastname"
                                                className="form-control"
                                                id="floatingInputGrid"
                                                name="lastname"
                                                required
                                                value={inputs.lastname}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="floatingInputGrid">Nama belakang</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-3">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input
                                                type="provinsi"
                                                className="form-control"
                                                id="floatingInputGrid"
                                                name="provinsi"
                                                required
                                                value={inputs.provinsi}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="floatingInputGrid">Provinsi</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input
                                                type="kabkota"
                                                className="form-control"
                                                id="floatingInputGrid"
                                                name="kabkota"
                                                required
                                                value={inputs.kabkota}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="floatingInputGrid">Kab/Kota</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input
                                                type="kecamatan"
                                                className="form-control"
                                                id="floatingInputGrid"
                                                name="kecamatan"
                                                required
                                                value={inputs.kecamatan}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="floatingInputGrid">Kecamatan</label>
                                        </div>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="hp" name="phonenumber"
                                    placeholder="Hp"
                                    required
                                    value={inputs.phonenumber}
                                    onChange={handleChange}
                                />

                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={inputs.email}
                                    onChange={handleChange}
                                />

                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Kata sandi"
                                    minLength="8"
                                    required
                                    value={inputs.password}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />

                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmpassword"
                                    name="confirmPassword"
                                    placeholder="Konfirmasi Kata sandi"
                                    minLength="8"
                                    required
                                    value={inputs.confirmPassword}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />

                                <div className="masuk">
                                    <button disabled={disabled} style={{ cursor: 'pointer' }} type="submit" className="btn btn-outline-secondary border-">Daftar</button>
                                </div>
                            </form>
                            <Link to={'/' + routes.dashboard + '/' + routes.home} className="text-decoration-none d-flex justify-content-center">Masuk Sebagai Guest</Link>
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
        </section >
    );
}
