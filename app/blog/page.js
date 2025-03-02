"use client"
import { useRouter } from "next/navigation";
import ActionButton from "../components/ActionButton";
import Catagories from "../components/Catagories";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Page = () => {
    const router = useRouter();
    const posts = [
        {
            image: '/assets/girl-on-board.webp',
            title: 'Startup',
            heading: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
        {
            image: '/assets/handshake.jpeg',
            title: 'Business',
            heading: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
        {
            image: '/assets/woman-looking-man.webp',
            title: 'Startup',
            heading: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
        {
            image: '/assets/walking-person.jpeg',
            title: 'Technlogy',
            heading: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
        {
            image: '/assets/girl-on-board.webp',
            title: 'Economy',
            heading: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
    ]


    return (
        <>
            <Header />
            <section className="bg-gray-100 flex-center h-[80vh]">
                <div className="px-6 py-12 h-[100%] flex justify-between items-center">
                    <div className="w-[50%] h-[50vh] ml-12 flex justify-center items-center">
                        <div className="">
                            <p className="uppercase font-semibold tracking-widest">Featured Post </p>
                            <h2 className="my-4" >Step-by-Step guide to choosing great font pairs</h2>
                            <p>
                                By <span className="text-primary">Johm Doe</span> | May 23, 2022
                            </p>
                            <p className="my-4 text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas fermentum. Nullam nec nisl nec nisl ultricies ultricies.
                            </p>
                            <a
                                href="/blog-post"
                            >
                                <button className="generalButton font-semibold bg-yellow-500 text-white px-4 py-2 mt-4">Read More &gt;</button>
                            </a>
                        </div>
                    </div>
                    <div className="w-[45%] h-[100%] flex-center">
                        <img
                            src="/assets/person-smiling.webp"
                            alt="Person with laptop"
                            className="w-full h-full"
                            style={{ width: "90%", height: "90%" }}
                        />
                    </div>
                </div>
            </section>

            {/* =========ALL POST======== */}
            <section>
                <div className="container px-16 pt-16 mh-[100vh]">
                    <h1 className="">All posts</h1>
                    <div className="h-[1px] bg-gray-300 my-5"></div>
                    {
                        posts.map((post, index) => (
                            <div className="bg-white cursor-pointer py-8 flex flex-wrap justify-center" key={index}>
                                <div className="w-[40%] h-[300px]">
                                    <img

                                        src={post.image}
                                        alt="Person with laptop"
                                        className="w-[490px] h-[318px]"
                                    />
                                </div>
                                <div className="w-[60%] px-8 flex items-center">
                                    <div className="w-[90%]">
                                        <p className="text-[#683cb1] uppercase font-semibold tracking-widest">{post.title}</p>
                                        <h2 className="font-bold py-5">{post.heading}</h2>
                                        <p className="text-gray-400">{post.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className=" flex justify-center my-10 h-[5vw] flex items-center justify-around w-[20%] mx-auto">
                        <a>
                            <h3 onClick={() => router.push('/')} className="text-gray-400 cursor-pointer">&lt; Prev</h3>
                        </a>
                        <a>
                            <h3 onClick={() => router.push('/')} className="cursor-pointer"> Next &gt;</h3>
                        </a>
                    </div>
                </div>
            </section>

            <section className="px-16 py-16 bg-white">
                <h2 className="text-3xl font-bold px-16 py-10">All Catagories</h2>

                <Catagories />
            </section>

            <div className="h-[65vh]">
                <ActionButton />
            </div>
            <Footer />

        </>
    );
}

export default Page;