import React, { useEffect, useState } from 'react';
import InvoiceTable from './InvoiceTable';

const InvoiceProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    return (
        <div className='py-4'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((pd, index) => <InvoiceTable index={index} key={pd._id} pd={pd}></InvoiceTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceProduct;