import '../Style/stylelanding.css';
import logo_header from '../Images/logo header.png';

function HomeFooter() {
    return (
        <footer className="section-p1">
            <div className="plus col">
                <img className="logo" src={logo_header} alt="" />
                <h4>Kontak</h4>
                <p><strong>Alamat</strong> Gg. Desa Lengkong, Bojongsoang, Kabupaten Bandung</p>
                <p><strong>Telepon</strong> +62 212 8987 099</p>
                <p><strong>Jam kerja</strong> 09.00 - 17.00, Senin - Jumat</p>

                <div className="follow">
                    <h4>Ikuti kami</h4>
                    <div className="icon">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default HomeFooter;