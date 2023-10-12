import { Link } from "react-router-dom";
import { API_URL, routes } from "../strings";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function ProfileLaporanTableRow({ item, forAdmin = false, refreshHandler }) {
    const { stateToken } = useContext(AppContext);
    const [disabled, setDisabled] = useState(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        setDisabled(true);
        const headers = { Authorization: `Bearer ${stateToken}` }
        await axios.delete(`${API_URL}/api/laporan/${item.id}`, { headers })
            .then(res => {
                refreshHandler(true);
            })
            .catch(error => {
                setDisabled(false);
                console.error(error);
            });
        console.log(e.target);
    };

    return (
        <tr>
            <td className="people">
                {/* <!-- <img src="images\man1.jpg" alt=""> --> */}
                <h5>{item.user.firstname} {item.user.lastname}</h5>

            </td>

            <td className="people-des">
                <h5>{item.judul}</h5>
            </td>

            <td className="people-prov">
                <h5>{item.provinsi}</h5>
            </td>

            <td className="people-city">
                <h5>{item.kabkota}</h5>
            </td>

            <td className="people-kec">
                <h5>{item.kecamatan}</h5>
            </td>
            {item.status === "selesai" &&
                <td className="active"><p className="done">Selesai</p></td>
            }
            {item.status === "ditolak" &&
                <td className="active"><p className="not">Ditolak</p></td>
            }
            {item.status === "diproses" &&
                <td className="active"><p className="prog">Progres</p></td>
            }
            {forAdmin &&
                < td className="edit"><Link to={'/' + routes.profile + '/' + routes.profile_tanggapi + '/' + item.id}>Tanggapi</Link></td>
            }
            <td className="delete"><Link data-bs-toggle="modal" data-bs-target={`#exampleModal-${item.id}`}>Delete</Link></td>
            <div className="modal fade" id={`exampleModal-${item.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Hapus Laporan</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Apakah anda yakin akan menghapus laporan ini?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                            <form id={`delete-form-${item.id}`} onSubmit={handleDelete} method="POST">
                                <button disabled={disabled} type="submit" className="btn btn-danger" data-bs-dismiss="modal">Hapus</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- @if (Auth::user()->isAdmin())
                            @if ($data->user_id==auth()->id())
                            <td className="edit">
                                <a href="{{ route('profile') }}"
                                    onclick="event.preventDefault();
                                    document.getElementById(
                                    'delete-form-{{$data->id}}').submit();">
                                    Delete
                                </a>
                            </td>
                            <form id="delete-form-{{$data->id}}" action="{{route('laporan.delete', $data->id)}}" method="POST">
                                @csrf
                                @method('DELETE')
                            </form>
                            @else
                            <td className="edit"><a href="#">Edit</a></td>
                            @endif
                            @else
                            <td className="edit">
                                <a href="{{ route('profile') }}"
                                    onclick="event.preventDefault();
                                document.getElementById(
                                'delete-form-{{$data->id}}').submit();">
                                    Delete
                                </a>
                            </td>
                            <form id="delete-form-{{$data->id}}" action="{{route('laporan.delete', $data->id)}}" method="POST">
                                @csrf
                                @method('DELETE')
                            </form>
                        @endif --> */}
        </tr >
    )
}