import { FaArrowRight } from "react-icons/fa";

export default function Subscribe () {
    return (
        <div className="flex flex-col justify-center items-center gap-8 py-[72px] px-[300px] bg-[#1B6392] text-white">
            <div className="flex flex-col gap-3 items-center text-center w-[536px]">
                <h1 className="text-2xl font-semibold">Subscribe to our newsletter</h1>
                <p className="text-gray-300">Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.</p>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white w-[624px] rounded-sm">
                <input 
                placeholder="Email address"
                type="text" 
                className="w-full py-3 pl-4"
                />
                <button className="flex items-center gap-2 px-6 bg-orange-400 font-bold py-[16px] rounded-sm">
                    Subcribe
                    <FaArrowRight />
                </button>
            </div>
            <hr className="w-96 opacity-50 h-1" />
        </div>
    )
}