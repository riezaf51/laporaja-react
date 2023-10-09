import { useContext } from "react";
import { AppContext } from "../App";
import '../Style/styled.css'

export default function Profile() {
    const { user } = useContext(AppContext);
    return (
        <section id="interface">
            <h3 className="i-name">
                Profile
            </h3>

            <div className="info">
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Nama</label>
                    <div className="col-sm-4">
                        <input type="text" readOnly className="form-control-plaintext" value={user.firstname + ' ' + user.lastname} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Telepon</label>
                    <div className="col-sm-4">
                        <input type="text" readOnly className="form-control-plaintext" value={user.phonenumber} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Provinsi</label>
                    <div className="col-sm-4">
                        <input type="text" readOnly className="form-control-plaintext" value={user.provinsi} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Kota</label>
                    <div className="col-sm-4">
                        <input type="text" readOnly className="form-control-plaintext" value={user.kabkota} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Kecamatan</label>
                    <div className="col-sm-4">
                        <input type="text" readOnly className="form-control-plaintext" value={user.kecamatan} />
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-4">
                        <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={user.email} />
                    </div>
                </div>

            </div>

            <div>
                <a href="/akun/ubahemail/{{$user->id}}"><button type="button" className="btn btn-outline-secondary">Ganti Email</button></a>
                <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#hapus-{{$user->id}}">Hapus Akun</button>
            </div>

            <div className="modal fade" id="hapus-{{$user->id}}" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Hapus Akun</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Apakah anda yakin akan menghapus akun anda ini??
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Batal</button>

                            <form id="delete-form-{{$user->id}}" action="{{route('akun.delete', $user->id)}}" method="POST">
                                <button type="submit" className="btn btn-danger">Hapus</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
