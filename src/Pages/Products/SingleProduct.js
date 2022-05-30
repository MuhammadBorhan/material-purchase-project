import React from 'react';

const SingleProduct = ({ pd }) => {
    const { img, product, price } = pd;
    return (
        <div class="card card-side bg-base-100 shadow-xl p-4">
            <figure><img className='w-24' src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="">Product: {product}</h2>
                <p>Price: BDT {price}</p>
            </div>
        </div>
    );
};

export default SingleProduct;