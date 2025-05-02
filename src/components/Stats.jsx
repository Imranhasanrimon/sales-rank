import { FaCheck } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { MdStickyNote2 } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";

const Stats = () => {
    return (
        <div className=" w-full lg:w-[calc(50%-100px)] grid md:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="bg-[#F2F3F3] p-5 rounded-lg">
                <h3 className="text-3xl font-bold">Real-time Analysis</h3>
                <div className="relative bg-white p-4 rounded-lg mt-5 font-semibold text-lg">
                    <p><FaCheck className="inline-block bg bg-[#06B217] text-white rounded-full p-[3px] mr-2 mb-[2px] " />Confidence Level</p>

                    <div className=" w-[93%] bg-[#DFDFDF] rounded-full h-2 mt-2">
                        <div className="bg-[#44D618]  h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                    <p className="absolute right-2 bottom-3 text-xs text-[#6D6D6D]">60%</p>
                </div>
                <div className=" bg-white p-4 rounded-lg mt-5 font-semibold text-lg">
                    <p><ImStatsDots className="inline-block bg  mr-2 mb-[2px] " />Confidence Level</p>


                    <p className=" text-[#6D6D6D] font-normal text-base mt-3">85% improvement in objection handling</p>
                </div>
            </div>

            <div>
                <div className="bg-[#F2F3F3] p-5 rounded-lg">
                    <h3 className="text-3xl font-bold">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <div className="bg-white p-2 rounded-lg">
                            <MdStickyNote2 className="text-4xl text-[#002868]" />
                            <p className="sm:text-lg font-semibold mt-2">Generate Script</p>
                        </div>
                        <div className="bg-white p-2 rounded-lg">
                            <AiFillMessage className="text-4xl text-[#002868]" />
                            <p className="sm:text-lg font-semibold mt-2">Practice Pitch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;