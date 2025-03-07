import { CiTrophy } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { LiaBoxSolid } from "react-icons/lia";
import { PiCreditCardLight } from "react-icons/pi";

export default function Testimolasi () {
    return (
        <div className="flex justify-between mx-[210px] p-4 items-center border border-gray-400 rounded-md">
            <div className="flex gap-4 p-4 items-center">
                    <LiaBoxSolid className="text-4xl"/>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-bold">Fasted Delivery</p>
                    <p className="text-sm text-gray-600">Delivery 24/H</p>
                </div>
            </div>
            <div className="w-[1px] h-12 bg-gray-500/30"></div>
            <div className="flex gap-4 p-4 items-center">
                    <CiTrophy className="text-4xl"/>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-bold">24 HOURS RETURN</p>
                    <p className="text-sm text-gray-600">100%money-back guarantee</p>
                </div>
            </div>
            <div className="w-[1px] h-12 bg-gray-500/30"></div>
            <div className="flex gap-4 p-4 items-center">
                    <PiCreditCardLight className="text-4xl"/>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-bold">SECURE PAYMENT</p>
                    <p className="text-gray-600 text-sm">Your money is safe</p>
                </div>
            </div>
            <div className="w-[1px] h-12 bg-gray-500/30"></div>
            <div className="flex gap-4 p-4 items-center">
                    <FiHeadphones className="text-4xl"/>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-bold">SUPPORT 24/7</p>
                    <p className="text-sm text-gray-600">Live contact/message</p>
                </div>
            </div>
        </div>
    )
}