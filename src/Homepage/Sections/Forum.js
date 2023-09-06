import { useEffect, useState } from 'react';
import '../../Style/stylef.css'
import loadingGif from '../../Images/loading.gif';
import Loading from '../../Components/Loading';
import { API_URL } from '../../strings';
import axios from 'axios';

function Forum() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL + '/api/laporan');
            const jsonData = response.data
            console.log(response.data);
            setData(jsonData);
            setSuccess(true);
            setLoading(false); // Set loading to false on error as well
        } catch (error) {
            console.error('Error fetching data: ' + error);
            setLoading(false); // Set loading to false on error as well
            // alert(error);
        }
    };

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!success) {
        return (
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                Problem occured while fetching data
            </div>
        );
    }

    return (
        <div className="row">
            <div className="container justify-content-center vh-100">
                <div className="forum">
                    {data.data.map(item => (
                        <div className="kiri p-2" key={item.id}>
                            {/* <h3 className="namauser">{item.judul}</h3> */}
                            <h3 className="jenis text-truncate">{item.judul}
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
                            <h3 className="alamat text-truncate">{item.alamat + ', ' + item.kecamatan + ', ' + item.kabkota + ', ' + item.provinsi}</h3>
                            <h3 className="waktu text-truncate">{item.created_at}</h3>
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