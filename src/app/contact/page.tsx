export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Page Title Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
        <h1 className="text-gray-800 text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Contact Details */}
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6 leading-snug">
              Have questions or need assistance? Reach out anytime. We’re here to help!
            </p>
            {/* Contact Options */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center text-sm text-gray-600 space-x-2">
                <span className="text-teal-500 w-6 h-6">📧</span>
                <span>support@example.com</span>
              </div>
              {/* Phone */}
              <div className="flex items-center text-sm text-gray-600 space-x-2">
                <span className="text-teal-500 w-6 h-6">📞</span>
                <span>+1 (555) 555-5555</span>
              </div>
              {/* Address */}
              <div className="flex items-center text-sm text-gray-600 space-x-2">
                <span className="text-teal-500 w-6 h-6">📍</span>
                <span>123 Main Street, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border rounded-md p-2 md:p-3"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-md p-2 md:p-3"
                />
              </div>
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm text-gray-600 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Type your message here"
                  rows={4}
                  className="w-full border rounded-md p-2 md:p-3"
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 md:py-3 rounded-md text-sm md:text-base transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* What Makes Us Different Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 bg-white shadow-md rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 text-center mb-6">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center text-sm md:text-base">
          {/* Feature 1 */}
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-teal-500 w-8 h-8">🛠️</span>
            <span>High-Quality Products</span>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-teal-500 w-8 h-8">🔒</span>
            <span>Warranty Protection</span>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center space-x-2 text-gray-600">
            <span className="text-teal-500 w-8 h-8">🕒</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
