"use client"
// import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';

export default function ProductDescriptionPage(promise: { params: Promise<{ product: string }> }) {
    
    const { product } = React.use(promise.params);

    const [productData, setProductData] : any = useState(null);

    const fetchProduct = async () => {
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                pid: product
            })
        })
        if(response.status !== 200) {
            alert("Error fetching product");
            return;
        }
        const data = await response.json();
        setProductData(data[0]);
    }
    // console.log(productData)
    useEffect(() => {
        fetchProduct();
    }, [])
    return (
        <div className='w-full h-screen bg-white text-black p-4 px-10'>
            <h1 className='text-2xl font-bold'>{productData && productData.name}</h1>
            <div className='w-full h-[50%] bg-slate-100 flex flex-row justify-between mt-4'>
                <div className='w-[50%] flex justify-center items-center'>
                    <img src={productData?.image_url} alt="" width={400} />
                </div>
                <div className='w-[50%] p-4'>
                    <h1>Product name: {productData?.name}</h1>
                    <p>Product description:<br/>{productData?.description}</p>
                    <p className='mb-2 pb-2 border-b-2 border-b-amber-700'>Product manufacturer: {productData?.manufacturer}</p>
                    
                    <p>Vendor: {productData?.vendor_name}</p>
                    <p>Vendor contact number: {productData?.phone}</p>
                    <p>Vendor address: {productData?.address}</p>

                    <h2 className='text-2xl font-bold mt-4'>Price: {productData?.price}</h2>
                    <div>
                        <button className='bg-amber-500 p-2 px-4 mr-2 mt-2'>Buy</button>
                        <button className='bg-amber-300 p-2 px-4 mr-2'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}