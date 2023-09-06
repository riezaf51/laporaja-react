import '../../Style/stylef.css';
import imgrs from '../../Images/imgrs.png';
import imgfire from '../../Images/imgfire.png';
import { routes } from '../../strings';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <section id="daftar">
                {/* <!-- <div className="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </div> --> */}
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <li><Link href=""><i className="fa-solid fa-hospital"></i>Rumah sakit</Link></li>
                        </div>
                        <div className="col">
                            <li><img src={imgrs} alt="" /><Link href="">Polisi</Link></li>
                        </div>
                        <div className="col">
                            <li><img src={imgfire} alt="" /><Link href="">Pemadam</Link></li>
                        </div>
                    </div>
                </div>
            </section>

            <section id="main">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>namainstansi</h4>
                            {/* <!-- <h4>{{$data->namainstansi}}<i className="fa-solid fa-play"></i></h4> --> */}
                            <h7>alamat</h7>
                            <h7>nomortelepon</h7>
                            <br />
                            <div>
                                <Link to={routes.edit + '/1'}><button type="button" className="btn btn-outline-secondary">Ganti Data</button></Link>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#RS-1">Hapus Data</button>
                                <p></p>
                                <div className="modal fade" id="RS-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Hapus Data</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Apakah anda yakin akan menghapus Rumah Sakit ini??
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                                <form id="delete-form-{{$data->id}}" action="{{route('kontak.delete', $data->id)}}" method="POST">
                                                    <button type="submit" className="btn btn-danger">Hapus</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <h4><strong>{{$data->namainstansi}}</strong></h4>
                        <h6>{{$data->alamat}}</h6>
                        <h6>{{$data->nomortelepon}}</h6> --> */}
                        </div>
                        <div className="col">
                            <h4>namainstansi</h4>
                            <h7>alamat</h7>
                            <h7>nomortelepon</h7>
                            <br />
                            <div>
                                <Link to={routes.edit + '/1'}><button type="button" className="btn btn-outline-secondary">Ganti Data</button></Link>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Polsek-1">Hapus Data</button>
                                <p></p>
                                <div className="modal fade" id="Polsek-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Hapus Data</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Apakah anda yakin akan menghapus Kantor Polisi ini??
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                                <form id="delete-form-{{$data->id}}" action="{{route('kontak.delete', $data->id)}}" method="POST">
                                                    <button type="submit" className="btn btn-danger">Hapus</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <h4><strong>{{$data->namainstansi}}</strong></h4>
                        <h6>{{$data->alamat}}</h6>
                        <h6>{{$data->nomortelepon}}</h6> --> */}
                        </div>
                        <div className="col">
                            <h4>namainstansi</h4>
                            <h7>lamat</h7>
                            <h7>nomortelepon</h7>
                            <br />
                            <div>
                                <Link to={routes.edit + '/1'}><button type="button" className="btn btn-outline-secondary">Ganti Data</button></Link>
                                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#Pemadam-1">Hapus Data</button>
                                <p></p>
                                <div className="modal fade" id="Pemadam-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Hapus Data</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                Apakah anda yakin akan menghapus Kantor Pemadam ini??
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                                                <form id="delete-form-{{$data->id}}" action="{{route('kontak.delete', $data->id)}}" method="POST">
                                                    <button type="submit" className="btn btn-danger">Hapus</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <h4><strong>{{$data->namainstansi}}</strong></h4>
                        <h6>{{$data->alamat}}</h6>
                        <h6>{{$data->nomortelepon}}</h6> --> */}
                        </div>
                    </div>
                </div>
                <div className="plus col">
                    <li><Link to={routes.add}><i className="fa-solid fa-plus"></i>Tambah Nomer Penting</Link></li>
                </div>
            </section>
        </div>
    );
}

export default Contact;