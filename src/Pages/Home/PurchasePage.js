import React, { useEffect, useState } from 'react';
import PurchaseTable from './PurchaseTable';

const PurchasePage = () => {
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/purchase`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))

    }, []);
    return (
        <div className='py-4 px-12'>
            <h2 className=' font-bold text-xl ml-4 mb-3'>Purchase Order</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Reference</th>
                            <th>Order Date</th>
                            <th>Vendor</th>
                            <th>Company</th>
                            <th>Purchase Representive</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchase.map((vendor, index) => <PurchaseTable key={vendor._id} index={index} vendor={vendor}></PurchaseTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PurchasePage;