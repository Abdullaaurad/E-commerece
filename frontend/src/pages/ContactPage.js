import { useState } from "react";
import NavBar from "../features/navbar/Navbar";
import Footer from "../features/common/Footer";

function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setContactForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Phone Support",
      details: ["+1 (555) 123-4567", "Mon-Fri: 8AM-6PM EST"],
      action: "Call Now"
    },
    {
      icon: "📧",
      title: "Email Support",
      details: ["support@vehiclemarketplace.com", "24/7 Response"],
      action: "Send Email"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: ["Available 24/7", "Instant Response"],
      action: "Start Chat"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: ["123 Main Street", "City, State 12345"],
      action: "Get Directions"
    }
  ];

  const faqs = [
    {
      question: "How do I search for vehicles?",
      answer: "You can search for vehicles using our advanced search filters. Simply go to the Search page and use filters like make, model, year, price range, and more to find your perfect vehicle."
    },
    {
      question: "Can I compare multiple vehicles?",
      answer: "Yes! You can compare up to 3 vehicles side by side. Visit the Compare Vehicles page to select vehicles and view detailed comparisons of their features and specifications."
    },
    {
      question: "What financing options are available?",
      answer: "We offer various financing options including bank loans, credit union loans, dealer financing, and online lenders. Visit our Financing page to calculate payments and explore options."
    },
    {
      question: "How do I get a vehicle history report?",
      answer: "You can get a comprehensive vehicle history report by entering the VIN number or license plate on our Vehicle History page. Reports include accident history, ownership records, and maintenance history."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on most vehicles. Please contact our support team for specific details about your purchase."
    },
    {
      question: "How do I contact a dealer?",
      answer: "You can contact dealers directly through their profile pages. Each dealer has contact information and business hours listed on their profile."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="text-4xl mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                    {info.action}
                  </button>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-green-500 text-4xl mb-4">✓</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="vehicle">Vehicle Information</option>
                        <option value="financing">Financing Questions</option>
                        <option value="technical">Technical Support</option>
                        <option value="complaint">Complaint</option>
                        <option value="suggestion">Suggestion</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={contactForm.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Please describe your inquiry in detail..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Need More Help?</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-8">
              <h2 className="text-xl font-semibold mb-6">Business Hours</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Customer Support</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 4:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Live Chat</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>24/7 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100 mb-4">Speak directly with our support team</p>
                <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100">
                  +1 (555) 123-4567
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                <p className="text-green-100 mb-4">Get instant help from our experts</p>
                <button className="px-4 py-2 bg-white text-green-600 rounded-md hover:bg-gray-100">
                  Start Chat
                </button>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                <p className="text-purple-100 mb-4">Send us a detailed message</p>
                <button className="px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100">
                  support@vehiclemarketplace.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
      <Footer />
    </div>
  );
}

export default ContactPage;