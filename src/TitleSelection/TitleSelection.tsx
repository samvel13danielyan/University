import Footer from "../common/Footer";
import Header from "../common/Header";
import NavBar from "../common/Navbar";
import Resource from "../common/Resource";
import ImageTitle from "./ImageTitle";
import PresentationProgress from "./PresentationProgress";

function TitleSelection() {
    return (
        <>
            <>
                <Header />
                <NavBar />
                <Resource />
                <ImageTitle />
                <PresentationProgress />
                <Footer />
            </>
        </>
    );
}

export default  TitleSelection;
