import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Vendors = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <div className='flex items-center'>
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden ml-4 mt-4">Open</label>
                        <h1 className='text-3xl ml-6 md:ml-0 text-purple-700 font-bold flex gap-2 m-4'>Vendor's Dashboard</h1>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu mt-12 p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        <button className='btn btn-primary font-bold mb-2'> <li><Link to='/vendors'>Vendor's Info</Link></li></button>
                        <button className='btn btn-info font-bold mb-2'> <li><Link to='/vendors/vendorsproduct'>Vendor's Product</Link></li></button>
                        <button className='btn btn-secondary font-bold mb-2'> <li><Link to='/vendors/vendorprovariant'>Product Price List</Link></li></button>
                        <button className='btn btn-error font-bold'> <li><Link to='/vendors/removevendor'>Remove Selected Vendor</Link></li></button>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Vendors;