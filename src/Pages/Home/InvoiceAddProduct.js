import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InvoiceAddProduct = () => {
    const { id } = useParams();

    const handleAdded = event => {
        event.preventDefault();
        const product = event.target.product.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;
        const secret = event.target.secret.value;
        const id = event.target.id.value;

        const addItem = { product, price, quantity, img, secret, id };

        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addItem)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Successfully Added.');
                event.target.reset()
            })
    }
    return (
        <div className='py-8'>
            <form onSubmit={handleAdded} className='grid grid-cols-1 gap-4 justify-items-center'>
                <input type="text" name='product' placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='price' placeholder='Price' className="input input-bordered w-full max-w-xs" />
                <input type="text" name='quantity' placeholder="Product Quantity" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='img' placeholder="Product Image" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='secret' placeholder="Secret Code" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='id' value={id} disabled className="input input-bordered font-bold w-full max-w-xs" />
                <input type="submit" value='Add' className="btn input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default InvoiceAddProduct;