import { FaArrowRight } from "react-icons/fa";
import Img from "../assets/img/laptop.png"

export default function Banner () {
    return (
        <div className="px-[241px] pb-[72px]">
            <div className="flex justify-between items-center rounded-sm bg-[#FFE7D6]">
                <div className="flex flex-col gap-[22px] px-[72px] py-[80px] w-[424px]">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-bold text-white py-[6px] px-3 bg-blue-400 w-fit rounded-sm">SAVE UP TO $200.00</p>
                        <h1 className="text-4xl font-bold">Macbook Pro</h1>
                    </div>
                    <p className="text-lg font-semibold text-gray-800">Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
                    <button className="flex justify-center items-center gap-4 font-bold w-fit py-4 px-8 bg-orange-400 text-white text-xl rounded-sm">SHOP NOW
                        <FaArrowRight />
                    </button>
                </div>
                <div className="relative px-[46px]">
                    <img src={Img} alt="" />
                    <p className="absolute top-8 py-[41px] px-[30px] border-8 font-bold border-white bg-[#ffcdb9] rounded-full w-fit">$1999</p>
                </div>
            </div>
        </div>
    )
}