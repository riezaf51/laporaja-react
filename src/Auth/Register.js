import '../Style/style.css'
import Carousel from './Carousel';
import { Link, Navigate } from 'react-router-dom';
import routes from '../strings';
import { useEffect, useState } from 'react';

function Register() {

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
                            <form method="POST" action="/register">
                                <div className="row g-2">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="firstname" className="form-control" id="floatingInputGrid" name="firstname" required />
                                            <label for="floatingInputGrid">Nama depan</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="lastname" className="form-control" id="floatingInputGrid" name="lastname" required />
                                            <label for="floatingInputGrid">Nama belakang</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-3">
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="provinsi" className="form-control" id="floatingInputGrid" name="provinsi" required />
                                            <label for="floatingInputGrid">Provinsi</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="kabkota" className="form-control" id="floatingInputGrid" name="kabkota" required />
                                            <label for="floatingInputGrid">Kab/Kota</label>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="form-floating">
                                            <input type="kecamatan" className="form-control" id="floatingInputGrid" name="kecamatan" required />
                                            <label for="floatingInputGrid">Kecamatan</label>
                                        </div>
                                    </div>
                                </div>

                                <input type="text" className="form-control" id="hp" name="phonenumber" placeholder="Hp" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" required />

                                <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />

                                <input type="password" className="form-control" id="password" name="password" placeholder="Kata sandi" minlength="8" required />

                                <input type="password" className="form-control" id="confirmpassword" name="confirmpassword" placeholder="Konfirmasi Kata sandi" minlength="8" required />

                                <div className="masuk">
                                    <button style={{ cursor: 'pointer' }} type="submit" className="btn btn-outline-secondary border-">Daftar</button>
                                </div>
                            </form>
                            <Link to={'/' + routes.dashboard + '/' + routes.home} className="text-decoration-none d-flex justify-content-center">Masuk Sebagai Guest</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Carousel />
        </section >
    );
}

export default Register;