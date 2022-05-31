import React, { useEffect, useState } from 'react';

const ProductVariants = () => {
    const [product, setProducts] = useState([]);
    const [relode, setRelode] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/AVproduct`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setRelode(!relode)
            })

    }, [relode]);
    return (
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
    );
};

export default ProductVariants;