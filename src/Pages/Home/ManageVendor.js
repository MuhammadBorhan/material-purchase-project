import React, { useEffect, useState } from 'react';
import VendorTable from './VendorTable';

const ManageVendor = () => {
    const [vendors, setVendors] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/vendor`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVendors(data))

    }, []);
    return (
        <div>
            <div className='py-4'>
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
                                {/* <th>Total</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                vendors.map((vendor, index) => <VendorTable key={vendor._id} index={index} vendor={vendor}></VendorTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageVendor;