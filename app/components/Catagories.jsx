const Catagories = () => {
    const categories = [
        { name: "Business", icon: "🏢" },
        { name: "Startup", icon: "🚀", highlight: true },
        { name: "Economy", icon: "📊" },
        { name: "Technology", icon: "🤖" },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6 text-center">
            {categories.map((category, index) => (
                <div
                    key={index}
                    className={`p-6 border border-[2px] shadow-lg transition-all cursor-pointer 
              ${category.highlight ? "bg-[#fbd353] text-gray-900 font-semibold" : "bg-white text-gray-700 hover:shadow-md"}`}
                >
                    <div className="flex-center w-12 h-12 mx-auto bg-yellow-100 rounded-lg text-2xl">
                        {category.icon}
                    </div>
                    <h3 className={`mt-4 text-lg font-bold ${category.highlight ? "text-gray-900" : "text-gray-800"}`}>
                        {category.name}
                    </h3>
                    <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            ))}
        </div>
    )
};

export default Catagories;