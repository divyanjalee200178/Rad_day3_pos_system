import { FaDollarSign, FaUsers, FaBox, FaChartLine } from "react-icons/fa";

const AnalyticsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Analytics Dashboard</h2>
                    <p className="text-gray-600 mt-2">Get insights into your business performance</p>
                </header>

                {/* KPI Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
                        <FaDollarSign className="text-3xl text-green-600" />
                        <div>
                            <div className="text-2xl font-bold text-gray-800">$12,450</div>
                            <div className="text-sm text-gray-500">Monthly Sales</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
                        <FaUsers className="text-3xl text-blue-600" />
                        <div>
                            <div className="text-2xl font-bold text-gray-800">220</div>
                            <div className="text-sm text-gray-500">New Customers</div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
                        <FaBox className="text-3xl text-yellow-600" />
                        <div>
                            <div className="text-2xl font-bold text-gray-800">850</div>
                            <div className="text-sm text-gray-500">Items in Stock</div>
                        </div>
                    </div>
                </section>

                {/* Chart Section */}
                <section className="bg-white p-8 rounded-xl shadow mb-12">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <FaChartLine className="mr-2 text-purple-600" />
                        Sales Trend (Last 6 Months)
                    </h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                        [ Chart Placeholder - Integrate Chart.js or Recharts ]
                    </div>
                </section>

                {/* Top Selling Products */}
                <section className="bg-white p-8 rounded-xl shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Selling Products</h3>
                    <table className="min-w-full text-sm text-left text-gray-600">
                        <thead className="text-xs uppercase text-gray-500 bg-gray-100">
                        <tr>
                            <th className="px-4 py-3">Product</th>
                            <th className="px-4 py-3">Units Sold</th>
                            <th className="px-4 py-3">Revenue</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">Wireless Mouse</td>
                            <td className="px-4 py-3">120</td>
                            <td className="px-4 py-3">$2,400</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50">
                            <td className="px-4 py-3">Bluetooth Speaker</td>
                            <td className="px-4 py-3">80</td>
                            <td className="px-4 py-3">$3,200</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3">USB-C Hub</td>
                            <td className="px-4 py-3">150</td>
                            <td className="px-4 py-3">$4,500</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
    );
};

export default AnalyticsPage;
