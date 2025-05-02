import { useRef, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { TbReload } from "react-icons/tb";

const LeftChat = () => {
    const [chats, setChats] = useState([]);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMessage = inputRef.current.value.trim();
        if (newMessage) {
            setChats(prevChats => [...prevChats, newMessage]);
            inputRef.current.value = "";
        }
    };

    const handleButton = (msg) => {
        setChats(prevChats => [...prevChats, msg]);
        inputRef.current.value = "";
    }

    const handleResetChat = () => {
        setChats([])
    }
    return (
        <div className='lg:w-1/2 bg-[#F2F3F3]  rounded-xl  overflow-hidden'>
            <div className='relative p-5 bg-white'>
                <h5 className='text-lg font-bold'>AI Sales Coach</h5>
                <TbReload className="absolute right-5 bottom-1/2 translate-y-1/2 text-xl md:text-3xl cursor-pointer"
                    onClick={handleResetChat} />
            </div>

            {/* chat body */}
            <div className='h-80 overflow-auto'>
                <div className='grid grid-cols-12 gap-5 p-5'>
                    <span className='w-12 h-12 rounded-full bg-[#CDCDCD] p-2 col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1'></span>
                    <p className='md:text-lg bg-white p-4 rounded-xl inline-block col-span-10 md:col-span-11 lg:col-span-10 xl:col-span-11'>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                </div>

                {
                    chats.map((chat, i) => <div key={i} className='grid grid-cols-12 gap-5 p-5 items-end justify-end'>
                        <p className='md:text-lg bg-[#3174e0] text-white p-4 rounded-xl inline-block  col-span-10 md:col-span-11 lg:col-span-10 xl:col-span-11'>{chat}</p>
                        <span className='w-12 h-12 rounded-full bg-[#CDCDCD] p-2 col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1'></span>
                    </div>)
                }

            </div>

            {/* keyboard press */}
            <div className='bg-white p-2'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-2  '>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer ' onClick={() => handleButton("How do I handle ?")}>How do I handle ?</p>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer ' onClick={() => handleButton("How do I objections?")}>How do I objections?</p>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer ' onClick={() => handleButton("Negotiation tips ?")}>Negotiation tips?</p>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer ' onClick={() => handleButton("Gimme steps ?")}>Gimme steps ?</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='mt-4 flex gap-4'>
                        <input type="text" placeholder='Ask anything you need'
                            className='border border-[#F2F3F3] rounded-lg p-4 grow' ref={inputRef} />

                        <button className='bg-[#002868] text-white px-4 md:px-6 rounded-lg text-xl font-medium cursor-pointer' >Send <FaArrowUpLong className="inline" /></button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LeftChat;