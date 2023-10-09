import { useEffect, useState } from 'react';
import '../../Style/stylef.css'
import Loading from '../../Components/Loading';
import { API_URL } from '../../strings';
import axios from 'axios';
import ForumCard from '../../Components/ForumCard';

export default function Forum() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/laporan`);
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
            <div className="container d-flex justify-content-center align-items-center vh-100">
                Problem occured while fetching data
            </div>
        );
    }

    return (
        <div className="container d-flex justify-content-center min-vh-100">
            <div className="forum">
                {data.data.map(item => (
                    <ForumCard item={item} />
                ))}
            </div >
        </div >
    );
}
