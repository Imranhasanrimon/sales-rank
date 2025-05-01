import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="px-4">
                <Banner />
            </div>
        </>
    );
};

export default LandingPage;