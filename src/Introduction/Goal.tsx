import './introduction.css';
import library from "../assets/library.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";
import people4 from "../assets/people4.png";


const Goal = () => {
    return (
        <div className="goal-container">
            <div className="goal-wrapper">
                <h2 className="goal-title">Հոդված գրելու նպատակը</h2>

                <div className="goal-content">
                    {/* Row 1 */}
                    <div className="goal-row">
                        <div className="goal-card">
                            <div className="goal-card-content">
                                <h3 className="goal-card-title">Հետաքրքրության թեմաների ընդգծում</h3>
                                <p className="goal-card-description">
                                    Հոդվածները նպատակ ունեն կարևոր կամ համապատասխան թեմաները հանրությանը ներկայացնելու, դրանց ավելի տեսանելի դարձնելու։
                                </p>
                            </div>
                            <div className="goal-card-image">
                                <img src= {library} alt="illustration" />
                            </div>
                        </div>

                        <div className="goal-card">
                            <div className="goal-card-content">
                                <h3 className="goal-card-title">Տեղեկատվություն տրամադրում</h3>
                                <p className="goal-card-description">
                                    Հոդվածը ուսումնասիրում է առանձին հարցեր ու խնդիրներ, մասնագիտական և օգտակար տեղեկություններ տրամադրելով ընթերցողին:
                                </p>
                            </div>
                            <div className="goal-card-image">
                                <img src= {people2} alt="illustration" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="goal-row">
                        <div className="goal-card">
                            <div className="goal-card-content">
                                <h3 className="goal-card-title">Ընտրություն ներկայացնում</h3>
                                <p className="goal-card-description">
                                    Հոդվածները հաճախ տալիս են տարբեր տեսակետներ, առաջարկներ կամ լուծումներ այն խնդիրներին, որոնց նրանք անդրադառնում են:
                                </p>
                            </div>
                            <div className="goal-card-image">
                                <img src= {people3} alt="illustration" />
                            </div>
                        </div>

                        <div className="goal-card">
                            <div className="goal-card-content">
                                <h3 className="goal-card-title">Մտորումներ առաջացնում</h3>
                                <p className="goal-card-description">
                                    Հոդվածը կարող է նպաստել ընթերցողի մտածողությանը և հակասական հարցերի շուրջ կարծիք կազմելու:
                                </p>
                            </div>
                            <div className="goal-card-image">
                                <img src= {people4} alt="illustration" />
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="goal-row">
                        <div className="goal-card">
                            <div className="goal-card-content">
                                <h3 className="goal-card-title">Պատմություններ ու դեպքերի քննարկում</h3>
                                <p className="goal-card-description">
                                    Շատ հոդվածներ տարածում են պատմություններ, իրադարձություններ կամ կարևոր մարդանց մասին՝ ազդելով ընթերցողի տեսանկյունին:
                                </p>
                            </div>
                            <div className="goal-card-image">
                                <img src={library} alt="illustration" />
                            </div>
                        </div>

                        <div className="goal-card">
                            <div className="goal-card-content">
                                <h3 className="goal-card-title">Լեզվաբառարանական հստակություն</h3>
                                <p className="goal-card-description">
                                    Հոդվածը պետք է լինեն հստակ, և տրամաբանական կառուցվածքով, որպեսզի ընթերցողը հեշտությամբ ընկալի մտքերն ու գաղափարները:
                                </p>
                            </div>
                            <div className="goal-card-image">
                                <img src={people2} alt="illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;