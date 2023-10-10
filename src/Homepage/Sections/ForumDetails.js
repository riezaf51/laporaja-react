import { useEffect, useState } from 'react';
import '../../Style/stylef.css'
import Loading from '../../Components/Loading';
import { API_URL, routes } from '../../strings';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ForumDetails() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL + `/api/laporan/${id}`);
                const jsonData = response.data
                console.log(response.data);
                setData(jsonData);
                setSuccess(true);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ' + error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

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
        <div className='min-vh-100'>
            <section id="textsatu">
                {data.status === "diproses" &&
                    <h1 className='text-warning'>Diproses</h1>
                }
                {data.status === "ditolak" &&
                    <h1 className='text-danger'>Ditolak</h1>
                }
                {data.status === "selesai" &&
                    <h1 className='text-success'>Selesai</h1>
                }
            </section>

            <main className="px-3">
                <h6>Dilaporkan oleh: {data.user.firstname} {data.user.lastname}</h6>
                {data.admin &&
                    <h6>Ditanggapi oleh: {data.user.firstname} {data.user.lastname}</h6>
                }
                <form className="row g-3">
                    <div className="col-12">
                        <input type="text" readOnly className="form-control" value={data.judul} name='judul' id="inputAddress" placeholder="Judul" required />
                    </div>
                    <div className="col-12">
                        <input type="text" readOnly className="form-control" value={data.alamat} name='alamat' id="inputAddress2" placeholder="Alamat" required />
                    </div>


                    <div className="col-md-4">
                        <input type="text" readOnly className="form-control" value={data.provinsi} name='provinsi' id="validationCustom01" placeholder="Provinsi" required />
                    </div>
                    <div className="col-md-4">
                        <input type="text" readOnly className="form-control" value={data.kabkota} name='kabkota' id="validationCustom02" placeholder="Kab/Kota" required />
                    </div>
                    <div className="col-md-4">
                        <div className="input-group has-validation">
                            <input type="text" readOnly className="form-control" value={data.kecamatan} name='kecamatan' id="validationCustom02" placeholder="Kecamatan" required />
                        </div>
                    </div>

                    {/* <!--
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" placeholder="Nama Pelapor" />
                    </div> --> */}
                    <div className="form-floating">
                        <textarea readOnly className="form-control" value={data.deskripsi} name='deskripsi' placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 + 'px' }} required />
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
                        <Link to={'/' + routes.dashboard + '/' + routes.forum}><button type="button" className="btn btn-danger">Kembali</button></Link>
                    </div>
                </form>
            </main>
        </div >
    );
}
