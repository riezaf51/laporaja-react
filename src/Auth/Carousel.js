import '../Style/style.css'
import login1 from '../Images/loginimg.png'
import login2 from '../Images/login2.jpg'
import login3 from '../Images/login3.jpg'

function Carousel() {
    return (
        <div className="login-right w-50 h-100">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={login1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={login2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={login3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;