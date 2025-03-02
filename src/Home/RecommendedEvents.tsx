import './home.css'; // Import your CSS file
import star from "../assets/starIcon.svg";
import pin_drop from "../assets/pin_drop.png";
import early_on from "../assets/early_on.svg";
import dvr from "../assets/dvr.svg";

function RecommendedEvents() {
    return (
        <div className="main-container">
            <div className="frame">
                <img src={star} alt="Logo" />
                <div className="text">Առաջարկվող Իրադարձություններ</div>
            </div>
            <div className="frame">
                <img src={early_on} alt="Logo" />
                <div className="text">Այսօրվա Իրադարձություններ</div>
            </div>
            <div className="frame">
                <img src={dvr} alt="Logo" />
                <div className="text">Իրադարձություններ ըստ բաժինների</div>
            </div>
            <div className="frame">
                <img src={pin_drop} alt="Logo" />
                <div className="text">Իրադարձություններ ըստ վայրերի</div>
            </div>
        </div>
    );
}

export default RecommendedEvents;
