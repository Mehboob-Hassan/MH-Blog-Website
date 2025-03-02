export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-[90%] h-[70vh] mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">{'{Finsweet}'}</h2>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-gray-400">Home</a>
            <a href="/blog" className="hover:text-gray-400">Blog</a>
            <a href="/about-us" className="hover:text-gray-400">About us</a>
            <a href="/contact-us" className="hover:text-gray-400">Contact us</a>
            <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a>
          </nav>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800 p-16  h-[40vh] mt-[8%] flex justify-between items-center">
          <h2 className="text-2xl font-semibold w-[50%]">
            Subscribe to our newsletter to get latest updates and news
          </h2>
          <div className="mt-4 flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full md:w-2/3 px-4 py-3 bg-gray-800 border border-[1px]  text-gray-900 focus:outline-none"
            />
            <button className="generalButton mt-4 md:mt-0 md:ml-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 shadow-md transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com | 020 7993 2905</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img
              alt=""
              src="/assets/facebook.png"
              className="w-5 h-5"
            />
            <img
              alt=""
              src="/assets/twitter.png"
              className="w-5 h-5"
            />
            <img
              alt=""
              src="/assets/instagram.png"
              className="w-5 h-5"
            />
            <img
              alt=""
              src="/assets/linkedin.png"
              className="w-5 h-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
