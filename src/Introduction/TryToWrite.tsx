import './introduction.css';

const TryToWrite = () => {
    return (
        <div className="try-to-write-container">
            <div className="try-to-write-bg-image"></div>
            <div className="try-to-write-overlay"></div>

            <div className="try-to-write-content">
                <h2 className="try-to-write-title">
                    Նոր հնարավորություններ: Փորձեք գրել ձեր հոդվածը այսօր!
                </h2>

                <p className="try-to-write-description">
                    Եթե դուք հետաքրքրված եք գիտությամբ, արվեստով կամ կրթությամբ, դա հենց այն տեղն է,
                    որտեղ ձեր ձայնը պետք է լսվի: Վերջապես հստակեցրեք ձեր միտքը, տարածեք նորարարությունը
                    և միացեք մեր համայնքին՝ մասնակցելու հոդվածների հրապարակման համաշխարհային հնարավորություններին!
                </p>

                <button className="try-to-write-button">
                    <span className="try-to-write-button-text">Գրել հոդված</span>
                </button>
            </div>
        </div>
    );
};

export default TryToWrite;