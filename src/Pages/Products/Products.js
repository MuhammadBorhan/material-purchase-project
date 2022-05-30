import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [product, setProducts] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    return (
        <div className='px-12 py-8'>
            <Link to='/allproduct'><button class="btn bg-purple-800 ml-4 mt-4">Products</button></Link>
            <Link to='/allproduct/newproduct'><button class="btn bg-purple-800 ml-4 mt-4">Create</button></Link>
            <Outlet></Outlet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    product.map(pd => <SingleProduct key={pd._id} pd={pd}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Products;