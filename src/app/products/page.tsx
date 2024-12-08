import Image from "next/image";

const ProductsPage = () => {
  return (
    <div className="bg-white">
      {/* Products section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {/* Product cards */}
            <div>
              <Image
                src="/assets/ourproducts/Image1.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image2.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image3.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image4.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image5.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image6.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image1.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image2.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image3.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image4.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image5.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
            <div>
              <Image
                src="/assets/ourproducts/Image6.png"
                alt="Library Stool Chair"
                width={300}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-2">
                <p className="text-base font-medium text-gray-900">
                  Library Stool Chair
                </p>
                <p className="text-sm text-gray-500">$20</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
        <div className="flex justify-center">
                <form className="w-full max-w-md flex sm:flex-row flex-col items-center sm:space-x-4 space-y-2 sm:space-y-0">
                {/* Input Field */}
                <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full flex-grow border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-md py-4 px-6 text-base text-gray-900 placeholder-gray-400 sm:text-sm"
                />
                {/* Submit Button */}
                <button
                    type="submit"
                    className="mt-2 bg-indigo-600 text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 sm:w-auto sm:mt-0"
                >
                    Subscribe
                </button>
                </form>
            </div>

      {/* Instagram feed section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Follow Products And Discounts On Instagram
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Check out our latest products and exclusive discounts.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <div>
              <Image
                src="/assets/feature/Image.png"
                alt="Instagram Image"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/feature/Image2.png"
                alt="Instagram Image"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/feature/Image3.png"
                alt="Instagram Image"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/feature/Image4.png"
                alt="Instagram Image"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/assets/feature/Image.png"
                alt="Instagram Image"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
