import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-indigo-200 to-black text-gray-300 py-10 px-6 mt-16 shadow-inner">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">

                {/* Brand Section */}
                <div>
                    <h2 className="text-3xl font-extrabold text-blue-800 mb-2">Easy POS</h2>
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="/" className="hover:text-blue-400 transition duration-200">Home</a>
                        <a href="/about" className="hover:text-blue-400 transition duration-200">About</a>
                        <a href="/contact" className="hover:text-blue-400 transition duration-200">Contact</a>
                    </div>
                </div>

                {/* Social Icons */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                            <FaFacebook size={22} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
                            <FaTwitter size={22} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                            <FaInstagram size={22} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                            <FaGithub size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
