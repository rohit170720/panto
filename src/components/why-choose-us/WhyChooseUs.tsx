const WhyChooseUs = () => {
  const features = [
    {
      title: "Luxury facilities",
      description:
        "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
      link: "#",
    },
    {
      title: "Affordable Price",
      description:
        "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
      link: "#",
    },
    {
      title: "Many Choices",
      description:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
      link: "#",
    },
  ];

  return (
    <section className='bg-white py-10 md:py-25 px-4 sm:px-6 lg:px-8'>
      {" "}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start'>
        <div className='col-span-1 md:col-span-1 lg:col-span-1 flex  items-center h-full'>
          <h2 className='text-2xl md:text-4xl sm:text-[2.6rem] font-bold text-(--custom-black) leading-tight'>
            Why
            <br /> Choosing Us
          </h2>
        </div>

        <div className='col-span-1 md:col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='md:p-6 rounded-lg'>
              {" "}
              <h3 className='text-lg md:text-2xl font-semibold text-(--custom-black) mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-600 mb-4 leading-7'>
                {feature.description}
              </p>
              <button className='inline-flex items-center text-sm text-(--custom-orange) hover:text-orange-600 font-light group cursor-pointer '>
                More Info
                <img
                  src='./src/assets/right-arrow.svg'
                  alt='Arrow Right'
                  className='ml-2  transition-transform duration-200 group-hover:translate-x-1'
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
