import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Reporting = () => {

    const [product, setProducts] = useState([]);
    const [relode, setRelode] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/AVproduct`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setRelode(!relode)
            })

    }, [relode]);

    const data = [
        {
            name: product[0]?.product,
            TotalAmount: product[0]?.price * product[0]?.quantity
        },
        {
            name: product[1]?.product,
            TotalAmount: product[1]?.price * product[1]?.quantity
        },
        {
            name: product[2]?.product,
            TotalAmount: product[2]?.price * product[2]?.quantity
        },
        {
            name: product[3]?.product,
            TotalAmount: product[3]?.price * product[3]?.quantity
        },
        {
            name: product[4]?.product,
            TotalAmount: product[4]?.price * product[4]?.quantity
        },
        {
            name: product[5]?.product,
            TotalAmount: product[5]?.price * product[5]?.quantity
        },
        {
            name: product[6]?.product,
            TotalAmount: product[6]?.price * product[6]?.quantity
        },
        {
            name: product[6]?.product,
            TotalAmount: product[6]?.price * product[6]?.quantity
        },
        {
            name: product[7]?.product,
            TotalAmount: product[7]?.price * product[7]?.quantity
        },
        {
            name: product[8]?.product,
            TotalAmount: product[8]?.price * product[8]?.quantity
        },
        {
            name: product[9]?.product,
            TotalAmount: product[9]?.price * product[9]?.quantity
        },
        {
            name: product[10]?.product,
            TotalAmount: product[10]?.price * product[10]?.quantity
        },
        {
            name: product[11]?.product,
            TotalAmount: product[12]?.price * product[12]?.quantity
        },
        {
            name: product[13]?.product,
            TotalAmount: product[13]?.price * product[13]?.quantity
        },
        {
            name: product[14]?.product,
            TotalAmount: product[14]?.price * product[14]?.quantity
        },
        {
            name: product[15]?.product,
            TotalAmount: product[15]?.price * product[15]?.quantity
        },
        {
            name: product[16]?.product,
            TotalAmount: product[16]?.price * product[16]?.quantity
        },
    ];

    return (
        <div className='px-12 py-8'>

            <div className='mt-10'>
                <BarChart width={1200} height={450} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                    <Bar dataKey="TotalAmount" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Reporting;