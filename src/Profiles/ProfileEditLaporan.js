import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { API_URL, routes } from "../strings";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { AppContext } from "../App";

export default function ProfileEditLaporan() {
    const { id } = useParams();
    const { user, stateToken } = useContext(AppContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [inputs, setInputs] = useState({
        admin_id: user.id,
        status: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${API_URL}/api/laporan/${id}`)
                .then(res => {
                    setData(res.data);
                    setSuccess(true);
                    setInputs({
                        ...inputs,
                        status: res.data.status,
                    });
                    console.log(res.data);
                })
                .catch(error => {
                    setSuccess(false);
                    console.error(error);
                });
            setLoading(false);
        }

        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const headers = {
            Authorization: `Bearer ${stateToken}`,
        }
        await axios.put(`${API_URL}/api/laporan/${id}`,
            inputs,
            { headers }
        ).then(res => {
            navigate('/' + routes.profile + '/' + routes.profile_tanggapi,
                { state: { message: "Laporan berhasil ditanggapi!" } });
        }).catch(error => {
            console.log(inputs);
            setError("Terjadi kesalahan, silakan coba lagi!");
            setDisabled(false);
            console.error(error);
        });
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
        <section id="interface">
            <h3 className="i-name">
                Tanggapan
            </h3>

            <div className="info">
                {error &&
                    <div className="alert alert-danger">
                        {error}
                    </div>
                }
                <div className="col-5">
                    <h4 className="mt-3"><b>Judul</b></h4>
                    <div className="row">
                        <input type="text" className="form-control" id="inputAddress" value={data.judul} disabled />
                    </div>
                    <h4 className="mt-3"><b>Alamat</b></h4>
                    <div className="row">
                        <input type="text" className="form-control" id="inputAddress" value={data.alamat} disabled />
                    </div>
                    <h4 className="mt-3"><b>Provinsi</b></h4>
                    <div className="row">
                        <input type="text" className="form-control" id="inputAddress" value={data.provinsi} disabled />
                    </div>
                    <h4 className="mt-3"><b>Kab/Kota</b></h4>
                    <div className="row">
                        <input type="text" className="form-control" id="inputAddress" value={data.kabkota} disabled />
                    </div>
                    <h4 className="mt-3"><b>Kecamatan</b></h4>
                    <div className="row">
                        <input type="text" className="form-control" id="inputAddress" value={data.kecamatan} disabled />
                    </div>
                    <h4 className="mt-3"><b>Deskripsi</b></h4>
                    <div className="row">
                        <textarea type="text" className="form-control" id="inputAddress" disabled >
                            {data.deskripsi}
                        </textarea>
                    </div>
                    <h4 className="mt-3"><b>Status Saat Ini</b></h4>
                    <div className="row">
                        {data.status === "diproses" &&
                            <h6 className="text-warning">
                                Diproses
                            </h6>
                        }
                        {data.status === "ditolak" &&
                            <h6 className="text-danger">
                                Ditolak
                            </h6>
                        }
                        {data.status === "selesai" &&
                            <h6 className="text-success">
                                Selesai
                            </h6>
                        }
                    </div>
                </div>
            </div>
            <form method="POST" className="mb-5" onSubmit={handleSubmit}>
                <div className="radio">
                    <h4><b>Ubah Status</b></h4>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="flexRadioDefault1" value="diproses" onChange={handleChange} checked={inputs.status === 'diproses'} />
                        <label className="form-check-label" for="flexRadioDefault1">
                            Diproses
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="flexRadioDefault2" value="ditolak" onChange={handleChange} checked={inputs.status === 'ditolak'} />
                        <label className="form-check-label" for="flexRadioDefault2">
                            Ditolak
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="status" id="flexRadioDefault3" value="selesai" onChange={handleChange} checked={inputs.status === 'selesai'} />
                        < label className="form-check-label" for="flexRadioDefault3">
                            Selesai
                        </label>
                    </div>
                </div>
                <Link to={'/' + routes.profile + '/' + routes.profile_tanggapi}><button type="button" className="btn btn-outline-secondary">Batal</button></Link>
                <button disabled={disabled} type="submit" className="btn btn-outline-primary">Simpan</button>
            </form>
        </section >
    );
}