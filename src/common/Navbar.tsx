import './css.css';
import npua from '../assets/NPUA.png';

function NavBar() {
    return (
        <div className="navbar">
            <div className='container'>
                <img src= {npua} alt="Logo" />
            <span>ՀԱՊՀ</span>
            </div>
            <div className="nav-links">
                <a href="#">Մեր մասին</a>
                <a href="#">Մեր Հրապարակումները</a>
                <a href="#">Հայտարարություններ</a>
                <a href="#">Կապ մեզ հետ</a>
                <div className="language-selector">
                    <span>ՀԱՅ</span>
                    <div className="arrow-drop-down"></div>
                </div>
                <div className="write-now-button">
                    <span>Գրել հիմա</span>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
