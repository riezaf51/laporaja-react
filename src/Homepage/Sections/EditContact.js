import '../../Style/style.css';
import { Link, useParams } from 'react-router-dom';
import { API_URL, routes } from '../../strings';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { useEffect } from 'react';
import axios from 'axios';
import Loading from '../../Components/Loading';

export default function EditContact() {
    const { id } = useParams();
    const { user, stateToken } = useContext(AppContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        admin_id: user.id,
        jenisinstansi: "",
        namainstansi: "",
        nomortelepon: "",
        alamat: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${API_URL}/api/kontakpenting/${id}`)
                .then(res => {
                    setData({
                        admin_id: user.id,
                        jenisinstansi: res.data.jenisinstansi,
                        namainstansi: res.data.namainstansi,
                        nomortelepon: res.data.nomortelepon,
                        alamat: res.data.alamat,
                    });
                    console.log(res.data)
                    setSuccess(true);
                    setInputs(res.data);
                })
                .catch(error => {
                    console.error(error);
                    setSuccess(false);
                });
            setLoading(false);
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const headers = { Authorization: `Bearer ${stateToken}` }
        await axios.put(`${API_URL}/api/kontakpenting/${id}`, inputs, { headers })
            .then(res => {
                console.log(res);
                setMessage("Kontak Penting berhasil di edit!");
                setError();
            })
            .catch(error => {
                console.error(error);
                setError("Terjadi kesalahan, silahkan coba lagi!")
                setMessage("");
            });
        setDisabled(false);
    };

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!success) {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                Problem occured while fetching data
            </div>
        );
    }

    return (
        <div>
            <section id="textsatu">
                <h1>Silahkan mengubah Nomer Penting dibawah!</h1>
            </section>

            <main className="px-3">
                {error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                {message &&
                    <div className="alert alert-success">
                        {message}
                    </div>
                }
                <form method="POST" onSubmit={handleSubmit} className="row g-3">
                    <select className="form-select" aria-label="Default select example" name="jenisinstansi" onChange={handleChange}>
                        <option value="Rumah Sakit" selected={data.jenisinstansi === "Rumah Sakit"}>Rumah Sakit</option>
                        <option value="Kantor Polisi" selected={data.jenisinstansi === "Kantor Polisi"}>Polisi</option>
                        <option value="Kantor Pemadam" selected={data.jenisinstansi === "Kantor Pemadam"}>Pemadam Kebakaran</option>
                    </select>

                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" name="namainstansi" value={inputs.namainstansi} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" name="nomortelepon" value={inputs.nomortelepon} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress2" name="alamat" value={inputs.alamat} onChange={handleChange} required />
                    </div>


                    <section id="but">
                        <Link to={'/' + routes.dashboard + '/' + routes.contact}><button type="button" className="btn btn-danger">Kembali</button></Link>
                        <button disabled={disabled} type="submit" className="btn btn-primary">Ganti</button>
                    </section>
                </form>
            </main>
        </div >
    );
}
