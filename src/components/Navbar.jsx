import { useRef } from "react";
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {

    const drawerCheckboxRef = useRef(null);

    const toggleDrawer = () => {
        if (drawerCheckboxRef.current) {
            drawerCheckboxRef.current.checked = !drawerCheckboxRef.current.checked;
        }
    };
    return (
        <div className="flex items-center justify-between py-4 md:py-5 lg:py-6 2xl:py-[30px] px-2 md:px-4 max-w-[1442px] mx-auto bg-white sticky top-0 z-50" >
            <div className="flex items-center gap-[10px]">
                <img className="w-8 md:w-12" src="https://img.icons8.com/?size=100&id=jZ1FLZ0WLbGW&format=png&color=000000" alt="logo" />

                <div >
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold inline">SalesRank.AI</h2>

                    <div className="flex items-center justify-between text-[8px] md:text-sm font-semibold md:w-40 lg:w-52 tracking-[2px] lg:tracking-[4px] ">
                        <small>THE</small>
                        <small>WORLD</small>
                        <small>IS</small>
                        <small>HERE</small>
                    </div>
                </div>
                <div className="ml-6 lg:ml-18 hidden md:flex items-center gap-5 lg:gap-8">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Pricing</a>
                    <a href="#">Consulting</a>
                    <a href="#">Ai Coach</a>
                </div>
            </div>

            {/* button */}
            <div className=" flex items-center justify-end gap-2">
                <button className="border rounded-full px-3 md:px-5 py-1 md:py-2 text-sm font-semibold md:font-bold min-w-28 md:min-w-30 cursor-pointer">Get Started </button>

                <div className="drawer ">
                    <input
                        id="my-drawer-4"
                        type="checkbox"
                        className="drawer-toggle"
                        ref={drawerCheckboxRef}
                    />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <IoMenuSharp onClick={toggleDrawer} className=" md:hidden text-[40px] cursor-pointer" />
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="my-drawer-4"
                            aria-label="close sidebar"
                            className="drawer-overlay"
                        ></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Consulting</a></li>
                            <li><a href="#">Ai Coach</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;