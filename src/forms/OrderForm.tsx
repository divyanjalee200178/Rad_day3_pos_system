import {useState, useEffect, type FormEvent} from "react";
import type { Order } from "../types/Order";

interface OrderFormProps {
    onSubmit: (order: Order) => void;
    onCancel: () => void;
    initialValues?: Order;
}

const OrderForm = ({ onSubmit, onCancel, initialValues }: OrderFormProps) => {
    const [order, setOrder] = useState<Order>({
        id: Date.now(),
        c_name: "",
        i_code: 0,
        i_name: "",
        i_qty: 0,
        i_unitPrice: 0,
        total: 0,
    });

    useEffect(() => {
        if (initialValues) {
            setOrder(initialValues);
        }
    }, [initialValues]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setOrder((prev) => ({
            ...prev,
            [name]: name === "i_code" || name === "i_qty" || name === "i_unitPrice"
                ? Number(value)
                : value,
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const total = order.i_qty * order.i_unitPrice;
        onSubmit({ ...order, total });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block font-medium">Customer Name</label>
                <input
                    type="text"
                    name="c_name"
                    value={order.c_name}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block font-medium">Item Code</label>
                <input
                    type="number"
                    name="i_code"
                    value={order.i_code}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block font-medium">Item Name</label>
                <input
                    type="text"
                    name="i_name"
                    value={order.i_name}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block font-medium">Quantity</label>
                <input
                    type="number"
                    name="i_qty"
                    value={order.i_qty}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded-lg"
                />
            </div>

            <div>
                <label className="block font-medium">Unit Price</label>
                <input
                    type="number"
                    name="i_unitPrice"
                    value={order.i_unitPrice}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded-lg"
                />
            </div>

            <div className="flex justify-end gap-4 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                    {initialValues ? "Update Order" : "Create Order"}
                </button>
            </div>
        </form>
    );
};

export default OrderForm;
