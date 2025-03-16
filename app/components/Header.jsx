const Header = () => {
  return (
    <header className="bg-[#232536] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">{'{ Finsweet'}</h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm">
            <li>
              <a href="/" className="hover:text-gray-300 transition">Home</a>
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
          <a
            href="#"
            className="bg-white text-black font-semibold px-10 py-4 hover:bg-gray-200 transition"
          >
            Subscribe
          </a>
        </nav>

        {/* Subscribe Button */}
      </div>
    </header>
  );
};

export default Header;
