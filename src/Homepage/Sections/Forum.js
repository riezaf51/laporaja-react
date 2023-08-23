import { useEffect, useState } from 'react';
import '../../Style/stylef.css'

function Forum() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/laporan');
            const jsonData = await response.json();
            setData(jsonData);
            setSuccess(true);
            setLoading(false); // Set loading to false on error as well
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Set loading to false on error as well
            // alert(error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!success) {
        return <div>Problem occured while fetching data</div>;
    }

    return (
        <div className='row'>
            <div className="container justify-content-center">
                <div className="forum">
                    {data.data.map(item => (
                        <div className="kiri">
                            {/* <h3 className="namauser">{item.judul}</h3> */}
                            <h3 className="jenis">{item.judul}
                                {item.status == 'selesai' &&
                                    <i className="fa-solid fa-check"></i>
                                }
                                {item.status == 'ditolak' &&
                                    <i className="fa-solid fa-xmark"></i>
                                }
                                {item.status == 'diproses' &&
                                    <i className="fa-solid fa-arrows-spin"></i>
                                }
                            </h3>
                            <h3 className="alamat">{item.provinsi}</h3>
                            <h3 className="waktu">{item.created_at}</h3>
                        </div>
                    ))}
                    {/* <div className="kiri">
                        <h3 className="namauser">nama</h3>
                        <h3 className="jenis">judul
                            <i className="fa-solid fa-check"></i>
                            <i className="fa-solid fa-xmark"></i>
                            <i className="fa-solid fa-arrows-spin"></i>
                        </h3>
                        <h3 className="alamat">alamat</h3>
                        <h3 className="waktu">tanggal</h3>
                    </div> */}

                    {/* <div className="kanan">
                        <h3 className="namauser">nama</h3>
                        <h3 className="jenis">judul
                            <i className="fa-solid fa-check"></i>
                            <i className="fa-solid fa-xmark"></i>
                            <i className="fa-solid fa-arrows-spin"></i>
                        </h3>
                        <h3 className="alamat">alamat</h3>
                        <h3 className="waktu">tanggal</h3>
                    </div> */}
                </div >
            </div >
        </div >
    );
}

export default Forum;