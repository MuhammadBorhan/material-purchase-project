import React, { useState } from 'react';
import { toast } from 'react-toastify';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddVendor = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleAdded = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const referencef = event.target.referencef.value;
        const date = event.target.date.value;
        const company = event.target.company.value;
        const representive = event.target.representive.value;
        const price = event.target.price.value;

        const addItem = { name, email, address, phone, referencef, date, company, representive, price };

        const url = `http://localhost:5000/vendor`;
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
                <input type="text" name='name' placeholder="Vendor's Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='email' placeholder="Vendor's Email" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='address' placeholder="Vendor's Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='phone' placeholder="Vendor's Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='referencef' placeholder="Reference Code" className="input input-bordered w-full max-w-xs" />
                <input type="date" name='date' placeholder="Date" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='company' placeholder='Company Name' className="input input-bordered w-full max-w-xs" />
                <input type="text" name='representive' placeholder="Purphase Representive" className="input input-bordered w-full max-w-xs" />
                <input type="text" name='price' placeholder='Amount of Products' className="input input-bordered w-full max-w-xs" />
                <input type="submit" value='Add' className="btn input-bordered w-full max-w-xs" />
            </form>
        </div>
    );
};

export default AddVendor;