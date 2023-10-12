import { useState } from 'react';
import '../style/styled.css'
import ProfileLaporanTable from './ProfileLaporanTable';
import { Link, useSearchParams } from 'react-router-dom';

export default function ProfileLaporan({ forAdmin = false }) {
    const [searchParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const [type, setType] = useState(searchParams.get('jenis'));

    const changeType = (type) => {
        setType(type);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        < section id="interface" >
            <div className="navigation">
                <div className="n1">
                    <div>
                        <i id="menu-btn" className="fas fa-bars"></i>
                    </div>
                    <div className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="p-1" type="text" placeholder="Cari" value={search} onChange={handleSearch} />
                    </div>
                </div>

                <div className="n1">
                    <div className="uptask">
                        <div className="uptaskspace">
                            <h4><Link to="" className={!type ? "active" : ""} onClick={() => changeType('')}><small><b>Semua Laporan</b></small></Link></h4>
                        </div>

                        <div className="uptaskspace">
                            <h4><Link to="?jenis=diproses" className={type === "diproses" ? "active" : ""} onClick={() => changeType('diproses')}><small><b>Progres</b></small></Link></h4>
                        </div>

                        <div className="uptaskspace">
                            <h4><Link to="?jenis=ditolak" className={type === "ditolak" ? "active" : ""} onClick={() => changeType('ditolak')}><small><b>Ditolak</b></small></Link></h4>
                        </div>

                        <div className="uptaskspace">
                            <h4><Link to="?jenis=selesai" className={type === "selesai" ? "active" : ""} onClick={() => changeType('selesai')}><small><b>Selesai</b></small></Link></h4>
                        </div>
                    </div>
                </div>

            </div>

            < h3 className="i-name mb-5" >
                Laporan
            </h3 >

            <ProfileLaporanTable type={type} forAdmin={forAdmin} search={search.toLowerCase()} />
        </section >
    );
}
