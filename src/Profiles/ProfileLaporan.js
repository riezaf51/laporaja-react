import '../Style/styled.css'

function ProfileLaporan() {
    return (
        <section id="interface">

            {/* <!-- <div className="navigation">
                <div className="n1">
                    <div>
                        <i id="menu-btn" className="fas fa-bars"></i>
                    </div>
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Cari">
                    </div>
                </div>

                <div className="profile">
                    <i className="far fa-bell"></i>
                </div>
            </div> --> */}

            <h3 className="i-name">
                Laporan
            </h3>

            <div className="uptask">
                <div className="uptaskspace">
                    <h4><a className="active" href="/profilelaporan"><small><b>Semua Laporan</b></small></a></h4>
                </div>

                <div className="uptaskspace">
                    <h4><a href="/profilelaporan/laporan-diproses"><small><b>Progres</b></small></a></h4>
                </div>

                <div className="uptaskspace">
                    <h4><a href="/profilelaporan/laporan-ditolak"><small><b>Ditolak</b></small></a></h4>
                </div>

                <div className="uptaskspace">
                    <h4><a href="/profilelaporan/laporan-selesai"><small><b>Selesai</b></small></a></h4>
                </div>
            </div>

            <div className="board">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>Judul Laporan</td>
                            <td>Provinsi</td>
                            <td>Kab/Kota</td>
                            <td>Kecamatan</td>
                            <td>Status</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="people">
                                {/* <!-- <img src="images\man1.jpg" alt=""> --> */}
                                <h5>name</h5>

                            </td>

                            <td className="people-des">
                                <h5>judul</h5>
                            </td>

                            <td className="people-prov">
                                <h5>provinsi</h5>
                            </td>

                            <td className="people-city">
                                <h5>kabkota</h5>
                            </td>

                            <td className="people-kec">
                                <h5>kecamatan</h5>
                            </td>
                            <td className="active"><p className="done">Selesai</p></td>
                            {/* <td className="active"><p className="not">Ditolak</p></td>
                            <td className="active"><p className="prog">Progres</p></td> */}
                            <td className="edit"><a href="/profilelaporan/edit/{{$data->id}}">Edit</a></td>
                            <td className="delete"><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal-{{$data->id}}">Delete</a></td>
                            <div className="modal fade" id="exampleModal-{{$data->id}}" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                            <form id="delete-form-{{$data->id}}" action="{{route('laporan.delete', $data->id)}}" method="POST">
                                                <button type="submit" className="btn btn-danger">Hapus</button>
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
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default ProfileLaporan;