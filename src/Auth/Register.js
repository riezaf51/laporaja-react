import '../Style/style.css'
import Carousel from './Carousel';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import routes from '../strings';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [province, setProvince] = useState("");
    const [kabkota, setKabkota] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        setDisabled(true);
        const user = {
            firstname: firstname,
            lastname: lastname,
            provinsi: province,
            kabkota: kabkota,
            kecamatan: kecamatan,
            phonenumber: phonenumber,
            email: email,
            password: password
        };
        if (password != confirmPassword) {
            setError("Password dan Konfirmasi Password tidak sama!");
            setDisabled(false);
            return;
        }
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/users', user
            );
            console.log(response.data.data);
            navigate('/' + routes.login);
        } catch {
            setError("Terjadi kesalahan, silahkan coba lagi");
            setDisabled(false);
        }
    }

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
                                                value={firstname}
                                                onChange={({ target }) => setFirstname(target.value)}
                                            />
                                            <label for="floatingInputGrid">Nama depan</label>
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
                                                value={lastname}
                                                onChange={({ target }) => setLastname(target.value)}
                                            />
                                            <label for="floatingInputGrid">Nama belakang</label>
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
                                                value={province}
                                                onChange={({ target }) => setProvince(target.value)}
                                            />
                                            <label for="floatingInputGrid">Provinsi</label>
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
                                                value={kabkota}
                                                onChange={({ target }) => setKabkota(target.value)}
                                            />
                                            <label for="floatingInputGrid">Kab/Kota</label>
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
                                                value={kecamatan}
                                                onChange={({ target }) => setKecamatan(target.value)}
                                            />
                                            <label for="floatingInputGrid">Kecamatan</label>
                                        </div>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="hp" name="phonenumber"
                                    placeholder="Hp"
                                    required
                                    value={phonenumber}
                                    onChange={({ target }) => setPhonenumber(target.value)}
                                />

                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={email}
                                    onChange={({ target }) => setEmail(target.value)}
                                />

                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Kata sandi"
                                    minLength="8"
                                    required
                                    value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                    autoComplete="off"
                                />

                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Konfirmasi Kata sandi"
                                    minLength="8"
                                    required
                                    value={confirmPassword}
                                    onChange={({ target }) => setConfirmPassword(target.value)}
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

export default Register;