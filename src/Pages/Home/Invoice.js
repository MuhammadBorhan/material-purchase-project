import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Invoice = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    }
    const [invoices, setInvoices] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setInvoices(data);
            })
    }, [id]);
    return (
        <div className='m-12'>
            <div className='px-12 py-8 border-2'>
                <h1 className='text-xl font-bold text-lime-700'>Purchase Order</h1>
                <h3 className='text-2xl font-bold'>{invoices.referencef}</h3>
                <div className='flex justify-around'>
                    <div>
                        <div className="flex flex-col w-full lg:flex-row">
                            <div>
                                <div className="grid flex-grow h-12 font-bold text-xl card rounded-box place-items-center">Vendor</div>
                                <div className="grid flex-grow h-12 font-bold text-xl card rounded-box place-items-center">ID</div>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div>
                                <div className="grid flex-grow h-12 card text-purple-600 text-xl font-bold rounded-box place-items-center">{invoices.name}</div>
                                <div className="grid flex-grow h-12 card text-purple-600 text-xl font-bold rounded-box place-items-center">{invoices._id}</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col w-full lg:flex-row">
                            <div className="grid flex-grow h-12 card text-xl font-bold rounded-box place-items-center">Company</div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div className="grid flex-grow h-12 card text-xl font-bold text-blue-500 rounded-box place-items-center">{invoices.company}</div>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <Link to={`/invoice/${id}`}> <button className="btn btn-ghost btn-outline btn-info font-bold mr-2">Products</button></Link>
                    <Link to={`/invoice/${id}/invoiceaddproduct`}><button className="btn btn-ghost btn-outline btn-info font-bold mr-2">Add Products</button></Link>
                    {
                        user ? <button className="btn btn-ghost btn-outline btn-error font-bold" onClick={logout}>Logout</button> : <Link to={`/invoice/${id}/signin`}><button className="btn btn-ghost btn-outline btn-info font-bold ">Signin</button></Link>
                    }
                    {/* <Link to={`/invoice/${id}/register`}><button className="btn btn-ghost btn-outline btn-info ">Register</button></Link> */}



                </div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Invoice;