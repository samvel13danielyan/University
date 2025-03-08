import './css.css'; 

const Resource = () => {
    return (
        <div className="resource-container">
            <div className="resource-links">
                <div className="resource-link">
                    <span>Գլխավոր</span>
                </div>
                <div className="resource-link">
                    <span>Հեղինակային ռեսուրսներ</span>
                    <div className="arrow-drop-down"></div>
                </div>
                <div className="resource-link">
                    <span>Հրապարակման աջակցության ծառայություններ</span>
                    <div className="arrow-drop-down"></div>
                </div>
            </div>
        </div>
    );
};

export default Resource;