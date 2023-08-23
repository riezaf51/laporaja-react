import '../../Style/style.css';
import { Link } from 'react-router-dom';
import routes from '../../strings';

function EditContact() {
    return (
        <div>
            <section id="textsatu">
                <h1>Tambahkan Nomer Penting dibawah!</h1>
            </section>

            <main className="px-3">
                <form method="POST" action="{{route('kontak.update', $kontak->id)}}" className="row g-3">
                    <select className="form-select" aria-label="Default select example" name="jenisinstansi">
                        <option value="Rumah Sakit" selected>Rumah Sakit</option>
                        <option value="Kantor Polisi">Polisi</option>
                        <option value="Kantor Pemadam">Pemadam Kebakaran</option>
                    </select>

                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" name="namainstansi" value="{{$kontak->namainstansi}}" required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress" name="nomortelepon" value="{{$kontak->nomortelepon}}" required />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress2" name="alamat" value="{{$kontak->alamat}}" required />
                    </div>


                    <section id="but">
                        <Link to={'/' + routes.dashboard + '/' + routes.contact}><button type="button" className="btn btn-danger">Batal</button></Link>
                        <button type="submit" className="btn btn-primary">Ganti</button>
                    </section>
                </form>
            </main>
        </div >
    );
}

export default EditContact;