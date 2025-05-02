import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
    return (
        <div className="bg-[#FAFAFA] backdrop-blur-3xl mt-20 manrope">
            <div className="bg-linear-to-r from-[#6c9eee28] to-[#d9e7ff4b]">


                <div className="max-w-[1440px] mx-auto px-4 py-8">

                    <div className="bg-linear-to-r from-[#103570] to-[#004FCE] py-12 md:py-16 lg:py-20 rounded-3xl ">
                        <h3 className="text-white text-center text-2xl md:text-4xl font-semibold">Ready to Hire Smarter?</h3>
                        <p className="text-[#B9BDC7] text-center mt-3">Unlock Exclusive Insights Subscribe to Our Newsletter</p>
                        <button className="text-[#00245F] bg-[#FCE38A] mx-auto block px-6 py-4 rounded-full font-medium mt-6 md:mt-12 cursor-pointer">Join Now</button>
                    </div>

                    {/* footer text */}
                    <div className="mt-12 md:mt-20 lg:mt-[144px] grid lg:grid-cols-2 gap-6">
                        <div>
                            {/* logo */}
                            <div className="flex items-center gap-4">
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
                            </div>
                            <p className="text-[#335386] lg:max-w-[534px] my-7">SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.</p>

                            <div className="w-[172px]  flex items-center justify-between">
                                <span className="inline-flex items-center justify-center rounded-full cursor-pointer bg-white w-8 h-8  "><RiFacebookFill className="text-[#00245F]" /></span>
                                <span className="inline-flex items-center justify-center rounded-full cursor-pointer bg-white w-8 h-8  "><FaTwitter className="text-[#00245F]" /></span>
                                <span className="inline-flex items-center justify-center rounded-full cursor-pointer bg-white w-8 h-8  "><FaLinkedinIn className="text-[#00245F]" /></span>
                                <span className="inline-flex items-center justify-center rounded-full cursor-pointer bg-white w-8 h-8  "><LuInstagram className="text-[#00245F]" /></span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-0">
                            <div>
                                <p className="text-[#001C4A] text-lg font-semibold">Navigation</p>
                                <ul className="space-y-2 md:space-y-3 lg:space-y-5 mt-3 md:mt-4 lg:mt-6">
                                    <li className="text-[#335386]"><a href="#"></a>Service</li>
                                    <li className="text-[#335386]"><a href="#"></a>Agency</li>
                                    <li className="text-[#335386]"><a href="#"></a>Case Study</li>
                                    <li className="text-[#335386]"><a href="#"></a>Resource</li>
                                    <li className="text-[#335386]"><a href="#"></a>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[#001C4A] text-lg font-semibold">Licence</p>
                                <ul className="space-y-2 md:space-y-3 lg:space-y-5 mt-3 md:mt-4 lg:mt-6">
                                    <li className="text-[#335386]"><a href="#"></a>Privacy Policy</li>
                                    <li className="text-[#335386]"><a href="#"></a>Copyright</li>
                                    <li className="text-[#335386]"><a href="#"></a>Email Adress</li>
                                </ul>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <p className="text-[#001C4A] text-lg font-semibold">Licence</p>
                                <ul className="space-y-2 md:space-y-3 lg:space-y-5 mt-3 md:mt-4 lg:mt-6">
                                    <li className="text-[#335386]"><a href="#"></a><FaPhone className="inline-block mr-2 text-[#00245F]" />(406) 555-0120</li>
                                    <li className="text-[#335386]"><a href="#"></a><IoMail className="inline-block mr-2 text-[#00245F]" />Hey@boostim.com</li>
                                    <li className="text-[#335386]"><a href="#"></a><IoLocationSharp className="inline-block mr-2 text-[#00245F]" />2972 Westheimer Rd. Santa Ana, llinois 85452</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <hr className="pb-12 md:pb-16 lg:pb-23 text-[#B4B4B4]" />
            </div>
        </div>
    );
};

export default Footer;