import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const SingleProduct = ({ pd }) => {
    const { _id, img, product, price } = pd;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {

                        toast.success(`${product} Successfully Deleted`);
                    }
                })
        }
    }
    return (
        <div class="card card-side bg-base-100 shadow-xl p-4">
            <figure><img className='w-24' src={img} alt="Movie" /></figure>
            <div class="card-body">
                <h2 class="">Product: {product}</h2>
                <p>Price: BDT {price}</p>
            </div>
            <div className='flex items-center'>
                <button onClick={() => handleDelete(_id)} className='bg-gray-300 p-2 rounded-full w-12 h-12 flex justify-center items-center justify-items-center'><span className='text-red-600 text-2xl font-bold'><FaTrashAlt /></span></button>
            </div>
        </div>
    );
};

export default SingleProduct;