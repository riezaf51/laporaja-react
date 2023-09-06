import { useContext, useEffect, useState } from 'react';
import '../../Style/style.css'
import App, { AppContext } from '../../App';
import axios from 'axios';
import { API_URL } from '../../strings';

function Laporan() {
    const { user, setUser, stateToken } = useContext(AppContext);
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [kabkota, setKabkota] = useState("");
    const [kecamatan, setKecamatan] = useState("");
    const [description, setDescription] = useState("");
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (user != undefined) {
            setProvince(user.provinsi);
            setKabkota(user.kabkota);
            setKecamatan(user.kecamatan);
        }
    }, [user]);

    const handleSubmit = async e => {
        e.preventDefault();
        setDisable(true);
        const laporan = {
            user_id: user.id,
            judul: title,
            alamat: address,
            provinsi: province,
            kabkota: kabkota,
            kecamatan: kecamatan,
            deskripsi: description
        }
        try {
            const headers = { Authorization: "Bearer " + stateToken };
            const response = await axios.post(
                API_URL + '/api/laporan',
                laporan,
                { headers }
            );
            console.log(response);
            setSuccess("Laporan berhasil dikirim!")
            setTitle("");
            setAddress("");
            setProvince(user.provinsi);
            setKabkota(user.kabkota);
            setKecamatan(user.kecamatan);
            setDescription("");
        } catch {
            console.log('fail');
            setError("Terjadi kesalahan")
        }
        setDisable(false);
    }

    return (
        <div className='vh-100'>
            <section id="textsatu">
                <h1>Tulis laporan kamu disini!</h1>
            </section>

            <main className="px-3">
                {error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                {success &&
                    <div className="alert alert-success">
                        {success}
                    </div>
                }
                <form method="POST" action="/laporan" className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <input type="text" className="form-control" value={title} onChange={({ target }) => setTitle(target.value)} name='judul' id="inputAddress" placeholder="Judul" required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" value={address} onChange={({ target }) => setAddress(target.value)} name='alamat' id="inputAddress2" placeholder="Alamat" required />
                    </div>


                    <div className="col-md-4">
                        <input type="text" className="form-control" value={province} onChange={({ target }) => setProvince(target.value)} name='provinsi' id="validationCustom01" placeholder="Provinsi" required />
                    </div>
                    <div className="col-md-4">
                        <input type="text" className="form-control" value={kabkota} onChange={({ target }) => setKabkota(target.value)} name='kabkota' id="validationCustom02" placeholder="Kab/Kota" required />
                    </div>
                    <div className="col-md-4">
                        <div className="input-group has-validation">
                            <input type="text" className="form-control" value={kecamatan} onChange={({ target }) => setKecamatan(target.value)} name='kecamatan' id="validationCustom02" placeholder="Kecamatan" required />
                        </div>
                    </div>

                    {/* <!--
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Nama Pelapor" />
                    </div> --> */}
                    <div className="form-floating">
                        <textarea className="form-control" value={description} onChange={({ target }) => setDescription(target.value)} name='deskripsi' placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 + 'px' }} required />
                        <label htmlFor="floatingTextarea2">Deskripsi Laporan</label>
                    </div>

                    {/* <!-- <div className="mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                        </svg>
                        <input className="form-control" type="file" id="formFile" />
                    </div>

                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Kirim sebagai Anonim</label>
                    </div> --> */}

                    <div className="col-12 text-center">
                        <button type="submit" disabled={disable} className="btn btn-primary">Kirim</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Laporan;