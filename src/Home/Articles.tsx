import "./home.css";
import clima from "../assets/clima.png";

function Articles () {
    return (
        <div className="articles">
            <div className="articles-left">
                <h2 className="articles-title">Հետազոտական հոդվածներ</h2>
                <p className="articles-description">
                    UvA-ն Եվրոպայի առաջատար հետազոտական համալսարաններից մեկն է: Մենք
                    կատարում ենք կարևոր հետազոտություններ՝ կապելով գիտական
                    հետազոտությունները
                    հասարակության մարտահրավերներին:
                </p>
            </div>
            
            <div className="article-image">
                <img src={clima} alt="Research" className="research-image" />
                <div className="image-title">Կլիմայի ինստիտուտ</div>
            </div>

            <div className="articles-right">
                <div className="article-button red">
                    <span>Հետազոտություն</span>
                    <span className="arrow">➔</span>
                </div>
                <div className="article-button red">
                    <span>Հետազոտություն</span>
                    <span className="arrow">➔</span>
                </div>
                <div className="article-button dark">
                    <span>Հետազոտություն</span>
                    <span className="arrow">➔</span>
                </div>
            </div>
        </div>
    );
};

export default Articles;
