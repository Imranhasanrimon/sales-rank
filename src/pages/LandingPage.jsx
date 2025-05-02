import Banner from "../components/Banner";
import Chat from "../components/Chat";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Chat />
            <Courses />
            <FAQ />
        </div>
    );
};

export default LandingPage;