import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 text-gray-800">
            {/* Header Section */}
            <section className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                <p className="text-lg text-gray-600">
                    We'd love to hear from you. Whether you have a question about features, trials, or anything else.
                </p>
            </section>

            {/* Contact Info and Form */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-start">
                        <FaEnvelope className="text-blue-600 text-xl mr-4 mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg">Email</h4>
                            <p className="text-gray-600">choice@easyChoice.com</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaPhone className="text-green-600 text-xl mr-4 mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg">Phone</h4>
                            <p className="text-gray-600">+94 77 123 4567</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaMapMarkerAlt className="text-red-600 text-xl mr-4 mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg">Address</h4>
                            <p className="text-gray-600">
                                123 Main Street, Colombo, Sri Lanka
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message here..."
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
