import { FaStar } from "react-icons/fa";
import { products, ProductsSlider } from "../lib/data";

export default function ProductBaner ({category}) {
    return (
        <div className="flex gap-6 py-[72px] px-[300px] w-full">
            <div className="flex flex-col gap-6">
                {/* feature product  */}
                <div className="flex justify-between">
                    <h1>Featured Products</h1>
                    <div className="flex gap-4">
                        <div className="flex p-2">
                            <a href="">All Product</a>
                            <a href="">Smart Phone</a>
                            <a href="">Laptop</a>
                            <a href="">Headphone</a>
                            <a href="">TV</a>
                        </div>
                        <button>Browse All Product</button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                {
                    ProductsSlider.map((data)=> {
                        if (category === "All" || category === data.category) {
                            return (                    
                                <div className="w-[234px] h-[320px]">
                                    <div className="w-[202px] h-[172px]">
                                        <img 
                                        className="w-full"
                                        src={data.image} alt="" />
                                    </div>
                                    <div className="flex flex-col gap-2 w-fit">
                                        <div className="flex gap-[2px] text-yellow-500">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <p className="text-gray-500 text-sm">52.677</p>
                                        </div>
                                        <p>{data.name}</p>
                                        <p className="text-blue-400">${data.price}</p>
                                    </div>
                                </div>
                            )
                        }}
                    )
                }
                </div>
            </div>
        </div>
    )
}