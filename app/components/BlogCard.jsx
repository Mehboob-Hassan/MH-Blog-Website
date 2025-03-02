const BlogCard = ({ image, title, date, description, tags, link }) => {
    return (
        <div className="w-full md:w-1/2 px-2 mx-auto">
            <div className="w-95">
                <a href={link} className="block">
                    <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg" />
                </a>
                <h2 className="text-2xl font-bold mt-4">
                    <a href={link} className="hover:underline">{title}</a>
                </h2>
                <p className="text-gray-500 italic text-sm mt-2">{date}</p>
                <p className="text-gray-700 mt-3">{description}</p>
                <div className="mt-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-sm text-gray-500 mr-2">#{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
