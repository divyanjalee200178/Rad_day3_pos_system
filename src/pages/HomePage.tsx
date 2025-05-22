import { FaCashRegister, FaChartLine, FaUsers, FaCloud } from "react-icons/fa";
import Logo from "../assets/12.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="bg-white font-sans leading-relaxed tracking-wide">
            {/* Hero Section */}
            <section className="bg-gradient-to-tr from-blue-400 via-red-200 to-purple-700 text-white py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                            Meet <span className="text-yellow-800">Easy Choice</span>
                        </h1>
                        <p className="text-lg text-blue-800 mb-8">
                            Revolutionize how you manage your business — from sales tracking to customer engagement — all in one sleek platform.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                to="/dashboard"
                                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 transition"
                            >
                                Try Demo
                            </Link>
                            <Link
                                to="/about"
                                className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-800 transition"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2 text-center">
                        <img src={Logo} alt="Easy POS" className="w-80 md:w-96 mx-auto drop-shadow-xl rounded-xl" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-100 py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">What Makes Easy POS Different?</h2>
                    <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
                        Built for performance and simplicity, Easy POS gives you all the tools you need to run your store efficiently — without the hassle.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            {
                                icon: <FaCashRegister className="text-4xl text-indigo-600 mb-4" />,
                                title: "Quick Checkout",
                                desc: "Process transactions in seconds with our optimized sales flow.",
                            },
                            {
                                icon: <FaChartLine className="text-4xl text-indigo-600 mb-4" />,
                                title: "Sales Analytics",
                                desc: "Visual reports give you clarity on trends and performance.",
                            },
                            {
                                icon: <FaUsers className="text-4xl text-indigo-600 mb-4" />,
                                title: "Customer Management",
                                desc: "Track buying behavior and build long-term loyalty.",
                            },
                            {
                                icon: <FaCloud className="text-4xl text-indigo-600 mb-4" />,
                                title: "Cloud Access",
                                desc: "Access your POS from anywhere with secure cloud syncing.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-left"
                            >
                                {feature.icon}
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-10">Trusted by Retailers Everywhere</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Lanka Mart",
                                comment: "Easy POS transformed how we handle our day-to-day operations. It’s fast, reliable, and beautifully designed.",
                            },
                            {
                                name: "QuickGroceries",
                                comment: "We moved from spreadsheets to Easy POS, and it’s been a game-changer for sales and stock tracking.",
                            },
                            {
                                name: "TechHouse",
                                comment: "Finally a POS that doesn’t feel clunky. Super intuitive and modern. Highly recommend!",
                            },
                        ].map((t, idx) => (
                            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow text-left">
                                <p className="text-gray-700 italic mb-4">"{t.comment}"</p>
                                <h4 className="font-semibold text-indigo-600 text-sm">– {t.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-indigo-800 text-center">
                <div className="max-w-xl mx-auto px-4">
                    <h2 className="text-3xl text-white font-bold mb-4">Start Selling Smarter Today</h2>
                    <p className="text-indigo-200 mb-6">Create your free account and upgrade your business experience in minutes.</p>
                    <Link
                        to="/signup"
                        className="inline-block px-8 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
                    >
                        Get Started Free
                    </Link>
                </div>
            </section>
        </div>
    );

};

export default HomePage;
