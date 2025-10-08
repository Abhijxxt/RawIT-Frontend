"use client"
import { useEffect, useState } from "react"
import ProductCard from "../userComponents/productCard";
import Link from "next/link";

export default function ProductsPage() {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await fetch("/api/products")
        const data = await response.json();
        setProducts(data);
    }
    
    const viewerInterestedCount = async (pid : any) => {
        const response = await fetch("/api/productViewCounter", {
            method: "POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                pid: pid
            })
        })
    } 

    useEffect(() => {
        fetchProducts();
    },[])
    
    return (
        <div className="w-full h-screen bg-white text-black flex flex-row">
            <div className="w-[15%] h-screen bg-slate-200">
                Filters
            </div>
            <div className="w-[85%] h-screem bg-white">
                {products && products.map((product : any) => <Link onClick={() => {viewerInterestedCount(product.pid)}} href={`/products/${product.pid}`}><ProductCard product={product}/></Link>)}
            </div>
        </div>
    )
}