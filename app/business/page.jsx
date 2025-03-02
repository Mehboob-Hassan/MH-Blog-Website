import Footer from "../components/Footer";
import Header from "../components/Header";

const posts = [
    {
        image: '/assets/girl-on-board.webp',
        title: 'Business',
        heading: 'Top 6 free website mockup tools 2024',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
        image: '/assets/girl-on-board.webp',
        title: 'Startup',
        heading: 'Step-by-step guide to chooing great font pairs',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
        image: '/assets/girl-on-board.webp',
        title: 'Startup',
        heading: 'Ten free google fonts that you should use',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
        image: '/assets/girl-on-board.webp',
        title: 'Startup',
        heading: 'What did I learn from doing 50+ design sprits?',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    }
]

const Page = () => {
    return (
        <>
            <Header />
            <section className="bg-[#f4f0f8] h-[50vh] flex-center">
                <div className="h-[70%] w-[50%] flex justify-center flex-col items-center text-center">
                    <h1>Business</h1>
                    <p className="my-4 w-[75%] text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, corrupti. Quibusdam id illum, necessitatibus maxime numquam nemo.</p>
                    <p className="uppercase text-[2.8vh] tracking-wide my-3">blog &gt; Business</p>
                </div>
            </section>


            <section className="flex-center py-16">
                <div className="container flex justify-between">
                    <div className="w-[65%] ">
                        {posts &&
                            posts.map((item, inedex) => (
                                <div className="flex justify-center my-6">
                                    <div className="w-[50%]  flex justify-end">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-[294px] h-[300px] object-cover"
                                        />
                                    </div>
                                    <div className="w-[80%] flex items-center justify-center mx-[2vw]">
                                        <div>
                                            <p className="tracking-wide uppercase font-bold text-primary">{item.title}</p>
                                            <h2 className="my-4">{item.heading}</h2>
                                            <p className="text-gray-500">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                    <div className="w-[30%] ">
                        <div className="m-auto p-4">
                            <h1 className="text-3xl font-bold ">Categories</h1>
                            <div>
                                <div className="w-[22vw] h-[15vh] bg-secondary my-5">
                                    <div className="w-[100%] flex  h-[100%] items-center justify-center">
                                        <div className="w-[35%] h-[100%] flex-center">
                                            <i className="text-3xl p-3 bg-white rounded">🚀</i>
                                        </div>
                                        <div className="w-[65%] h-[100%] flex items-center justify-start">
                                            <h3 className="w-[3vw]">Startup</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[22vw] h-[15vh] border-2 border-gray-300 flex items-center justify-start my-5">
                                    <div className="w-[35%] h-[100%] flex-center">
                                        <i className="text-3xl p-3  bg-white rounded">🚀</i>
                                    </div>
                                    <div className="w-[65%] h-[100%] flex items-center justify-start">
                                        <h3 className="w-[3vw]">Business</h3>
                                    </div>
                                </div>
                                <div className="w-[22vw] h-[15vh] border-2 border-gray-300 flex items-center justify-start my-5">
                                    <div className="w-[35%] h-[100%] flex-center">
                                        <i className="text-3xl p-3  bg-white rounded">🚀</i>
                                    </div>
                                    <div className="w-[65%] h-[100%] flex items-center justify-start">
                                        <h3 className="w-[3vw]">Economy</h3>
                                    </div>
                                </div>
                                <div className="w-[22vw] h-[15vh] border-2 border-gray-300 flex items-center justify-start my-5">
                                    <div className="w-[35%] h-[100%] flex-center">
                                        <i className="text-3xl p-3  bg-white rounded">🚀</i>
                                    </div>
                                    <div className="w-[65%] h-[100%] flex items-center justify-start">
                                        <h3 className="w-[3vw]">Technology</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 col-span-4">
                            <div>
                                <h1 className="text-3xl font-bold">All Tags</h1>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    {["Business", "Experience", "Screen", "Technology", "Marketing", "Life"].map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-6 py-2 border-2 border-gray-400 rounded-full text-gray-700 text-lg font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Page;