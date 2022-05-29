import React from 'react';

const InvoiceTable = ({ pd, index }) => {
    const { product, price, quantity } = pd;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{product}</td>
            <td>BDT {price}</td>
            <td>{quantity}</td>
            <td>BDT {quantity * price}</td>
        </tr>
    );
};

export default InvoiceTable;