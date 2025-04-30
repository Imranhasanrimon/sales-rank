const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-[30px] max-w-[1440px] mx-auto" >
            <div className="flex items-center gap-[10px]">
                <img className="w-12" src="https://img.icons8.com/?size=100&id=jZ1FLZ0WLbGW&format=png&color=000000" alt="logo" />

                <div >
                    <h2 className="text-3xl font-semibold inline">SalesRank.AI</h2>

                    <div className="flex items-center justify-between text-sm font-semibold w-52 tracking-[4px] ">
                        <small>THE</small>
                        <small>WORLD</small>
                        <small>IS</small>
                        <small>HERE</small>
                    </div>
                </div>
                <div className="ml-8 lg:ml-18 hidden md:flex items-center gap-5 lg:gap-8">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Pricing</a>
                    <a href="#">Consulting</a>
                    <a href="#">Ai Coach</a>
                </div>
            </div>

            {/* button */}
            <button className="border rounded-full px-5 py-2">Get Started </button>



        </div>
    );
};

export default Navbar;