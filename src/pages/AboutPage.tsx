import { FaBullseye, FaUsers, FaCogs } from "react-icons/fa";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Hero Section */}
            <section className="bg-white py-16 shadow">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-600">Easy POS</span></h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Easy POS is a modern Point of Sale system designed to streamline your business operations. From inventory to sales, we help businesses grow smarter and faster.
                    </p>
                </div>
            </section>

            {/* Mission / Vision / Values */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                        <FaBullseye className="text-3xl text-blue-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-gray-600">
                            To empower small and medium businesses with intuitive, reliable, and fast POS solutions.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                        <FaUsers className="text-3xl text-green-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                        <p className="text-gray-600">
                            Everything we build is crafted with the needs of our customers at the core.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                        <FaCogs className="text-3xl text-yellow-600 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p className="text-gray-600">
                            We constantly improve and evolve to bring modern tech to everyday commerce.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 py-12">
                <div className="text-center text-white max-w-xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Easy POS family</h2>
                    <p className="mb-6">
                        Whether you're a retailer, café, or wholesaler, Easy POS adapts to your needs.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
