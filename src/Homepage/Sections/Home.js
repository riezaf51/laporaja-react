import write2 from "../../Images/write2.png"
import form from "../../Images/form.png"
import phone from "../../Images/phone.png"
import '../../Style/stylelanding.css';
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../strings";
import { useContext, useState } from "react";
import { AppContext } from "../../App";

export default function Home() {
    const location = useLocation();
    const { user } = useContext(AppContext);
    const [success] = useState((location.state) ? location.state.message : "");
    const [error] = useState((location.state) ? location.state.error : "");
    return (
        <div>
            {error &&
                <div className="alert alert-danger">
                    {error}
                </div>
            }
            {success &&
                <div className="alert alert-success">
                    {success}
                </div>
            }
            <section id="hero">
                <h2>Pengaduan Online Masyarakat</h2>
                <p>Sampaikan laporan anda langsung mengenai keresahan anda</p>
            </section>

            <section id="product1" className="section-p1">
                {/* <h2>Halo {{ Auth::user()->lastname }}, Silahkan Pilih Opsi Menu</h2>
                @else */}
                {user
                    ? <h2>Halo {user.lastname}, Silahkan Pilih Opsi Menu</h2>
                    : <h2>Halo Guest, Silahkan Pilih Opsi Menu</h2>
                }
                <p>Pilih sesuai dengan kebutuhan anda</p>
            </section>

            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <NavLink to={'/' + routes.dashboard + '/' + routes.laporan}><img src={write2} alt="" /></NavLink>
                    <h2>Lapor</h2>
                </div>

                <div className="fe-box">
                    <NavLink to={'/' + routes.dashboard + '/' + routes.forum}><img src={form} alt="" /></NavLink>
                    <h2>Forum</h2>
                </div>

                <div className="fe-box">
                    <NavLink to={'/' + routes.dashboard + '/' + routes.contact}><img src={phone} alt="" /></NavLink>
                    <h2>Telepon</h2>
                </div>
            </section>
        </div>
    );
}
