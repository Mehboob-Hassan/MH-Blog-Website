'use client'
import ActionButton from "../components/ActionButton";
import Catagories from "../components/Catagories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const authors = [
    {
      name: "Floyd Miles",
      role: "Content Writer @Company",
      image: "/assets/floyd-miles.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Dianne Russell",
      role: "Content Writer @Company",
      image: "/assets/dianne-russel.png",
      social: ["facebook", "twitter", "instagram", "linkedin"],
      highlighted: true,
    },
    {
      name: "Jenny Wilson",
      role: "Content Writer @Company",
      image: "/assets/jenny-wilson.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
    {
      name: "Leslie Alexander",
      role: "Content Writer @Company",
      image: "/assets/leslie.webp",
      social: ["facebook", "twitter", "instagram", "linkedin"],
    },
  ];

  return (
    <div className="flex flex-col align-center justify-center">
      <Header />
      <section className="relative w-full h-[90vh]  bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style={{
            backgroundImage: "url('/assets/hero-image.webp')",
            filter: "brightness(50%)"
          }}
        ></div>

        <div className="relative z-10 max-w-3xl mx-[6vw] mt-[9.052vw] text-white text-center md:text-left">
          <span className="uppercase tracking-[5px] mb-10 text-white-500">
            Posted on <span className="text-lg">Startup</span>
          </span>
          <h1 className="font-[sen] font-thin leading-tight w-[100%]">
            Step-by-step guide to choosing great font pairs
          </h1>

          <p className="text-gray-300 mt-2">
            By <span className="text-[#dfb94b]">James West</span> | May 23, 2024
          </p>

          <p className="mt-4 w-[70%] gray-p1">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <a
            href="/blog-post"
          >
            <button className="generalButton mt-6">
              Read More &gt;
            </button>
          </a>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="featuredPost flex justify-center items-start space-x-12">
          {/* Featured Post */}
          <div className="w-[55%]">
            <h2 className="heading2 mb-4">Featured Post</h2>
            <div className="bg-white shadow-lg p-6  overflow-hidden">
              <img
                src="/assets/building.jpeg"
                alt="Featured Post"
                className="w-[100%] h-[25vw] object-cover"
              />
              <div className="py-6 text-start">
                <p className="text-sm text-gray-500">
                  By <span className="text-primary font-thin">John Doe</span> | May 23, 2022
                </p>
                <h3 className="font-thin mt-2 tracking-tight">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h3>
                <p className="mt-2 font-thin w-[82%]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a
                  href="/blog-post"
                >
                  <button className="generalButton mt-4">
                    Read More &gt;
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* All Posts */}
          <div className="w-[40%]" >
            <div className="flex justify-between items-center mb-4">
              <h2 className="heading2">All Posts</h2>
              <a href="#" className="text-primary text-sm hover:underline">
                View All
              </a>
            </div>
            <div className="space-y-4 w-[65%]">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg transition hover:bg-yellow-100 cursor-pointer`}
                >
                  <p className="text-sm text-gray-500">
                    By <span className="text-primary font-thin">John Doe</span> | Aug 23, 2021
                  </p>
                  <h4 className="mt-1 text-blackAccent">
                    8 Figma design systems that you can download for free today.
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Mission */}
      <section className="flex-center">
        <div className="MissionVision bg-gray-100 py-16 relative">
          {/* Top Color Strip */}
          <div className="absolute top-0 left-0 w-full h-6 flex">
            <div className="bg-white w-2/6 h-full"></div>
            <div className="bg-[#fbd353] w-2/3 h-full"></div>
            <div className="bg-purple-700 w-1/3 h-full"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* About Us Section */}
              <div>
                <h3 className="text-sm font-thin text-gray-600 tracking-widest">ABOUT US</h3>
                <h2 className="mt-2">
                  We are a community of content writers who share their learnings
                </h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="text-primary font-bold mt-4 inline-block hover:underline">
                  Read More &gt;
                </a>
              </div>

              {/* Our Mission Section */}
              <div>
                <h3 className="text-sm font-thin text-gray-600 tracking-widest">OUR MISSION</h3>
                <h2 className="mt-2">
                  Creating valuable content for creatives all around the world
                </h2>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="mb-8">Choose A Category</h2>
        <Catagories />
      </section>


      {/* ======== Why We Started ========= */}
      <section className="relative bg-white py-16 px-6">
        <div className="w-100 flex flex-col md:flex-row items-center relative">
          {/* Left Side - Image */}
          <div className="w-[70%] relative bg-yellow-300 ml-[4vw]">
            <img
              // style={{ height: '40vw', width: '100vw' }}
              src="/assets/friends.avif"
              alt="Group of friends"
              className="shadow-lg  aspect-[949/705] object-cover"

            />
          </div>

          {/* Right Side - Text Content */}
          <div className="whyWeStartedRight bg-white h-[87vh] w-[50%] relative z-10">
            <h4 className="text-sm font-thin text-gray-600 uppercase tracking-wider">Why We Started</h4>
            <h1 className="mt-2">
              It started out as a simple idea and evolved into our passion
            </h1>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>

            {/* Button */}
            <div className="mt-6">
              <a
                href="/about-us"
                className="generalButton bg-yellow-400 text-gray-900 font-thin px-6 py-3 shadow-md hover:bg-yellow-500 transition"
              >
                Discover our story &gt;
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* ======== Our Authors ========= */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-center text-3xl font-thin text-gray-900">List of Authors</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {authors.map((author, index) => (
            <div
              onClick={() => router.push('/author')}
              key={index}
              className={`py-12 cursor-pointer shadow-md text-center ${author.highlighted ? "bg-gray-200" : "bg-gray-100"
                }`}
            >
              <img
                src={author.image}
                alt={author.name}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-200"
              />
              <h3 className="mt-4 font-thin text-gray-900">{author.name}</h3>
              <p className="text-gray-600 text-[12px] mt-1">{author.role}</p>
              <div className="mt-4  space-x-4 flex justify-around items-center aspect-[112/16]">
                <div className="w-[50%] flex justify-around ">
                  {author.social.map((platform, i) => (
                    <img src={`/assets/${platform}.png`}
                      alt={author.name}
                      className="w-5  rounded-full"
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="h-[5vw] my-16">
        <div className="flex justify-around items-center">
          <div><span className="text-gray-400 text-[12px]">We are </span><h5 className="text-gray-400 mt-[-1vw]">Feature in</h5></div>
          <div className="w-[70%]">
            <img src={`/assets/logIpsum-row.png`}
              alt="Ipsum Logos"
              className="ounded-full"
            />
          </div>
        </div>
      </section>



      {/* ==============Testimonals============ */}
      <section className="px-6">
        <div className="bg-grayAccent pt-16 px-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 pr-10">
            <div className="w-[80%]">
              <h5 className="uppercase text-sm font-semibold tracking-wider text-gray-600">
                Testimonials
              </h5>
              <h2 className="mt-2">
                What people say about our blog
              </h2>
              <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="md:block w-[1px] bg-gray-300 h-24 mx-8"></div>

          {/* Right Section */}
          <div className="md:w-1/2 flex flex-col">
            <h4 className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </h4>

            {/* Author Details */}
            <div className="mt-16 flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/assets/andrew-johnson.png"
                  alt="Jonathan Vallem"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h4 className="text-md font-semibold text-gray-900">Jonathan Vallem</h4>
                  <p className="text-sm text-gray-600">New York, USA</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 flex space-x-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border shadow-md hover:bg-gray-200">
                  ←
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white shadow-md hover:bg-gray-700">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==============Action Button============ */}
      <ActionButton />
      <Footer />

      {/* <BlogList /> */}
    </div>
  )
};

export default Page;
