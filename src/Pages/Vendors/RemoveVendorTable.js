import React from 'react';
import { toast } from 'react-toastify';

const RemoveVendorTable = ({ vendor, index }) => {

    // const handleRemove = id => {
    //     console.log(id)
    //     const proceed = window.confirm('Are you sure?');
    //     if (proceed) {
    //         const url = `http://localhost:5000/purchases/${id}`;
    //         fetch(url, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount) {

    //                     toast.success(` Successfully Deleted`);
    //                 }
    //             })
    //     }
    // }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{vendor.referencef}</td>
            <td>{vendor.name}</td>
            <td>{vendor.email}</td>
        </tr>
    );
};

export default RemoveVendorTable;