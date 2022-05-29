import React from 'react';
import { Link } from 'react-router-dom';
import ManageVendor from './ManageVendor';

const Home = () => {
    return (
        <div className='px-12 py-3'>
            <h2 className=' font-bold text-xl ml-4'>Request for Quotation</h2>
            <Link to='addvendor'><button class="btn bg-purple-800 ml-4 mt-4">Create</button></Link>
            <div>
                <ManageVendor></ManageVendor>
            </div>
        </div>
    );
};

export default Home;