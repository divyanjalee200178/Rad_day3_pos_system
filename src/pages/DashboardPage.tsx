import { useNavigate } from "react-router-dom";
import {
    FaUsers,
    FaBoxOpen,
    FaFileInvoiceDollar,
    FaChartBar,
    FaCog,
} from "react-icons/fa";

const stats = [
    {
        label: "Total Customers",
        value: 320,
        icon: <FaUsers className="text-3xl text-blue-600" />,
    },
    {
        label: "Stock Items",
        value: 128,
        icon: <FaBoxOpen className="text-3xl text-green-600" />,
    },
    {
        label: "Sales Today",
        value: "$1,240",
        icon: <FaFileInvoiceDollar className="text-3xl text-yellow-500" />,
    },
];

const dashboardCards = [
    {
        name: "Customers",
        to: "/dashboard/customers",
        icon: <FaUsers className="text-5xl text-blue-600 mb-4" />,
        color: "bg-blue-50",
    },
    {
        name: "Stocks",
        to: "/dashboard/stocks",
        icon: <FaBoxOpen className="text-5xl text-green-600 mb-4" />,
        color: "bg-green-50",
    },
    {
        name: "Sales",
        to: "/dashboard/sales",
        icon: <FaFileInvoiceDollar className="text-5xl text-yellow-500 mb-4" />,
        color: "bg-yellow-50",
    },
    {
        name: "Analytics",
        to: "/dashboard/Analytics",
        icon: <FaChartBar className="text-5xl text-purple-600 mb-4" />,
        color: "bg-purple-50",
    },
    {
        name: "Settings",
        to: "/dashboard/settings",
        icon: <FaCog className="text-5xl text-gray-600 mb-4" />,
        color: "bg-gray-100",
    },
];

const DashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
                        Welcome to Easy POS
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Your all-in-one solution for managing customers, inventory, and sales
                    </p>
                </header>

                {/* Stats */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex items-center gap-4"
                        >
                            <div>{stat.icon}</div>
                            <div>
                                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                                <div className="text-sm text-gray-500">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Navigation Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dashboardCards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(card.to)}
                            className={`cursor-pointer p-8 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center ${card.color}`}
                        >
                            <div className="flex flex-col items-center">
                                {card.icon}
                                <h3 className="text-xl font-bold text-gray-800">{card.name}</h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    Manage {card.name.toLowerCase()} section
                                </p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default DashboardPage;
