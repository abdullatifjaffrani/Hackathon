import Image from 'next/image';

export default function FAQ() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Page Title */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
        <h1 className="text-gray-800 text-4xl md:text-5xl font-bold text-center">FAQs - Frequently Asked Questions</h1>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-8">
        <div className="space-y-6 md:space-y-8">
          {/* Question 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              What is your return policy?
            </h2>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              We accept returns within 30 days of purchase. Items must be in their original condition and packaging to qualify for a refund or exchange.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              How long does delivery take?
            </h2>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              Delivery typically takes 3-5 business days depending on your location. We provide tracking information once your order has been shipped.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Do you offer international shipping?
            </h2>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              Yes, we ship internationally. Shipping costs will vary depending on your location, and delivery may take longer than domestic orders.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Can I change or cancel my order after it has been placed?
            </h2>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              Orders can be changed or canceled within 24 hours of placing them. Please contact our support team as soon as possible to request any changes.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              How can I contact customer service?
            </h2>
            <p className="text-gray-600 leading-snug text-sm md:text-base">
              You can contact our customer service team via email at support@example.com or by calling our helpline at (555) 555-5555 during working hours.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
