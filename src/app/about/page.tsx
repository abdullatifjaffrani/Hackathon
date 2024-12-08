import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                About Us - Comforty
              </h1>
              <p className="text-gray-600 text-lg md:text-base leading-6 mb-6">
                We’re passionate about creating comfortable, innovative furniture that transforms spaces into unique living experiences. Our designs combine style, utility, and affordability with sustainability in mind.
              </p>
              <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition duration-200">
                Learn More
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 w-full flex justify-center">
              <Image
                src="/assets/about/Image.png"
                alt="About Us"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        <h1 className="text-gray-800 text-4xl md:text-5xl font-bold mb-6 text-center md:text-left leading-tight">
          What Makes Our Brand Different
        </h1>
        <p className="text-gray-600 text-lg md:text-base mb-8 text-center md:text-left leading-6">
          Our brand stands out by focusing on comfort, innovation, and design versatility.
          Every design reflects creativity, simplicity, and care for customer satisfaction.
        </p>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Feature 1 */}
          <div className="flex items-start bg-white p-4 md:p-6 shadow-md rounded-lg hover:shadow-xl transition duration-200">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <Image
                src="/assets/about/Delivery.png"
                alt="Quality Icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-2 leading-tight">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-5">
                Every product is designed to last, focusing on durability and elegance.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start bg-white p-4 md:p-6 shadow-md rounded-lg hover:shadow-xl transition duration-200">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <Image
                src="/assets/about/Checkmark.png"
                alt="Eco-Friendly Icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-2 leading-tight">
                Eco-Friendly Materials
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-5">
                We prioritize sustainability by using materials that are gentle on the planet.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start bg-white p-4 md:p-6 shadow-md rounded-lg hover:shadow-xl transition duration-200">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <Image
                src="/assets/about/Purchase.png"
                alt="Innovation Icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-2 leading-tight">
                Innovative Design
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-5">
                Our designs are innovative, combining style, functionality, and elegance.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start bg-white p-4 md:p-6 shadow-md rounded-lg hover:shadow-xl transition duration-200">
            <div className="w-10 h-10 md:w-12 md:h-12 mr-4">
              <Image
                src="/assets/about/Sprout.png"
                alt="Affordable Icon"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold text-lg md:text-xl mb-2 leading-tight">
                Affordable Prices
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-5">
                We offer affordable prices without compromising on design or quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
