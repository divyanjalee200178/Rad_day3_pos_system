// OrderPage.tsx
import { useState } from "react";
import type { Order } from "../types/Order";
import { orderData } from "../data/OrderData";
import OrderForm from "../forms/OrderForm";
import Dialog from "../components/Dialog";

const OrderPage = () => {
    const [orders, setOrders] = useState<Order[]>(orderData);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [editingOrder, setEditingOrder] = useState<Order | null>(null);

    const onSubmit = (order: Order) => {
        if (editingOrder !== null) {
            setOrders((prevState) =>
                prevState.map((originalOrder) =>
                    originalOrder.id === order.id
                        ? { ...originalOrder, ...order }
                        : originalOrder
                )
            );
        } else {
            setOrders([...orders, order]);
        }
        setIsDialogOpen(false);
    };

    const onAddOrderClicked = () => {
        setEditingOrder(null);
        setIsDialogOpen(true);
    };

    const onCancel = () => {
        setIsDialogOpen(false);
    };

    const onDelete = (id: number) => {
        setOrders((prevState) => prevState.filter((order) => order.id !== id));
    };

    const onEdit = (order: Order) => {
        setEditingOrder(order);
        setIsDialogOpen(true);
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-12">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-4xl font-bold text-gray-800">🧾 Order Management</h3>
                <button
                    onClick={onAddOrderClicked}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
                >
                    ➕ Add Order
                </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Customer</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Item Code</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Item Name</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Quantity</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Unit Price</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Total</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Edit</th>
                        <th className="py-3 px-6 text-left text-sm font-semibold">Delete</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                    {orders.map((order, index) => (
                        <tr key={index} className="hover:bg-green-50 transition duration-150 ease-in-out">
                            <td className="py-3 px-6">{order.c_name}</td>
                            <td className="py-3 px-6">{order.i_code}</td>
                            <td className="py-3 px-6">{order.i_name}</td>
                            <td className="py-3 px-6">{order.i_qty}</td>
                            <td className="py-3 px-6">${order.i_unitPrice.toFixed(2)}</td>
                            <td className="py-3 px-6">${order.total.toFixed(2)}</td>
                            <td className="py-3 px-6">
                                <button
                                    onClick={() => onEdit(order)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-1 rounded-lg text-sm"
                                >
                                    ✏️ Edit
                                </button>
                            </td>
                            <td className="py-3 px-6">
                                <button
                                    onClick={() => onDelete(order.id)}
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
                title={editingOrder !== null ? "Edit Order" : "Add Order"}
                isDialogOpen={isDialogOpen}
            >
                <OrderForm
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    initialValues={editingOrder !== null ? editingOrder : undefined}
                />
            </Dialog>
        </div>
    );
};

export default OrderPage;
