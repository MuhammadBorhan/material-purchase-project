import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const RemoveSelectVendor = () => {
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/purchase`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))

    }, []);

    const handleRemove = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/purchase/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const rest = purchase.filter(pur => pur._id !== id)
                    setPurchase(rest)
                    // if (data.deletedCount) {

                    //     toast.success(` Successfully Deleted`);
                    // }
                })
        }
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-red-600 mb-4'>Remove Selected Vendor</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>referencef</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchase.map((vendor, index) => <tr key={vendor._id}>
                                    <th>{index + 1}</th>
                                    <td>{vendor.referencef}</td>
                                    <td>{vendor.name}</td>
                                    <td>{vendor.email}</td>
                                    <td>
                                        <button onClick={() => handleRemove(vendor._id)} class="btn btn-error">Remove</button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RemoveSelectVendor;