const Header = () => {
    return (
      <header className="bg-[#1A1D29] text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <h1 className="text-xl font-bold">{'{Finsweet}'}</h1>
  
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition">Home</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-gray-300 transition">Blog</a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-gray-300 transition">About Us</a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-gray-300 transition">Contact us</a>
              </li>
            </ul>
          </nav>
  
          {/* Subscribe Button */}
          <a 
            href="#" 
            className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Subscribe
          </a>
        </div>
      </header>
    );
  };
  
  export default Header;
  