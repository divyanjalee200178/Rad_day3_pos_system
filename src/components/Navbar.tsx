import Logo from "../assets/easy-pos-logo.svg";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaSignInAlt, FaTachometerAlt} from "react-icons/fa";


const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const routes = [
        {to: "/", name: "Home"},
        {to: "/about", name: "About"},
        {to: "/contact", name: "Contact"}
    ]

    const isActive = (to: string) => {
        return to === location.pathname
    }

    const onLoginPressed = () => {
        navigate("/login")
    }

    const onDashboardClicked = () => {
        navigate("/dashboard")
    }

    return (
        <nav className="bg-gradient-to-r from-indigo-200 to-red-900 text-black shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Left: Logo & Brand */}
                <div className="flex items-center space-x-4">
                    <img src={Logo} alt="Easy POS Logo" width={50} className="rounded shadow-md" />
                    <span className="text-2xl font-extrabold tracking-wide text-yellow-700">Easy Choice</span>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    {routes.map((route, index) => (
                        <Link
                            key={index}
                            to={route.to}
                            className={`text-md font-semibold px-4 py-2 rounded-lg transition duration-200
                ${
                                isActive(route.to)
                                    ? "bg-orange-600 text-indigo-900 shadow-md"
                                    : "hover:bg-indigo-700 hover:text-yellow-300"
                            }`}
                        >
                            {route.name}
                        </Link>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="flex space-x-4">
                    <button
                        onClick={onLoginPressed}
                        className="flex items-center px-4 py-2 bg-amber-950 text-white font-semibold rounded-lg hover:bg-yellow-300 transition shadow"
                    >
                        <FaSignInAlt className="mr-2" /> Login
                    </button>
                    <button
                        onClick={onDashboardClicked}
                        className="flex items-center px-4 py-2 bg-white text-indigo-800 font-semibold rounded-lg hover:bg-gray-100 transition shadow"
                    >
                        <FaTachometerAlt className="mr-2" /> Dashboard
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
