import React, { useEffect, useState } from 'react';

const AllProductVariants = () => {
    const [product, setProducts] = useState([]);
    const [relode, setRelode] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setRelode(!relode)
            })

    }, [relode]);
    return (
        <div className='px-12 py-8'>
            <h1 className='text-2xl font-bold text-purple-600 mb-2'>All Products Variants</h1>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Per Unit Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((pd, index) => <tr key={pd._id} >
                                    <th>{index + 1}</th>
                                    <td>{pd.product}</td>
                                    <td>{pd.price}</td>
                                    <td>{pd.quantity}</td>
                                    <td>{pd.price * pd.quantity}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllProductVariants;