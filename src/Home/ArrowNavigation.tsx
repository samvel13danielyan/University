import { useNavigate } from "react-router-dom";
import "./home.css"; 

function ArrowNavigation() {
    const navigate = useNavigate();

    const items = [
        { title: "Գրանցվեք կայքում", description: "Ստեղծեք հաշիվ՝ հոդվածի ներկայացման բաժին մուտք գործելու և դրա կարգավիճակին հետևելու համար:", path: "/signin" },
        { title: "Հետևեք կանոններին", description: "Ուսումնասիրեք հոդվածների ներկայացման պահանջները՝ համոզվելու համար, որ ձեր աշխատանքը համապատասխանում է համալսարանի չափանիշներին:", path: "/introduction" },
        { title: "Լրացրեք ձևը", description: "Մուտք գործեք հոդվածների ներկայացման բաժին և լրացրեք ձևը՝ ներառելով բոլոր անհրաժեշտ տվյալները։", path: "/title" },
        { title: "Սպասեք պատասխանին", description: "Հոդվածը ուղարկելուց հետո սպասեք խմբագրական թիմի առաջարկություններին կամ հաստատմանը:", path: "/submission" },
    ];

    return (
        <div className="arrow-navigation">
            {items.map((item, index) => (
                <div key={index} className="nav-item" onClick={() => navigate(item.path)}>
                    <div className="nav-header">
                        <span className="nav-title">{item.title}</span>
                        <div className="nav-arrow">
                            <span className="arrow-icon">→</span>
                        </div>
                    </div>
                    <p className="nav-description">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ArrowNavigation;
