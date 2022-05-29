import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const VendorTable = ({ vendor, index }) => {
    const { name, referencef, date, company, representive, price } = vendor;
    const quotation = 'RFQ';
    const [req, setReq] = useState(quotation)

    const handleVendor = () => {
        const change = 'Confirm';
        setReq(change)
        const proceed = window.confirm('Confirm for order purchase?');
        if (proceed) {
            const url = `http://localhost:5000/purchase`;
            fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(vendor)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {

                        toast(`${referencef} Purchase Successfully`);
                    }
                    else {
                        toast.error(`${referencef} Already Purchased`);
                    }
                })
        }
    }
    return (
        <tr onClick={handleVendor} className='cursor-pointer'>
            <th>{index + 1}</th>
            <td>{referencef}</td>
            <td>{date}</td>
            <td>{name}</td>
            <td>{company}</td>
            <td>{representive}</td>
            <td>BDT {price}</td>
            <td>{req}</td>
        </tr>
    );
};

export default VendorTable;