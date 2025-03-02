import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogs = [
    {
      image: "/assets/old-woman.png", // Replace with actual image URL
      title: "The Healing Power of Travel: Finding Myself Again",
      date: "30 April 2024",
      description:
        "Heartbroken, I traveled to Bhutan seeking healing. Amid ancient Buddhist traditions, majestic peaks, and remote villages, I shed layers of pain...",
      tags: ["travel", "bhutan"],
      link: "/blog/the-healing-power-of-travel",
    },
    {
      image: "/assets/locals.png", // Corrected image URL
      title: "Connecting with Locals: The True Essence of Travel",
      date: "30 April 2024",
      description:
        "At a night market in Kuala Lumpur, I was invited behind a satay stall to learn a vendor's generations-old family recipes...",
      tags: ["travel", "stories", "malaysia"],
      link: "/blog/connecting-with-locals",
    },
    {
      image: "/assets/locals.png", // Corrected image URL
      title: "Connecting with Locals: The True Essence of Travel",
      date: "30 April 2024",
      description:
        "At a night market in Kuala Lumpur, I was invited behind a satay stall to learn a vendor's generations-old family recipes...",
      tags: ["travel", "stories", "malaysia"],
      link: "/blog/connecting-with-locals",
    },
    {
      image: "/assets/locals.png", // Corrected image URL
      title: "Connecting with Locals: The True Essence of Travel",
      date: "30 April 2024",
      description:
        "At a night market in Kuala Lumpur, I was invited behind a satay stall to learn a vendor's generations-old family recipes...",
      tags: ["travel", "stories", "malaysia"],
      link: "/blog/connecting-with-locals",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
