import Header from "../common/Header";
import NavBar from "../common/Navbar";
import SearchEvents from "../common/SearchEvents";
import FullWidthImage from "./FullWidthImage";
import RecommendedEvents from "./RecommendedEvents";
import ArrowNavigation from "./ArrowNavigation";
import Articles from "./Articles";
import ResearchByNumbers from "./ResearchByNumbers";

function Home() {
    return (
        <>
            <Header />
            <NavBar />
            <SearchEvents />
            <RecommendedEvents />
            <FullWidthImage />
            <ArrowNavigation />
            <Articles />
            <ResearchByNumbers />
        </>
    );
}

export default Home;
