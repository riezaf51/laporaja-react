import { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { AppContext } from "../App";
import axios from "axios";
import { API_URL } from "../strings";
import ProfileLaporanTableRow from "./ProfileLaporanTableRow";

export default function ProfileLaporanTable({ type, forAdmin = false, search = "" }) {
    const { user } = useContext(AppContext);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setSuccess(false);
            let url = "";
            if (forAdmin) {
                url = `${API_URL}/api/laporan`;
            } else {
                url = `${API_URL}/api/user/laporan?user_id=${user.id}`;
            }

            await axios.get(url)
                .then(res => {
                    setData(res.data);
                    setSuccess(true);
                    console.log(res.data);
                })
                .catch(error => {
                    setSuccess(false);
                    console.error(error);
                });
            setLoading(false);
        }

        fetchData();
    }, [])

    if (loading) {
        return (
            <Loading />
        );
    }

    if (!success) {
        return (
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                Problem occured while fetching data
            </div>
        );
    }

    return (
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
                    {data.data
                        .filter((item => (item.status === type || !type) && (
                            item.judul.toLowerCase().includes(search) ||
                            item.deskripsi.toLowerCase().includes(search) ||
                            item.alamat.toLowerCase().includes(search) ||
                            item.provinsi.toLowerCase().includes(search) ||
                            item.kabkota.toLowerCase().includes(search) ||
                            item.kecamatan.toLowerCase().includes(search) ||
                            `${item.user.firstname} ${item.user.lastname}`.toLowerCase().includes(search)
                        )))
                        .map(
                            item => (<ProfileLaporanTableRow item={item} />)
                        )}
                </tbody>
            </table>
        </div>
    );
}