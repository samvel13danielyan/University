import './css.css'; 
import npua from "../assets/NPUA2.png";
import contacts from "../assets/contacts.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <div className="footer-logo">
                        <img src= {npua} alt="Polytechnic Logo" />
                    </div>
                    <div className="footer-university-name">
                        <span>ՀԱՊՀ</span>
                    </div>
                </div>

                <div className="footer-links-section">
                    <div className="footer-links">
                        <span>Գաղտնիություն</span>
                        <span>Կայքի քարտեզ</span>
                    </div>
                    <div className="footer-copyright">
                        <span>
                            Հեղինակային իրավունք © Գիտության և տեխնոլոգիայի համալսարան: Բոլոր իրավունքները պաշտպանված են: Նախագծված է MTPC-ի կողմից:
                        </span>
                    </div>
                </div>

                <div className="footer-follow-us">
                    <span>Հետևեք մեզ</span>
                    <img
                        src= {contacts}
                        alt="Follow Us"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;