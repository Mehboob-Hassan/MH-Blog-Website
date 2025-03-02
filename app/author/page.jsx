import Footer from "../components/Footer";
import Header from "../components/Header";

const Page = () => {

    const socials = ["facebook", "twitter", "instagram", "linkedin"]

    const posts = [
        {
            image: '/assets/glass-building.jpeg',
            title: 'Business',
            heading: 'Font sizes in UI design: The complete guide to follow',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        },
        {
            image: '/assets/group-discussion.webp',
            title: 'Economy',
            heading: 'How to build rapport with your web design clients',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        }
    ]



    return (
        <>
            <Header />

            <section className="h-[80vh] bg-grayAccent flex-center flex-col">
                <div className="w-[80%] h-[90%] flex items-center">
                    <div className="w-[35%] flex justify-end items-center">
                        <img
                            src="/assets/andrew-johnson2.webp"
                            alt=""
                            className="w-[18vw] h-[20vw] object-cover"
                        />

                    </div>
                    <div className="w-[80%] h-[22vw] flex justify-center items-start flex-col ml-6">
                        <h2 className="tracking-tight">Hey there, I am Andrew Johnson and welcome to my Blog</h2>
                        <p className="my-4 w-[80%] text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quae harum. Quibusdam alias blanditiis ea corrupti ullam nam praesentium at molestias quae recusandae.</p>
                        <div className="w-[20%] flex items-center justify-around ">
                            {socials.map((platform, i) => (
                                <img src={`/assets/${platform}.png`}
                                    alt={platform}
                                    className="w-5 rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="h-[5%] w-[70%] flex items-end">
                    <div className="bg-secondary h-[1.5vw] w-[70%]"></div>
                    <div className="bg-primary h-[1.5vw] w-[30%]"></div>
                </div>
            </section>

            <section className="mb-16">
                <div>
                    <div className="p-4">
                        {posts &&
                            posts.map((item, inedex) => (
                                <div className="flex justify-center my-12">
                                    <div className="w-[35%]  flex justify-end">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-[27vw] h-[48vh] object-cover"
                                        />
                                    </div>
                                    <div className="w-[50%] flex items-center justify-center mx-[2vw]">
                                        <div>
                                            <p className="tracking-wide uppercase font-bold text-[#5c2dac]">{item.title}</p>
                                            <h2 className="tracking-tight my-4">{item.heading}</h2>
                                            <p className="text-gray-500">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default Page;