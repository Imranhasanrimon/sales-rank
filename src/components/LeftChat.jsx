import { FaArrowUpLong } from "react-icons/fa6";

const LeftChat = () => {
    return (
        <div className='lg:w-1/2 bg-[#F2F3F3]  rounded-xl  overflow-hidden'>
            <div className='p-5 bg-white'>
                <h5 className='text-lg font-bold'>AI Sales Coach</h5>
            </div>

            {/* chat body */}
            <div className='min-h-80'>
                <div className='flex items-start gap-5 p-5'>
                    <img src="https://img.icons8.com/?size=100&id=eoxMN35Z6JKg&format=png&color=000000" alt="AI logo" className='w-12 rounded-full bg-[#CDCDCD] p-2' />
                    <p className='text-lg bg-white p-4 rounded-xl inline-block'>Hello! I'm your AI sales coach. How can I help you improve your sales performance today?</p>
                </div>
            </div>

            {/* keyboard press */}
            <div className='bg-white p-2'>
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 2xl:grid-cols-4 gap-2  '>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer '>How do I handle ?</p>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer '>How do I objections?</p>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer '>Negotiation tips</p>
                    <p className='text-sm text-[#002868] bg-[#F2F3F3] px-4 py-2 rounded-full w-full cursor-pointer '>How do I handle ?</p>
                </div>

                <div className='mt-4 flex gap-4'>
                    <input type="text" placeholder='Ask anything you need'
                        className='border border-[#F2F3F3] rounded-lg p-4 grow' />

                    <button className='bg-[#002868] text-white px-4 md:px-6 rounded-lg text-xl font-medium cursor-pointer'>Send <FaArrowUpLong className="inline" /></button>
                </div>

            </div>

        </div>
    );
};

export default LeftChat;