import {type ChangeEvent, type FormEvent, useState} from "react";
import type {Customer} from "../types/Customer";

export interface CustomerFormData {
    name: string;
    address: string;
    dateOfBirth: string;
}

const initialForm: CustomerFormData = {
    name: "",
    address: "",
    dateOfBirth: "",
};

interface CustomerFormProps {
    onSubmit: (customer: Customer) => void
    onCancel: ()=> void
    initialValues?: Customer
}

const CustomerForm = ({onSubmit, onCancel, initialValues}: CustomerFormProps) => {
    const initialFormData: CustomerFormData = initialValues ? {
        name: initialValues.name,
        dateOfBirth: initialValues.dateOfBirth,
        address: initialValues.address
    } : initialForm;

    const [form, setForm] = useState<CustomerFormData>(initialFormData);

    const [errors, setErrors] = useState<Partial<Record<keyof CustomerFormData, string>>>({});

    // Basic validation
    const validate = (): Partial<Record<keyof CustomerFormData, string>> => {
        const newErrors: Partial<Record<keyof CustomerFormData, string>> = {};
        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.address.trim()) newErrors.address = "Address is required";
        if (!form.dateOfBirth.trim()) {
            newErrors.dateOfBirth = "Date of birth is required";
        } else if (!/^\d{4}-\d{2}-\d{2}$/.test(form.dateOfBirth)) {
            newErrors.dateOfBirth = "Use format YYYY-MM-DD";
        }
        return newErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            onSubmit({
                name: form.name,
                dateOfBirth: form.dateOfBirth,
                address: form.address,
                id: initialValues ? initialValues.id : Date.now()
            })
            setForm(initialForm);
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4 py-12">
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-10 w-full max-w-2xl border border-gray-200">
                <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
                    {initialValues ? "Edit Customer" : "Add New Customer"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                                errors.name
                                    ? "border border-red-500 focus:ring-red-300"
                                    : "border border-gray-300 focus:ring-indigo-400"
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="address"
                            type="text"
                            value={form.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                            className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                                errors.address
                                    ? "border border-red-500 focus:ring-red-300"
                                    : "border border-gray-300 focus:ring-indigo-400"
                            }`}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                        )}
                    </div>

                    {/* Date of Birth Field */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="dateOfBirth"
                            type="date"
                            value={form.dateOfBirth}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                                errors.dateOfBirth
                                    ? "border border-red-500 focus:ring-red-300"
                                    : "border border-gray-300 focus:ring-indigo-400"
                            }`}
                        />
                        {errors.dateOfBirth && (
                            <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-between mt-8">
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md"
                        >
                            {initialValues ? "Update Customer" : "Add Customer"}
                        </button>
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-md"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default CustomerForm;
