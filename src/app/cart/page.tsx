import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Page Title */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
        <h1 className="text-gray-800 text-4xl md:text-5xl font-bold text-center">Your Cart</h1>
      </div>

      {/* Cart Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Cart Item 1 */}
          <div className="bg-white shadow-md rounded-lg flex items-center p-4 md:p-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mr-4">
              <Image
                src="/assets/ourproducts/Image1.png"
                alt="Cart Item 1"
                width={96}
                height={96}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Luxury Wooden Chair</h2>
              <p className="text-gray-600 text-sm md:text-base mt-1 leading-tight">$150.00</p>
            </div>
            <div className="ml-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base transition duration-200">
                Remove
              </button>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="bg-white shadow-md rounded-lg flex items-center p-4 md:p-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mr-4">
              <Image
                src="/assets/ourproducts/Image2.png"
                alt="Cart Item 2"
                width={96}
                height={96}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Modern Office Desk</h2>
              <p className="text-gray-600 text-sm md:text-base mt-1 leading-tight">$250.00</p>
            </div>
            <div className="ml-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base transition duration-200">
                Remove
              </button>
            </div>
          </div>

          {/* Cart Item 3 */}
          <div className="bg-white shadow-md rounded-lg flex items-center p-4 md:p-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mr-4">
              <Image
                src="/assets/ourproducts/Image3.png"
                alt="Cart Item 3"
                width={96}
                height={96}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg md:text-xl font-semibold text-gray-800">Comfortable Sofa</h2>
              <p className="text-gray-600 text-sm md:text-base mt-1 leading-tight">$350.00</p>
            </div>
            <div className="ml-4">
              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-base transition duration-200">
                Remove
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Subtotal & Checkout Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-6 bg-white shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-800 font-semibold text-lg md:text-xl">Subtotal</h2>
          <p className="text-gray-900 font-semibold text-lg md:text-xl">$750.00</p>
        </div>

        <div className="flex justify-center mt-4 md:mt-6">
          <Link
            href="/checkout"
            className="w-full md:w-3/4 lg:w-1/2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-3 md:py-4 rounded-lg text-sm md:text-base text-center transition duration-200"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
