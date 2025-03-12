import { FaArrowRight, FaStar } from "react-icons/fa";
import { ProductsSlider } from "../lib/data";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

export default function ProductBaner ({category}) {
    return (
        <div className="flex gap-6 py-[72px] px-[200px] w-full">
            <div className="flex flex-col gap-6">
                {/* feature product  */}
                <div className="flex justify-between">
                    <h1 className="text-2xl font-semibold">Featured Products</h1>
                    <div className="flex gap-4">
                        <div className="flex text-gray-500">
                            <a 
                            className="p-2 hover:text-black hover:font-semibold hover:border-b-2 border-orange-400"
                            href="">All Product</a>
                            <a 
                            className="p-2 hover:text-black hover:font-semibold hover:border-b-2 border-orange-400"
                            href="">Smart Phone</a>
                            <a 
                            className="p-2 hover:text-black hover:font-semibold hover:border-b-2 border-orange-400"
                            href="">Laptop</a>
                            <a 
                            className="p-2 hover:text-black hover:font-semibold hover:border-b-2 border-orange-400"
                            href="">Headphone</a>
                            <a 
                            className="p-2 hover:text-black hover:font-semibold hover:border-b-2 border-orange-400"
                            href="">TV</a>
                        </div>
                        <button className="font-bold text-orange-400 flex gap-2 items-center">Browse All Product
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-[23px]">
                {
                    ProductsSlider.map((data)=> {
                        if (category === "All" || category === data.category) {
                            return (                    
                                <div key={data._id} className=" flex flex-col justify-between border border-gray-200 rounded-md hover:shadow-xl hover:border-gray-300 px-2 cursor-pointer">
                                    <div className="flex flex-col gap-1 w-[202px] h-[270px]">
                                        <div className="w-[202px] group relative">
                                            <img 
                                            className="w-full"
                                            src={data.image} alt="" />
                                            <div className="hidden group-hover:block">
                                                <div className="flex gap-3 bg-black/30 h-[172px] w-full absolute top-[6px] items-center justify-center text-5xl rounded-sm">
                                                    <IoIosHeartEmpty className="p-3 bg-white rounded-full hover:text-white hover:bg-orange-400" />
                                                    <FiShoppingCart className="py-3 pr-1 bg-white rounded-full hover:text-white hover:bg-orange-400"/>
                                                    <IoEyeOutline className="p-3 bg-white rounded-full hover:text-white hover:bg-orange-400 "/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[2px] text-yellow-500">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <p className="text-gray-500 text-sm">52.677</p>
                                        </div>
                                        <p>{data.name}</p>
                                    </div>
                                    <div>
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