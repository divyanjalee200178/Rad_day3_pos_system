import {useState} from "react";
import {customerData} from "../data/CustomerData";
import type {Customer} from "../types/Customer";
import CustomerForm from "../forms/CustomerForm";
import Dialog from "../components/Dialog";

const CustomerPage = () => {
    const [customers, setCustomers] = useState<Customer[]>(customerData);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null)

    const onSubmit = (customer: Customer) => {
        if(editingCustomer !== null)  { // updating
            setCustomers(
                prevState =>
                    prevState.map(originalCustomer =>
                    originalCustomer.id === customer.id
                        ? {...originalCustomer, ...customer} // spread operator
                        : originalCustomer
                    )
            )
        } else { // add
            setCustomers([...customers, customer])
        }

        setIsDialogOpen(false)
    }

    const onAddCustomerClicked = () => {
        setEditingCustomer(null)
        setIsDialogOpen(true)
    }

    const onCancel = () => {
        setIsDialogOpen(false)
    }

    const onDelete = (id: number) => {
        setCustomers((prevState) =>
            prevState.filter((customer) => customer.id !== id))
    }

    const onEdit = (customer: Customer) => {
        setEditingCustomer(customer)
        setIsDialogOpen(true)
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-3xl shadow-xl mt-10 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold text-slate-800">👥 Customers</h3>
                <button
                    onClick={onAddCustomerClicked}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
                >
                    ➕ Add Customer
                </button>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-sm">
                <table className="min-w-full bg-slate-50 text-slate-800 border border-slate-200 rounded-lg overflow-hidden">
                    <thead>
                    <tr className="bg-teal-600 text-white text-left text-sm">
                        <th className="py-4 px-6">Name</th>
                        <th className="py-4 px-6">Address</th>
                        <th className="py-4 px-6">DOB</th>
                        <th className="py-4 px-6">Edit</th>
                        <th className="py-4 px-6">Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer, index) => (
                        <tr
                            key={index}
                            className="border-b border-slate-200 hover:bg-teal-50 transition duration-200"
                        >
                            <td className="py-4 px-6 text-sm">{customer.name}</td>
                            <td className="py-4 px-6 text-sm">{customer.address}</td>
                            <td className="py-4 px-6 text-sm">{customer.dateOfBirth}</td>
                            <td className="py-4 px-6">
                                <button
                                    onClick={() => onEdit(customer)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-4 py-2 rounded-lg text-sm shadow transition"
                                >
                                    ✏️ Edit
                                </button>
                            </td>
                            <td className="py-4 px-6">
                                <button
                                    onClick={() => onDelete(customer.id)}
                                    className="bg-rose-500 hover:bg-rose-600 text-white font-medium px-4 py-2 rounded-lg text-sm shadow transition"
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
                title={editingCustomer !== null ? "Edit Customer" : "Add Customer"}
                isDialogOpen={isDialogOpen}
            >
                <CustomerForm
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    initialValues={editingCustomer !== null ? editingCustomer : undefined}
                />
            </Dialog>
        </div>
    );

};

export default CustomerPage;
