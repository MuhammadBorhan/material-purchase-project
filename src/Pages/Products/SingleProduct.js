import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const SingleProduct = ({ pd }) => {
    const { img, product, price } = pd;
    return (
        <div class="card card-side bg-base-100 shadow-xl p-4">
            <figure><img className='w-24' src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="">Product: {product}</h2>
                <p>Price: BDT {price}</p>
            </div>
            <div className='flex items-center'>
                <button className='bg-gray-300 p-2 rounded-full w-12 h-12 flex justify-center items-center justify-items-center'><span className='text-red-600 text-2xl font-bold'><FaTrashAlt /></span></button>
            </div>
        </div>
    );
};

export default SingleProduct;