import '../style/stylef.css';
import imgrs from '../assets/imgrs.png';
import imgfire from '../assets/imgfire.png';
import { API_URL, routes } from '../strings';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../common/Loading';
import ContactCard from './ContactCard';
import { AppContext } from '../App';
import NoData from '../common/NoData';

export default function Contact() {
    const { user } = useContext(AppContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [refresh, setRefresh] = useState(true);

    const handleRefresh = (bool) => {
        setRefresh(bool);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(API_URL + '/api/kontakpenting');
                const jsonData = response.data
                console.log(response.data);
                setData(jsonData);
                setSuccess(true);
            } catch (error) {
                console.error('Error fetching data: ' + error);
                // alert(error);
            }
            setLoading(false);
            setRefresh(false);
        };
        if (refresh) {
            fetchData();
        }
    }, [refresh]);

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
                            {data.data
                                .filter(item => (item.jenisinstansi === "Rumah Sakit"))
                                .map(item => (<ContactCard item={item} refreshHandler={handleRefresh} />))
                            }
                            {/* <!-- <h4><strong>{{$data->namainstansi}}</strong></h4>
                        <h6>{{$data->alamat}}</h6>
                        <h6>{{$data->nomortelepon}}</h6> --> */}
                        </div>
                        <div className="col">
                            {data.data
                                .filter(item => (item.jenisinstansi === "Kantor Polisi"))
                                .map(item => (<ContactCard item={item} refreshHandler={handleRefresh} />))
                            }
                            {/* <!-- <h4><strong>{{$data->namainstansi}}</strong></h4>
                        <h6>{{$data->alamat}}</h6>
                        <h6>{{$data->nomortelepon}}</h6> --> */}
                        </div>
                        <div className="col">
                            {data.data
                                .filter(item => (item.jenisinstansi === "Kantor Pemadam"))
                                .map(item => (<ContactCard item={item} refreshHandler={handleRefresh} />))
                            }
                            {/* <!-- <h4><strong>{{$data->namainstansi}}</strong></h4>
                        <h6>{{$data->alamat}}</h6>
                        <h6>{{$data->nomortelepon}}</h6> --> */}
                        </div>
                    </div>
                </div>
                {data.data.length === 0 &&
                    <NoData padded={false} />
                }
                {user && user.role === 'admin' &&
                    <div className="plus col">
                        <li><Link to={routes.add}><i className="fa-solid fa-plus"></i>Tambah Nomer Penting</Link></li>
                    </div>
                }
            </section>
        </div>
    );
}
