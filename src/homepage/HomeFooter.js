import '../style/stylelanding.css';
import logo_header from '../assets/logo header.png';

export default function HomeFooter() {
    return (
        <footer className="mt-5 section-p1" style={{ backgroundColor: "#A12520" }}>
            <div className="plus col text-white">
                <img className="logo" src={logo_header} alt="" />
                <h4>Kontak</h4>
                <p><strong>Alamat</strong> Gg. Desa Lengkong, Bojongsoang, Kabupaten Bandung</p>
                <p><strong>Telepon</strong> +62 212 8987 099</p>
                <p><strong>Jam kerja</strong> 09.00 - 17.00, Senin - Jumat</p>

                <div className="follow">
                    <h4>Ikuti kami</h4>
                    <div className="icon">
                        <i className="fab fa-facebook text-white"></i>
                        <i className="fab fa-twitter text-white"></i>
                        <i className="fab fa-instagram text-white"></i>
                        <i className="fab fa-youtube text-white"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}
