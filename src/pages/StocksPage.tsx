import { useReducer, useState } from "react";
import { stockData } from "../data/StockData";
import type { Stock } from "../types/Stock";
import StockForm from "../forms/StockForm";
import Dialog from "../components/Dialog";
import stocksReducer from "../reduces/StocksReducer.ts";

const StocksPage = () => {
    const [stocks, dispatch] = useReducer(stocksReducer, stockData); // ✅ useReducer correctly
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editingStock, setEditingStock] = useState<Stock | null>(null);

    const onSubmit = (stock: Stock) => {
        if (editingStock !== null) {
            dispatch({
                type: "UPDATE",
                payload: stock,
            });
        } else {
            dispatch({
                type: "ADD",
                payload: stock,
            });
        }
        setIsDialogOpen(false);
    };

    const onAddStockClicked = () => {
        setEditingStock(null);
        setIsDialogOpen(true);
    };

    const onCancel = () => {
        setIsDialogOpen(false);
    };

    const onDelete = (code: number) => {
        dispatch({
            type: "DELETE",
            payload: code,
        });
    };

    const onEdit = (stock: Stock) => {
        setEditingStock(stock);
        setIsDialogOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-12">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-4xl font-bold text-gray-800">📦 Stock Management</h3>
                <button
                    onClick={onAddStockClicked}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
                >
                    ➕ Add Stock
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold tracking-wider">Name</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold tracking-wider">Unit Price</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold tracking-wider">Quantity</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold tracking-wider">Edit</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold tracking-wider">Delete</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                    {stocks.map((stock, index) => (
                        <tr
                            key={index}
                            className="hover:bg-blue-50 transition duration-150 ease-in-out"
                        >
                            <td className="py-3 px-6">{stock.name}</td>
                            <td className="py-3 px-6">${stock.unitPrice.toFixed(2)}</td>
                            <td className="py-3 px-6">{stock.qty}</td>
                            <td className="py-3 px-6">
                                <button
                                    onClick={() => onEdit(stock)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm"
                                >
                                    ✏️ Edit
                                </button>
                            </td>
                            <td className="py-3 px-6">
                                <button
                                    onClick={() => onDelete(stock.code)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm"
                                >
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <Dialog
                title={editingStock !== null ? "Edit Stock" : "Add Stock"}
                isDialogOpen={isDialogOpen}
            >
                <StockForm
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    initialValues={editingStock !== null ? editingStock : undefined}
                />
            </Dialog>
        </div>
    );
};

export default StocksPage;
