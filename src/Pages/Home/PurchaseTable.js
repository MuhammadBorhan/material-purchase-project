import React from 'react';
import { useNavigate } from 'react-router-dom';

const PurchaseTable = ({ vendor, index }) => {
    const { _id, name, referencef, date, company, representive, price } = vendor;
    const navigate = useNavigate();

    const handleInvoice = () => {
        navigate(`/invoice/${_id}`)
    }
    return (
        <tr onClick={handleInvoice} className='cursor-pointer'>
            <th>{index + 1}</th>
            <td>{referencef}</td>
            <td>{date}</td>
            <td>{name}</td>
            <td>{company}</td>
            <td>{representive}</td>
            <td>BDT {price}</td>
        </tr>
    );
};

export default PurchaseTable;