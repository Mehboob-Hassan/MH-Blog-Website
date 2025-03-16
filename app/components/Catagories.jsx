const Catagories = () => {
    const categories = [
        { name: "Business", image: "/assets/cat-icon1.png" },
        { name: "Startup", image: "/assets/cat-icon2.png", highlight: true },
        { name: "Economy", image: "/assets/cat-icon3.png" },
        { name: "Technology", image: "/assets/cat-icon4.png" },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 ">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className={`px-8 py-10 border border-[2px] shadow-lg cursor-pointer text-start
              ${category.highlight ? "bg-[#fbd353] text-gray-900 font-semibold" : "bg-white text-gray-700 hover:shadow-lg"}`}
                >
                    <div className="flex-center w-12 h-12 bg-yellow-100 rounded-lg text-2xl">
                        <img src={category.image} alt="" 
                            style={{ borderRadius: "50px"}}
                        />
                    </div>
                    <h3 className={`mt-4  font-bold ${category.highlight ? "text-gray-900" : "text-gray-800"}`}>
                        {category.name}
                    </h3>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            ))}
        </div>
    )
};

export default Catagories;