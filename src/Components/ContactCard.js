import { Link } from "react-router-dom";
import { API_URL, routes } from "../strings";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";

export default function ContactCard({ item, refreshHandler }) {
    const { user, stateToken } = useContext(AppContext);
    const [disable, setDisable] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setDisable(true);
        try {
            const headers = { Authorization: "Bearer " + stateToken };
            const response = await axios.delete(
                API_URL + `/api/kontakpenting/${item.id}`,
                { headers }
            );
            console.log(response);
            refreshHandler(true);
            // setSuccess("Laporan berhasil dikirim!")
            // resetForm();
        } catch {
            console.log('fail');
            // setError("Terjadi kesalahan")
        }
        setDisable(false);
    };

    return (
        <div className="card p-2 justify-content-center mb-2">
            <h4 className="jenis">{item.namainstansi}</h4>
            {/* <!-- <h4>{{$data->namainstansi}}<i className="fa-solid fa-play"></i></h4> --> */}
            <h6 className="alamat"  >{item.alamat}</h6>
            <h6>{item.nomortelepon}</h6>
            <br />
            {user && user.role === 'admin' &&
                <div className="align-items-center">
                    <Link to={routes.edit + '/' + item.id}><button type="button" className="btn btn-outline-secondary">Ganti Data</button></Link>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target={`#instansi-${item.id}`}>Hapus Data</button>
                    <div className="modal fade" id={`instansi-${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Hapus Data</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {`Apakah anda yakin akan menghapus ${item.jenisinstansi} ini?`}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                    <form id={`delete-form-${item.id}`} onSubmit={handleDelete}>
                                        <button disabled={disable} type="submit" className="btn btn-danger" data-bs-dismiss="modal">Hapus</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
