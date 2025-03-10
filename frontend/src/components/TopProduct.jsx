import { FaArrowRight, FaStar } from "react-icons/fa";
import Img from "../assets/img/TopProduct.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { products } from "../lib/data";

export default function TopProduct() {
  return (
    <div className="flex flex-col pt-[72px] px-[200px] gap-6">
      {/* title  & button*/}
      <div className="flex justify-between items-center">
        {/* titel left  */}
        <div className="flex items-center gap-6">
          <h4 className="font-bold text-2xl">Best Deals</h4>
          <div className="flex items-center gap-3">
            <p>Deals ends in</p>
            <p className="bg-yellow-300 py-2 px-[12px]">
              16d:21h:57m:23s
            </p>
          </div>
        </div>
        <button className="flex gap-2 items-center text-blue-400 font-bold">
          Browser All Product
          <FaArrowRight />
        </button>
      </div>
      {/* TopProduct */}
      <div className="flex w-[1480px]">
        <div className="p-6 border border-gray-200 w-fit flex flex-col justify-center gap-6">
          <div className="relative">
            <img src={Img} alt="" />
            <h1 className="py-2 px-4 bg-yellow-400 font-bold w-fit absolute left-1 top-[-30px]">32% OFF</h1>
            <h1 className="font-bold py-2 px-4 bg-red-500 rounded-sm text-white absolute w-fit left-1 top-4">HOT</h1>
          </div>
          {/* description  */}
          <div className="w-[275px] flex flex-col gap-3">
            {/* top  */}
            <div>
              {/* stars  */}
              <div className="flex gap-[2px] text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <p className="text-gray-500 text-sm">52.677</p>
              </div>
              <p>
                Xbox Series S - 512GB SSD Console with Wireless Controller - EU
                Versio...
              </p>
            </div>
            {/* mid  */}
            <div className="relative flex gap-[4px] font-bold">
              <p className="text-gray-400">$865.99</p>
              <div className="h-[2px] w-14 absolute bg-gray-400 top-3"></div>
              <p className="text-blue-400 ">$442.12</p>
            </div>
            {/* botom */}
            <div>
              <p className="text-gray-400 text-sm">
                Games built using the Xbox Series X|S development kit showcase
                unparalleled load times, visuals.
              </p>
            </div>
          </div>
          {/* button botom */}
          <div className="flex items-center gap-2">
            <a className="p-2 bg-orange-300/50 text-xl rounded-md" href="#">
              <IoIosHeartEmpty />
            </a>
            <button className="flex items-center py-2 px-4 rounded-md font-bold text-white gap-2 bg-orange-400">
              ADD TO CARD
              <FiShoppingCart />
            </button>
            <a className="p-2 bg-orange-300/50 text-xl rounded-sm" href="#">
              <IoEyeOutline />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-4 w-full">
          {/* map product  */}
          {
            products.map((data)=> (
              <div 
              key={data._id}
              className="w-[248px] p-4 border border-gray-200 relative">
                <div className="group">
                  <img className="object-cover w-full h-full" src={data.image} alt="" />
                  <div className="hidden group-hover:block cursor-pointer">
                    <div className="flex gap-3 bg-black/30 h-[188px] w-[216px] items-center justify-center absolute top-3 rounded-sm">
                      <IoIosHeartEmpty className="p-3 bg-white rounded-full hover:bg-orange-400 text-5xl" />
                      <FiShoppingCart className="py-3 pr-[3px] bg-white rounded-full hover:bg-orange-400 text-5xl"/>
                      <IoEyeOutline className="p-3 bg-white rounded-full hover:bg-orange-400 text-5xl"/>
                    </div>
                  </div>
                </div>
                <div className="font-semibold">
                  <h2>{data.name}</h2>
                  <p className="text-blue-400">${data.price}</p>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}
