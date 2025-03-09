import './introduction.css';

const HowToWriteArticle = () => {
    return (
        <div className="how-to-container">
            <div className="howToWriteContent">
                <div className="howTo-text-content ">
                    <h2 className="howToTitle">Ինչ է հոդվածը Ովքեր կարող են գրել!</h2>
                    <p className="howToDescription">
                        Հոդվածը գրավոր ստեղծագործություն է, որը ուղղված է լայն լսարանի, և հաճախ հրապարակվում է թերթերում, ամսագրերում կամ հանդեսներում: Հոդված գրելու հիմնական նպատակն է ուշադրություն հրավիրել հատուկ թեմաների վրա և ազդել ընթերցողների վրա։
                    </p>
                </div>
                <div className="howToimage-container">
                    <div className="howToImage"></div>
                </div>
            </div>
        </div>
    );
};

export default HowToWriteArticle;