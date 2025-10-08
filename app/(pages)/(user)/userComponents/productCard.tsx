import Image from "next/image"
import { IoMdAdd } from "react-icons/io"

export default function ProductCard({product} : any) {

    console.log(product.name)

    return (
        <div
            key={product.pid}
            className="w-50 p-2 m-4 bg-gradient-to-br from-slate-300 via-slate-100 to-slate-200 outline-1 outline-amber-600 rounded-md"
        >
            <div>
            <img src={product.image_url} alt="" />
            </div>
            <div className="mt-2">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <p className="mt-1">Manufacturer: {product.manufacturer}</p>
            <h2 className="text-xl font-bold">₹{product.price}</h2>
            <div className="w-full flex flex-row justify-evenly">
                <button className="bg-green-400 w-full p-1 m-1">Buy</button>
                <button className="bg-green-200 w-full p-1 m-1 flex justify-center items-center text-2xl">
                <IoMdAdd />
                </button>
            </div>
            </div>
        </div>
    )
}