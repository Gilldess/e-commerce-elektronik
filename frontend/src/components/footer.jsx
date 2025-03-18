import { FaArrowRight, FaGooglePlay } from "react-icons/fa"
import Icon from "../assets/Icon.png"
import { IoLogoApple } from "react-icons/io5";


export default function Footer () {
    const TopCategoryLink = [
        {
            di: 1,
            name: "Computer & Laptop",
            link: "/",
        },
        {
            di: 2,
            name: "SmartPhone",
            link: "/",
        },
        {
            di: 3,
            name: "Headphone",
            link: "/",
        },
        {
            di: 4,
            name: "Accessories",
            link: "/",
        },
        {
            di: 5,
            name: "Camera & Photo",
            link: "/",
        },
        {
            di: 6,
            name: "TV & Homes",
            link: "/",
        },
    ]
    const QuickLiks = [
        {
            id: 1,
            name: "Shop Product",
            link: "/",
        },
        {
            id: 2,
            name: "Shoping Cart",
            link: "/",
        },
        {
            id: 3,
            name: "Wishlist",
            link: "/",
        },
        {
            id: 4,
            name: "Compare",
            link: "/",
        },
        {
            id: 5,
            name: "Track Order",
            link: "/",
        },
        {
            id: 6,
            name: "Customer Help",
            link: "/",
        },
        {
            id: 7,
            name: "About Us",
            link: "/",
        },
    ]

    return (
        <div className="">
            <div className="flex py-[72px] border-b border-gray-200/30 gap-6 bg-black px-[260px]">
                <div className="flex flex-col gap-6 text-white">
                    <div className="flex items-center gap-2">
                        <img src={Icon} alt="" />
                        <h1 className="text-3xl font-bold">GIl-SP</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-400 text-sm">Customer Supports:</p>
                            <a 
                            className="text-xl"
                            href="#">629 555-0129</a>
                        </div>
                        <p className="text-gray-400 w-[248px]">4517 Washington Ave. Manchester, Kentucky 39495</p>
                        <a href="">info@kinbo.com</a>
                    </div>
                </div>
                {/* Top category  */}
                <div>
                    <h1 className="text-white font-bold pb-3">TOP CATEGORY</h1>
                    <div className="text-gray-400 pr-[46px]">
                        {
                            TopCategoryLink.map((data)=> (
                                <div key={data.id} className="py-[6px] relative group hover:text-white hover:pl-5">
                                    <a href={data.link}>{data.name}</a>
                                    <div className="bg-yellow-400 w-[14px] h-[2px] absolute top-[17px] left-0 hidden group-hover:block"></div>
                                </div>
                            ))
                        }
                        <button className="flex items-center gap-2 text-yellow-400">Browse All Product
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                {/* Quick Link  */}
                <div className="w-[200px]">
                    <h1 className="text-white font-bold pb-3">QUICK LINKS</h1>
                    <div className="text-gray-400">
                        {
                            QuickLiks.map((data)=> (
                                <div
                                className="py-[6px] relative group hover:text-white hover:pl-5"
                                key={data.id}
                                >
                                    <a href={data.link}>{data.name}</a>
                                    <div className="w-[14px] bg-yellow-400 h-[2px] absolute top-[17px] left-0 hidden group-hover:block"></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="text-white">
                    <h1 className="font-bold pb-[18px]">DOWNLOAD APP</h1>
                    <div className="flex flex-col gap-3 pr-6">
                        <div className="flex items-center bg-gray-200/20 gap-4 py-4 px-5 rounded-sm ">
                            <FaGooglePlay className="text-3xl"/>
                            <div>
                                <p className="text-sm">Get it now</p>
                                <h2 className="font-bold">Google play</h2>
                            </div>
                        </div>
                        <div className="flex gap-4 py-4 px-5 bg-gray-200/20 rounded-sm items-center">
                            <IoLogoApple className="text-3xl"/>
                            <div>
                                <p className="text-sm">Get it now</p>
                                <h2 className="font-bold">App Store</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* populer tag  */}
                <div className="text-white">
                    <h1>POPULAR TAG</h1>
                    <div>
                        <div className="flex w-[350px] flex-wrap gap-2">
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Game</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">iPhone</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">TV</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Asus Laptops</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Macbook</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">SSD</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Graphics Card</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Power Bank</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Smart TV</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Speaker</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Tablet</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Microwave</p>
                            <p className="border cursor-pointer border-gray-100/30 hover:border-white hover:bg-gray-200/20 rounded-[4px] py-[6px] px-3">Samsung</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}