import React, { useEffect, useState } from 'react';

const OwnersProduct = () => {
    const [product, setProducts] = useState([]);
    const [relode, setRelode] = useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/Ownproducts`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setRelode(!relode)
            })

    }, [relode]);
    return (
        <div className='grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-10 p-10'>
            {
                product.map(pd => <div key={pd._id}>
                    <div class="card card-side bg-base-100 shadow-xl p-4">
                        <figure><img className='w-24' src={pd.img} alt="Movie" /></figure>
                        <div class="card-body">
                            <h2 class="">Product: {pd.product}</h2>
                            <p>Price: BDT {pd.price}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default OwnersProduct;