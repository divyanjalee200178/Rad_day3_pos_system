import {useState, type ChangeEvent, type FormEvent} from "react";
import type {Stock} from "../types/Stock";

export interface StockFormData{
    name:string;
    unitPrice:number;
    qty:number;
}

const initialForm: StockFormData = {
    name: "",
    unitPrice: 0, // ✅
    qty: 0,        // ✅
};

interface StockFormProps{
    onSubmit: (stock: Stock) => void
    onCancel: () => void
    initialValues?: Stock
}

const StockForm=({onSubmit,onCancel,initialValues}:StockFormProps) => {
    const initialFormData: StockFormData=initialValues ? {
        name: initialValues.name,
        unitPrice:initialValues.unitPrice,
        qty: initialValues.qty
    }: initialForm;

    const [form, setForm] = useState<StockFormData>(initialFormData);
    const [errors, setErrors] = useState<Partial<Record<keyof StockFormData, string>>>({});

    const validate = (): Partial<Record<keyof StockFormData, string>> => {
        const newErrors: Partial<Record<keyof StockFormData, string>> = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (form.unitPrice <= 0) newErrors.unitPrice = "UnitPrice is required";
        if (form.qty <= 0) newErrors.qty = "Qty is required";
        return newErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "unitPrice" || name === "qty" ? Number(value) : value,
        }));
    };

        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            const validationErrors = validate();
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length === 0) {
                onSubmit({
                    name: form.name,
                    unitPrice: form.unitPrice,
                    qty: form.qty,
                    code: initialValues ? initialValues.code : Date.now()
                })
                setForm(initialForm);
                setErrors({});
            }
        };

        return (
            <div>
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-50 rounded-lg shadow p-6 max-w-lg mx-auto"
                >
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded focus:outline-none ${
                                errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Enter customer name"
                        />
                        {errors.name && (
                            <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">
                            UnitPrice <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="unitPrice"
                            type="text"
                            value={form.unitPrice}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded focus:outline-none ${
                                errors.unitPrice ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Enter unitPrice"
                        />
                        {errors.unitPrice && (
                            <div className="text-red-500 text-sm mt-1">{errors.unitPrice}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">
                            Qty <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="qty"
                            type="number"
                            value={form.qty}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded focus:outline-none ${
                                errors.qty ? "border-red-500" : "border-gray-300"
                            }`}
                            placeholder="Enter qty"
                        />
                        {errors.qty && (
                            <div className="text-red-500 text-sm mt-1">{errors.qty}</div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition"
                    >
                        {initialValues ? "Edit Stock" : "Add Stock"}
                    </button>

                </form>
                <button
                    onClick={onCancel}
                    className="bg-red-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition"
                >
                    Cancel
                </button>
            </div>
        );
    };

export default StockForm;