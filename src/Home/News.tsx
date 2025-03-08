import './home.css';
import news1 from "../assets/womanAndChildrens.png";
import news2 from "../assets/person2.png";
import news3 from "../assets/cameraMan.png";
import news4 from "../assets/person3.png";
import news5 from "../assets/woman.png";
import news6 from "../assets/person4.png";

const News = () => {

    return (
        <div className="news-container">
            <div className='news-titleContainer'>
                <h1 className="news-title">Նորություններ</h1>
                <h2 className="news-subtitle">Պատմություններ համալսարանում մարդկանց, հետազոտությունների և նորարարությունների մասին</h2>
            </div>

            {/* News Images Section */}
            <div className="news-images">
                {/* Top Row */}
                <div className="news-images-top">
                    <div className="news-large-imageContainer">
                        <img src={news1} alt="News 1" className="news-large-image" />
                        <div className="news-large-content">
                            <p className="news-large-title">Առողջություն և բժշկություն</p>
                            <p className="news-large-description">
                                Գործարկում է կենտրոն, որը կենտրոնացած է մարդկանց և մոլորակների առողջության վրա
                            </p>
                        </div>
                    </div>
                    <div className="news-small-imageContainer">
                        <img src={news2} alt="News 2" className="news-image small" />
                        <div className="news-small-content">
                            <p className="news-small-title">Օրենք</p>
                            <p className="news-small-description">
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                    <div className="news-small-imageContainer">
                        <img src={news3} alt="News 3" className="news-image small" />
                        <div className="news-small-content">
                            <p className="news-small-title">Օրենք</p>
                            <p className="news-small-description">
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="news-images-bottom">
                    <div className="news-small-imageContainer">
                        <img src={news4} alt="News 4" className="news-image small" />
                        <div className="news-small-content">
                            <p className="news-small-title">Օրենք</p>
                            <p className="news-small-description">
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                    <div className="news-small-imageContainer">
                        <img src={news5} alt="News 5" className="news-image small" />
                        <div className="news-small-content">
                            <p className="news-small-title">Օրենք</p>
                            <p className="news-small-description">
                                Նեյթ Պերսիլիի ընտրական պատմության մինի
                            </p>
                        </div>
                    </div>
                    <div className="news-large-imageContainer">
                        <img src={news6} alt="News 6" className="news-image large" />
                        <div className="news-large-content">
                            <p className="news-large-title">Առողջություն և բժշկություն</p>
                            <p className="news-large-description">
                                Գործարկում է կենտրոն, որը կենտրոնացած է մարդկանց և մոլորակների առողջության վրա
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <button className="news-button">Լրացուցիչ նորություններ</button>
        </div>
    );
};

export default News;
