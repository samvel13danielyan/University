import './home.css';
import globus from "../assets/globus.png";
import lamp from "../assets/lamp.png";
import hand from "../assets/hand.png";
import person from "../assets/person.png";

function ResearchByNumbers() {
    return (
        <div className="research-numbers">
            <h2>Հետազոտություն թվերով</h2>
            <div className="numbers-grid">
                <img src={globus} className='researchImage'></img>
                <img src={lamp} className='researchImage'></img>
                <img src={hand} className='researchImage'></img>
                <img src={person} className='researchImage'></img>
                <div className="number-item">
                    <h3>53 000</h3>
                    <p>Ուսանողներ</p>
                </div>
                <div className="number-item">
                    <h3>3 900</h3>
                    <p>դոկտորական թեկնածուներ</p>
                </div>
                <div className="number-item">
                    <h3>3 300</h3>
                    <p>Ուսումնական և գիտահետազոտական անձնակազմ</p>
                </div>
                <div className="number-item">
                    <h3>3 100</h3>
                    <p>Վարչական և տեխնիկական անձնակազմ</p>
                </div>
                <div className="number-item">
                    <h3>135</h3>
                    <p>Հետազոտական միավորներ</p>
                </div>
                <div className="number-item">
                    <h3>23</h3>
                    <p>Դոկտորական դպրոցներ</p>
                </div>
                <div className="number-item">
                    <h3>20</h3>
                    <p>Բազմամասնագիտական թեմատիկ ինստիտուտներ</p>
                </div>
                <div className="number-item">
                    <h3>12 500</h3>
                    <p>Շրջանավարտներն ակտիվորեն ներգրավված են մեր ցանցում</p>
                </div>
            </div>
        </div>
    );
}

export default ResearchByNumbers;
