import Moment from "react-moment";

function ForumCard({ item }) {
    return (
        <div className="card kiri p-3 m-2 shadow-hover" key={item.id}>
            {/* <h3 className="namauser">{item.judul}</h3> */}
            <h3 className="jenis text-truncate">{item.judul}
                {item.status === 'selesai' &&
                    <i className="fa-solid fa-check"></i>
                }
                {item.status === 'ditolak' &&
                    <i className="fa-solid fa-xmark"></i>
                }
                {item.status === 'diproses' &&
                    <i className="fa-solid fa-arrows-spin"></i>
                }
            </h3>
            <h5 className="alamat text-truncate">{item.alamat + ', ' + item.kecamatan + ', ' + item.kabkota + ', ' + item.provinsi}</h5>
            <h5 className="waktu text-truncate">
                <Moment format="HH:mm D MMM YYYY">{item.created_at}</Moment> (<Moment fromNow>{item.created_at}</Moment>)
            </h5>
        </div>
    );
}

export default ForumCard;