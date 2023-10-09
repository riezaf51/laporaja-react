import '../../Style/style.css';
import { Link } from 'react-router-dom';
import { API_URL, routes } from '../../strings';
import { useContext, useState } from 'react';
import { AppContext } from '../../App';
import axios from 'axios';

export default function AddContact() {
    const { user, stateToken } = useContext(AppContext);
    const [disabled, setDisabled] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const [inputs, setInputs] = useState({
        admin_id: user.id,
        jenisinstansi: "",
        namainstansi: "",
        nomortelepon: "",
        alamat: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();
        if (inputs.jenisinstansi === "") {
            setError("Silahkan pilih jenis instansi terlebih dahulu!");
            return;
        }
        setDisabled(true);
        try {
            const headers = { Authorization: "Bearer " + stateToken };
            const response = await axios.post(
                API_URL + '/api/kontakpenting',
                inputs,
                { headers }
            );
            console.log(response);
            setError();
            setSuccess("Kontak Penting berhasil ditambahkan!")
            resetForm();
        } catch {
            console.log('fail');
            setError("Terjadi kesalahan")
        }
        setDisabled(false);
    }

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setInputs({
            admin_id: user.id,
            jenisinstansi: "",
            namainstansi: "",
            nomortelepon: "",
            alamat: "",
        });
    };

    return (
        <div>
            <section id="textsatu">
                <h1>Tambahkan Nomer Penting dibawah!</h1>
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
                <form method="POST" onSubmit={handleSubmit} className="row g-3">
                    <select className="form-select" aria-label="Default select example" name="jenisinstansi" onChange={handleChange}>
                        <option value="" disabled selected hidden>Silahkan pilih jenis instansi</option>
                        <option value="Rumah Sakit">Rumah Sakit</option>
                        <option value="Kantor Polisi">Polisi</option>
                        <option value="Kantor Pemadam">Pemadam Kebakaran</option>
                    </select>

                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" name="namainstansi" placeholder="Nama Instansi" value={inputs.namainstansi} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" name="nomortelepon" placeholder="Alamat Instansi" value={inputs.nomortelepon} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress2" name="alamat" placeholder="Nomor Telepon Instansi" value={inputs.alamat} onChange={handleChange} required />
                    </div>


                    <section id="but">
                        <Link to={'/' + routes.dashboard + '/' + routes.contact}><button type="button" className="btn btn-danger">Batal</button></Link>
                        <button disabled={disabled} type="submit" className="btn btn-primary">Tambah</button>
                    </section>
                </form>
            </main>
        </div >
    );
}
