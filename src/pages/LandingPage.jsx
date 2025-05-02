import Banner from "../components/Banner";
import Chat from "../components/Chat";
import Courses from "../components/Courses";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Chat />
            <Courses />
            <FAQ />
            <Footer />
        </div>
    );
};

export default LandingPage;