import './introduction.css';

const Guide = () => {
    return (
        <div className="guide-container">
            <div className="guide-wrapper">
                <h1 className="guide-main-title">Հոդվածների Ստեղծման Ուղեցույց</h1>

                <div className="guide-intro">
                    <p className="guide-intro-text">
                        Այս ուղեցույցը նախատեսված է Aalto University-ի պաշտոնական հոդվածների կառուցվածքի և ոճի պահպանման համար: Այն ապահովում է պարզ և հստակ հաղորդակցություն, որն համապատասխանում է բրիտանական անգլերենին և համալսարանի ներքին պահանջներին:
                    </p>
                </div>

                <div className="guide-section">
                    <h2 className="guide-section-title">Նպատակ և Լսարան</h2>
                    <p className="guide-section-text">
                        Հոդվածները ուղղված են գիտության, հետազոտության, արվեստի, կրթության, մշակույթի և հասարակության ոլորտներով հետաքրքրվող ընթերցողներին: Հիմնական լսարանը ներառում է ուսանողներին, ակադեմիական անձնակազմին, շրջանավարտներին, գործընկերներին և միջազգային լրատվամիջոցներին:
                    </p>
                </div>

                <div className="guide-section">
                    <h2 className="guide-section-title">Վերնագիր</h2>
                    <p className="guide-section-text">
                        1. Վերնագիրը պետք է լինի հակիրճ, գրավիչ և անմիջապես հասկանալի, բաղկացած 8-10 բառից:
                        <br />2. Օգտագործեք ակտիվ ձայն և ներկա ժամանակ՝ վերնագրի երկարությունը նվազեցնելու համար:
                        <br />3. Օրինակ՝ «Top international panel recognises Aalto’s fashion programme».
                        <br />4. Վերնագրերը պետք է լինեն նախադասության տառատեսակով (sentence case), այլ ոչ թե վերնագրային:
                        <br />5. Տառատեսակ՝ 12px չափսով:
                        <br />6. Տառատեսակը պետք է լինի պարզ և կարդացվող, օրինակ՝ Arial կամ Times New Roman.
                        <br />7. Մտածեք կարճ և կոնկրետ դարձնելու մասին, որպեսզի ընթերցողը անմիջապես հասկանա հոդվածի բովանդակությունը:
                    </p>
                </div>

                <div className="guide-section">
                    <h2 className="guide-section-title">Ենթավերնագիր (Lead Text)</h2>
                    <div className="guide-two-column">
                        <p className="guide-column">
                            . Ենթավերնագիրը լրացնում է հիմնական վերնագիրը՝ հավելյալ տեղեկություններով:
                            <br />. Պետք է լինի հակիրճ արտահայտություն՝ առանց վերջակետի:
                            <br/>. Խուսափեք կրկնություններից, ինչը կարող է վնասել SEO-ին:
                        </p>
                        <p className="guide-column">
                            . Տառատեսակ՝ 12px չափսով:
                            <br />. Օգտագործեք պարզ և հասկանալի բառեր, որպեսզի ընթերցողը հեշտությամբ կարողանա հասկանալ թեման:
                            <br/>. Նպատակն է ընթերցողին ուղղորդել հոդվածի խորք՝ առանց ավելորդ մանրամասների:
                        </p>
                    </div>
                </div>

                <div className="guide-section">
                    <h2 className="guide-section-title">Տեքստի Տառատեսակներ և Չափսեր</h2>
                    <p className="guide-section-text">
                        . Տեքստի հիմնական հատվածի համար օգտագործեք 12px չափսով տառատեսակ:
                        <br />. Վերնագրի համար՝ 14px չափսով տառատեսակ:
                        <br />. Ենթավերնագիր (Lead Text) պետք է լինի 12px չափսով:
                        <br />. Ուղեցույցը պահանջում է պարզ և ընթերցվող տառատեսակներ՝ նախընտրելի են Arial, Verdana, Times New Roman.
                    </p>
                </div>

                <div className="guide-section">
                    <h2 className="guide-section-title">Լուսանկարներ և Նկարագրություններ</h2>
                    <p className="guide-section-text">
                        . Յուրաքանչյուր հոդված պետք է ունենա վիզուալ տարր (լուսանկար, գրաֆիկա):
                        <br />. Նկարագրությունները պետք է վերաբերում են հոդվածի հիմնական թեմային:
                        <br />. Նկարագրությունները պետք է նշեն լուսանկարչին, օրինակ՝ Photo: Aalto University/Kaisa Kuvaaja.
                        <br />. Լուսանկարների համար օգտագործեք չափսերը՝ 200x200 px, 300x300 px, եթե դրանք չեն շեղում հիմնական թեման:
                    </p>
                </div>

                <div className="guide-section">
                    <h2 className="guide-section-title">Կապի Տվյալներ և Հեղինակային Տեղեկատվություն</h2>
                    <p className="guide-section-text">
                        Հոդվածի վերջում նշեք կոնտակտային տվյալները՝ ներառելով միջազգային հեռախոսահամարի կոդը (օրինակ՝ +374 40 123 4567).
                        <br/> Հեղինակին նշեք Drupal-ի հեղինակային դաշտում կամ հոդվածի վերջում:
                    </p>
                </div>

                <div className="guide-contact">
                    <h3 className="guide-link-title">Ավելի մանրամասն իմանալու համար</h3>
                    <p className="guide-link-text">
                        Կարդացեք մեր ամբողջական ուղեցույցը՝ հղումը հետևելով՝<br />
                        Հոդվածի գրառման մանրամասն ուղեցույց
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Guide;