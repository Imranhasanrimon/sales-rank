import LeftChat from "./LeftChat";
import { LuRefreshCcw } from "react-icons/lu";
import { LuThumbsUp } from "react-icons/lu";
import { LuThumbsDown } from "react-icons/lu";
import { RxSpeakerLoud } from "react-icons/rx";
import { IoCalendarClearOutline } from "react-icons/io5";
import Stats from "./Stats";

const Chat = () => {
    return (
        <div className="bg-linear-to-r from-[#103570] to-[#004FCE] pt-6 pb-10 manrope">
            <div className="max-w-[1440px] mx-auto px-4">
                <p className="text-[#FCE38A] text-2xl questrial">Live Ai Coach</p>
                <h3 className="text-white text-3xl md:text-5xl lg:text-6xl  questrial mt-5 mb-15">Take a Suggestion Coaching</h3>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">

                    <LeftChat />

                    <div className="bg-[#F2F3F3] p-5 rounded-full flex lg:flex-col items-center gap-8">
                        <LuRefreshCcw className="cursor-pointer" />
                        <LuThumbsUp className="cursor-pointer" />
                        <LuThumbsDown className="cursor-pointer" />
                        <RxSpeakerLoud className="cursor-pointer" />
                        <IoCalendarClearOutline className="cursor-pointer" />
                    </div>

                    <Stats />

                </div>
            </div>
        </div>
    );
};

export default Chat;