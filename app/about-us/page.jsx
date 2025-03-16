'use client'
import ActionButton from "../components/ActionButton";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/navigation";

const authors = [
    { name: "Floyd Miles", role: "Content Writer @Company", img: "/assets/floyd-miles.webp", social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Dianne Russell", role: "Content Writer @Company", img: "/assets/dianne-russel.png", highlight: true, social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Jenny Wilson", role: "Content Writer @Company", img: "/assets/jenny-wilson.webp", social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Leslie Alexander", role: "Content Writer @Company", img: "/assets/leslie-alexander.webp", social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Guy Hawkins", role: "Content Writer @Company", img: "/assets/guy-hawkins.png", social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Eleanor Pena", role: "Content Writer @Company", img: "/assets/eleanor-pena.png", social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Robert Fox", role: "Content Writer @Company", img: "/assets/robert-fox.webp", social: ["facebook", "twitter", "instagram", "linkedin"], },
    { name: "Jacob Jones", role: "Content Writer @Company", img: "/assets/jacob-jones.webp", social: ["facebook", "twitter", "instagram", "linkedin"], },
];

const Page = () => {
    const router = useRouter();
    return (
        <>
            <Header />
            <section className="h-[70vh] flex justify-center items-end z-100">
                <div className=" h-[60vh] w-[80%] flex mb-[-10vh]">
                    <div className="bg-white h-[356px] w-[624px] p-8  z-50">
                        <p className="uppercase text-1xl font-bold tracking-wide">
                            ABOUT US
                        </p>
                        <h1 className=" mt-10 leading-snug">We are a team of content writers who share their learnings</h1>
                    </div>
                    <div className="h-[60vh] w-[50%] flex justify-start items-center" >
                        <p className="w-[100%] ml-6 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nostrum impedit eligendi enim cupiditate nam ratione soluta cumque ea, pariatur temporibus blanditiis voluptatum corrupti numquam. Ratione, deleniti. Doloremque, fugiat nemo!
                        </p>
                    </div>
                </div>
            </section>


            <section className="flex-center relative">
                <img
                    src="/assets/friends-on-wall.png"
                    alt="Group of Friends"
                    className="w-[90%] h-full"
                />

                {/* <div className="absolute bg-black inset-0 bg-opacity-50"></div> */}

                <div className="absolute bottom-0 left-[13%]">
                    <div className="flex items-end">
                        <div className="bg-secondary text-[#232536] flex-center flex-col h-[156px] w-[210px]">
                            <h1>12+</h1>
                            <p className="text-[#232536]">Blogs Published</p>
                        </div>
                        <div className="bg-secondary text-[#232536] flex-center flex-col h-[156px] w-[210px]">
                            <h1>18k+</h1>
                            <p className="text-[#232536]">Blogs Published</p>
                        </div>
                        <div className="bg-secondary text-[#232536] flex-center flex-col h-[156px] w-[210px]">
                            <h1>30K+</h1>
                            <p className="text-[#232536]">Blogs Published</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-[#5c2dac] w-[21vw] h-[3vh]"></div>
                        <div className="bg-secondary w-[35vw] h-[3vh]"></div>
                    </div>
                </div>



            </section>

            <section className="flex-center">
                <div className="bg-[#f4f0f8] w-[90%] h-[60vh] flex-center">
                    <div className="w-[50%] h-[60vh] flex-center text-start">
                        <div className="w-[80%]">
                            <p className="uppercase tracking-wide">Our Mission</p>
                            <h3 className="my-3">Creating valuable content for creatives all around the world</h3>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia atque labore, assumenda beatae alias accusamus omnis magnam vitae nulla, et voluptas quos quaerat dolorum adipisci animi placeat vero, deserunt cum.</p>
                        </div>
                    </div>
                    <div className="w-[50%] h-[60vh] flex-center text-start">
                        <div className="w-[80%]">
                            <p className="uppercase tracking-wide">Our Vision</p>
                            <h3 className="my-3">A platform that empowers individuals to improve</h3>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia atque labore, assumenda beatae alias accusamus omnis magnam vitae nulla, et voluptas quos quaerat dolorum adipisci animi placeat vero, deserunt cum.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center justify-center h-100 ">
                <div className="w-[90%] h-[100vh] flex">
                    <div className="flex flex-col justify-center items-start w-[50%] ">
                        <div className="w-[80%]">
                            <h2>Our team of creatives</h2>
                            <h3 className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</h3>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos tempora maxime, magnam laborum nam soluta voluptatum reiciendis autem? Repellendus quae excepturi molestias adipisci voluptatem qui quos harum earum asperiores.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-[50%] ">
                        <img src="/assets/holding-arms.jpeg" alt=""
                            className="w-[624px] h-[480px]"
                        />
                    </div>
                </div>
                <div className="w-[7vw] h-[16vh] bg-secondary absolute mt-[-10vw] rounded-tl-3xl"></div>
            </section>

            <section className="flex items-center justify-around relative h-100">
                <div className="flex justify-end items-center w-[50%] ">
                    <img src="/assets/three-person-sitting-on-stairs.jpeg" alt=""
                        className="w-[624px] h-[480px] relative object-cover"
                    />
                </div>
                <div className="w-[50%] h-[100vh] flex">
                    <div className="flex flex-col justify-center items-start w-[95%] ml-[4vw]">
                        <div className="w-[75%] ">
                            <h2>Why we started this Blog</h2>
                            <h3 className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam.</h3>
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos tempora maxime, magnam laborum nam soluta voluptatum reiciendis autem? Repellendus quae excepturi molestias adipisci voluptatem qui quos harum earum asperiores.</p>
                        </div>
                    </div>
                </div>

                <div className="w-[5vw] h-[5vw] bg-primary absolute bottom-[7%] left-[15%] transform translate-x-[-50%] rounded-full"></div>

            </section>



            <section className="py-12 flex-center">
                <div className="w-[90%]">
                    <h2 className="text-center mb-8">List of Authors</h2>
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {authors.map((author, index) => (
                            <div
                                key={index}
                                onClick={() => router.push('/author')}
                                className={`p-6 cursor-pointer  w-[286px] h-[280px] shadow-md flex flex-col items-center ${author.highlight ? "bg-gray-200" : "bg-gray-100"
                                    }`}
                            >
                                <img
                                    src={author.img}
                                    alt={author.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <h3>{author.name}</h3>
                                <p className="text-gray-500 text-sm my-2">{author.role}</p>
                                <div className="mt-4  space-x-4 flex justify-around items-center aspect-[112/16]">
                                    <div className="w-[100%] flex justify-around ">
                                        {author.social.map((platform, i) => (
                                            <img src={`/assets/${platform}.png`}
                                                alt={author.name}
                                                className="w-4  rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ActionButton />

            <Footer />

        </>
    )
}

export default Page;