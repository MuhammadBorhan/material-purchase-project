import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleProductInfo = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id]);
    return (
        <div className='flex justify-center mt-16'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={products.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{products.product}</h2>
                    <p>Price: {products.price} BDT</p>
                    <p>Quantity: {products.quantity} Pcs</p>
                    <p>total: {products.price * products.quantity} BDT</p>
                    <div class="card-actions">
                        <Link to='/allproduct'><button class="btn btn-gost">Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductInfo;