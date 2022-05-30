import React, { useEffect, useState } from 'react';

const VendorsInfo = () => {
    const [vendors, setVendors] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/vendor`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVendors(data))

    }, []);
    return (
        <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 p-10'>
            {
                vendors.map(vendor => <div>
                    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Name: {vendor.name}</h2>
                            <p>Email: {vendor.email}</p>
                            <p>Address: {vendor.address}</p>
                            <p>Phone: {vendor.phone}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default VendorsInfo;