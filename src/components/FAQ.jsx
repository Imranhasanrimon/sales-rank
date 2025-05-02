import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const FAQ = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 mt-32 lg:mt-20 manrope relative mb-[1000px]">
            <span className="absolute -top-12 lg:top-0">Frequently asked <br /> questions</span>

            <h2 className="text-3xl xl:text-6xl md:w-[620px] xl:w-[920px] text-center xl:text-left mx-auto">Constant collaboration is how we roll. Let's see if we are a good fit.</h2>


            <div className="collapse collapse-plus bg-base-100 border-b border-base-300  pl-12 relative mt-20">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl md:text-3xl lg:text-4xl font-normal">Why should I choose Humestic?</div>
                <div className="collapse-content text-sm text-[#636363] font-light">Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back</div>
                <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#636363] text-2xl md:text-3xl">01</span>
            </div>
            <div className="collapse collapse-plus bg-base-100 border-b border-base-300  pl-12 relative">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl md:text-3xl lg:text-4xl font-normal">I like your works, how do we start a project?</div>
                <div className="collapse-content text-sm text-[#636363] font-light">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#636363] text-2xl md:text-3xl">02</span>
            </div>
            <div className="collapse collapse-plus bg-base-100 border-b border-base-300  pl-12 relative">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl md:text-3xl lg:text-4xl font-normal">What info is required to get a quotation?</div>
                <div className="collapse-content text-sm text-[#636363] font-light">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                <span className="absolute top-1/2 -translate-y-1/2 left-4 text-[#636363] text-2xl md:text-3xl">03</span>
            </div>


            <div className="max-w-[1280px] mx-auto mt-16 md:mt-[105px]">
                <h5 className="text-xl lg:text-4xl font-semibold text-center md:text-left">“ They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</h5>

                <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-18 gap-6">
                    <div className="flex items-center gap-5">
                        <img src="https://i.ibb.co.com/7xWb2yN0/Hasanath-Ali.jpg" alt="customer photo" className="h-13 w-13 rounded-full" />
                        <div>
                            <h6 className="text-xl font-bold">Michael Kaizer</h6>
                            <p className="text-[#878C91]">CEO of Basecamp Corp</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 text-xl font-semibold">
                        <span className="text-[#00245F] border border-[#00245F] inline-flex items-center justify-center h-14 w-20 rounded-full"><FaArrowLeft /></span>
                        <p>
                            <span className="text-[#00245F] underline">01</span> <span className="text-[#878C91]">/05</span>
                        </p>

                        <span className="bg-[#00245F] text-white border border-[#00245F] inline-flex items-center justify-center h-14 w-20 rounded-full"><FaArrowRight /></span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;