const { default: Footer } = require("../components/Footer");
const { default: Header } = require("../components/Header");

const Page = () => {
    return (
        <>
            <Header />

            <section className="flex justify-center mb-16">
                <div className="w-[50%]">
                    <div className="flex flex-col text-center items-center justify-center mt-[5vw]">
                        <p className="uppercase text-[1.3vw] font-bold tracking-wide">Contact Us</p>
                        <h1 className="my-6">Let's Start a Conversation</h1>
                        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem accusantium dolor fuga deleniti laudantium ipsa pariatur corrupti distinctio.</p>
                    </div>
                    <div className="bg-[#592ea9] w-100 h-[15vw] mt-16 flex text-white">
                        <div className="w-[50%] h-[100%] flex-center">
                            <div className="w-[80%] h-[70%]">
                                <p className="text-gray-400">Working Hours</p>
                                <div className="bg-grayAccent w[80%] h-[1px] my-4"></div>
                                <h6 className="font-bold tracking-wide">Monday To Friday</h6>
                                <h6 className="font-bold tracking-wide">9:00 AM To 8:00 AM</h6>
                                <p className="text-gray-400 my-2">Our Support Team is available 24/7</p>
                            </div>
                        </div>
                        <div className="w-[50%] h-[100%] flex-center">
                            <div className="w-[80%] h-[70%]">
                                <p className="text-gray-400">Contact Us</p>
                                <div className="bg-grayAccent w[80%] h-[1px] my-2"></div>
                                <h5 className="font-bold tracking-wide">020 7993 2905</h5>
                                <p className="text-gray-400 my-1">hello@finsweet.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[100%] mt-7 mb-16">
                        <form className="space-y-4 [w-100%]">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-[100%] border border-gray-300 p-5 placeholder-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="w-[100%] border border-gray-300 p-5 placeholder-gray-500"
                            />
                            <select className="w-full p-3 border border-gray-300 p-5 px-3">
                                <option className="text-gray-500">Query Related</option>
                                <option>General Inquiry</option>
                                <option>Technical Support</option>
                                <option>Billing</option>
                            </select>


                            <textarea
                                rows="4"
                                placeholder="Message"
                                className="w-full p-3 border border-gray-300 placeholder-gray-500"
                            ></textarea>

                            <button className="generalButton bg-secondary w-full py-8 font-semibold text-[3.5vh] transition">
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Page;