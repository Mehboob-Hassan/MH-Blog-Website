const ActionButton = () => {
  return (
    <section className="bg-white text-center h-screen flex-center">
      <div className="max-w-[35vw] mx-auto  w-[60%]">
        <h2>
          Join our team to be a part of our story
        </h2>
        <p className="mt-4 text-[#6d6e76]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <div className="mt-6">
          <a
            href="/contact-us"
          >
            <button className="generalButton">
              Join Now
            </button>
          </a>
        </div>
      </div>
    </section>

  );
}

export default ActionButton;