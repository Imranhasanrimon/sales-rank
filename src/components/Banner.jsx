import image from "../assets/image.png"
import image1 from "../assets/image1.png"
import backup_table from "../assets/backup_table.png"
import atr from "../assets/atr.png"
const Banner = () => {
    return (
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between manrope mt-8 lg:mt-0 2xl:mt-16 mb-[1000px]">
            {/* text */}
            <div className="flex lg:block flex-col items-center">
                <h1 className="text-5xl lg:text-6xl 2xl:text-[80px] font-medium text-center lg:text-left mb-5 lg:mb-0 text-[#111111]">
                    Your AI-<br />Powered <br /> Sales Coach
                </h1>

                <div className=" max-w-[618px] flex flex-col-reverse lg:flex-row items-center gap-4 2xl:gap-16 ">
                    <img src={image1} alt="logo image" className="w-24 lg:w-32 2xl:w-auto" />
                    <h5 className="text-xl font-medium text-center lg:text-left text-[#05131DB2]">Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.</h5>
                </div>

                <div className="flex items-center gap-6 lg:gap-12 mt-4 lg:mt-16">

                    <div className="flex flex-col lg:flex-row text-center lg:text-left items-center gap-4 lg:gap-8 2xl:gap-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 2xl:w-22 2xl:h-22 shadow-xl rounded-2xl  p-1 lg:p-0">
                            <img src={backup_table} alt="icon" />
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl 2xl:text-[40px] font-semibold text-[#00245F]">2000+</h3>
                            <p className="text-xl font-medium text-[#05131DB2]">Your protection</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row text-center lg:text-left items-center gap-4 lg:gap-8 2xl:gap-12">
                        <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 2xl:w-22 2xl:h-22 shadow-xl rounded-2xl p-1 lg:p-0">
                            <img src={atr} alt="icon" />
                        </div>
                        <div>
                            <h3 className="text-2xl lg:text-3xl 2xl:text-[40px] font-semibold text-[#00245F]">7001+</h3>
                            <p className="text-xl font-medium text-[#05131DB2]">Provide tailored</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* image */}
            <div className="relative -z-10 md:z-30 flex lg:block flex-col md:flex-row-reverse items-center gap-6 md:gap-4 mt-6 lg:mt-0">
                <img src={image} alt="Banner Image" className="mt-4 lg:my-0 md:w-1/2 lg:w-auto md:h-80 lg:h-96 xl:h-110 2xl:h-auto" />

                <div className="md:w-1/2 lg:w-[350px] xl:w-[467px] lg:absolute lg:right-20 lg:top-60 xl:right-[282px] 2xl:top-[391px] rounded-[27px] p-6  bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center justify-between">
                        <h4 className="text-4xl 2xl:text-[50px] font-semibold text-[#00245F]">721+</h4>
                        <h4 className="text-4xl 2xl:text-[50px] font-semibold text-[#00245F]">1000+</h4>
                    </div>
                    <h5 className="text-[28px] font-semibold mb-10 mt-6 lg:my-3 2xl:mt-6 2xl:mb-10 text-[#05131D]">Growth is our priority.</h5>

                    <p className="text-lg font-medium text-[#05131DB2]">As a full-service business agency, we specialize in helping companies of all sizes optimize their operations</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;