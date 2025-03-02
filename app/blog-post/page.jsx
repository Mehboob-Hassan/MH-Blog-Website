import ActionButton from "../components/ActionButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Page = () => {
    return (
        <>
            <Header />

            <section className="mx-auto px-6 py-12 h-[80vh] flex items-center justify-center">
                <div className=" h-[60vh] w-[65vw]">
                    <div className="w-[23vw] mx-[5vw] mt-[5vw] flex justify-around items-center ">
                        <img
                            src="/assets/andrew-johnson.png"
                            alt="author"
                            className="rounded-full h-[4vw] w-[4vw]"
                        />
                        <div className="">
                            <h3 className="text-[#683cb1]  font-semibold">Andrew Johnson</h3>
                            <p className="text-gray-400">Posted on 27th January 2022</p>
                        </div>
                    </div>
                    <div className="mx-[6vw] mt-[2.5vw] w-[90%]">
                        <h1 className="font-bold ">Step-by-Step guide to choosing great font pairs</h1>
                    </div>
                    <div className="pg-yellow-200 mx-[6vw] mt-[2.5vw] w-[70%]">
                        <img
                            src="/assets/startup.png"
                            className="h-[32px] w-[120px]"
                        />
                    </div>
                </div>
            </section>

            <section className="flex-center mt-3">
                <img
                    src="/assets/blog-post-main.webp"
                    alt=""
                    className="w-[1200px] h-[582px]"
                />
            </section>

            <section className="flex-center">
                <div className=" w-[60%] mt-[4vw]">
                    <h2 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem.</h2>
                    <p className="my-2 desc2 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi.</p>
                    <h2 className="mt-8">Lorem Ipsum adipisicing elit. Exercitationem, accusantium veniam.</h2>
                    <p className="my-4 desc2 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. ipsa perspiciatis, error odio voluptatum ducimus quia animi.</p>
                    <p className="my-4   desc2 text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. </p>
                    <ul className="list-disc font-bold text-2xl mx-[1.5vw]">
                        <li className="mt-[5px]">Lorem ipsum dolor sit amet, </li>
                        <li className="mt-[5px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                        <li className="mt-[5px]">Lorem  consectetur adipisicing elit</li>
                    </ul>
                    <p className="my-2 desc2 text-gray-500 my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. </p>
                    <h2>Lorem ipsum adipisicing elit. Exercitationem, accusantium veniam.</h2>
                    <p className="my-2 desc2 text-gray-500 my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae iusto odio esse dolores ipsa a blanditiis. Ipsa culpa debitis iste. Assumenda repellendus ipsa perspiciatis, error odio voluptatum ducimus quia animi. ipsa perspiciatis, error odio voluptatum ducimus quia animi.</p>
                </div>
            </section>

            <section className="flex justify-center flex-col items-center mt-[2vw]">
                <div className="container h-auto w-[85%]">
                    <h2 className="my-8">What to read next</h2>
                    <div className="flex justify-around item-center">
                        <div className="w-[32%]">
                            <img src="/assets/girl-on-board.webp" alt="" />
                            <p className="m-2">
                                By <span className="text-primary">Johm Doe</span> | May 23, 2022
                            </p>
                            <h4 className=" my-2">A UX Case Study Creating a Studios Environment for Students:</h4>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, praesentium minima, ad ipsa non debitis culpa nihil mollitia iste tempora aperiam, quod distinctio veniam placeat. Porro quia nesciunt perspiciatis voluptatum.</p>
                        </div>
                        <div className="w-[32%]">
                            <img src="/assets/team.jpg" alt="" />
                            <p className="m-2">
                                By <span className="text-primary">Johm Doe</span> | May 23, 2022
                            </p>
                            <h4 className=" my-2">A UX Case Study Creating a Studios Environment for Students:</h4>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, praesentium minima, ad ipsa non debitis culpa nihil mollitia iste tempora aperiam, quod distinctio veniam placeat. Porro quia nesciunt perspiciatis voluptatum.</p>
                        </div>
                        <div className="w-[32%]">
                            <img src="/assets/woman-looking-man.webp" alt="" />
                            <p className="m-2">
                                By <span className="text-primary">Johm Doe</span> | May 23, 2022
                            </p>
                            <h4 className=" my-2">A UX Case Study Creating a Studios Environment for Students:</h4>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, praesentium minima, ad ipsa non debitis culpa nihil mollitia iste tempora aperiam, quod distinctio veniam placeat. Porro quia nesciunt perspiciatis voluptatum.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-[1px] bg-gray-300  mt-16 mx-16"></div>

            <ActionButton />
            <Footer />
        </>
    )
};

export default Page;