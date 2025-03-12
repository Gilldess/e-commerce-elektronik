import Img from "../assets/img/smartwatch.png"
import Img1 from "../assets/img/digital.png"
import Img2 from "../assets/img/smartPhone.png"
import { BsPersonCircle } from "react-icons/bs"
import { MdOutlineDateRange } from "react-icons/md"
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"
import { FaArrowRight } from "react-icons/fa"

export default function LatestNews () {
    const latestdata = [
    {
        id: 1,
        image: Img,
        icondate: <MdOutlineDateRange />,
        textdate: "12 Nov,2024" ,
        iconeperson: <BsPersonCircle />,
        textperson: "agung" ,
        iconechat: <IoChatbubbleEllipsesOutline />,
        textchat: "230",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea voluptatibus maiores. Explicabo, alias magnam?",
        link: "/",
    },
    {
        id: 2,
        image: Img1,
        icondate: <MdOutlineDateRange />,
        textdate: "19 Jan,2025" ,
        iconeperson: <BsPersonCircle />,
        textperson: "bayu" ,
        iconechat: <IoChatbubbleEllipsesOutline />,
        textchat: "530",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea voluptatibus maiores. Explicabo, alias magnam?",
        link: "/",
    },
    {
        id: 3,
        image: Img2,
        icondate: <MdOutlineDateRange />,
        textdate: "25 Des,2024" ,
        iconeperson: <BsPersonCircle />,
        textperson: "nanda" ,
        iconechat: <IoChatbubbleEllipsesOutline />,
        textchat: "710",
        name: "Lorem ipsum, dolor sit amet consectetur adipisicing." ,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ea voluptatibus maiores. Explicabo, alias magnam?",
        link: "/",
    },
]
    return (
        <div className="bg-gray-100 px-[300px] py-[72px] flex flex-col items-center">
            <h1 className="text-3xl font-semibold pb-10">Latest News</h1>
            <div className="flex gap-6">
                {
                    latestdata.map((data)=> (
                        <div 
                        className="shadow-xl bg-white p-8 w-fit"
                        key={data.id}>
                            <div>
                                <img src={data.image} alt="" />
                            </div>
                            <div className="flex flex-col py-6 gap-3 w-[360px] text-gray-600">
                                <div className="flex text-orange-400 text-xl gap-2">
                                    <div className="flex items-center gap-1">
                                        <p>{data.iconeperson}</p>
                                        <p className="text-gray-600 text-sm">{data.textperson}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p>{data.icondate}</p>
                                        <p className="text-gray-700 text-sm">{data.textdate}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p>{data.iconechat}</p>
                                        <p className="text-gray-700 text-sm">{data.textchat}</p>
                                    </div>
                                </div>
                                <h2 className="font-bold text-black">{data.name}</h2>
                                <p>{data.description}</p>
                            </div>
                            <a 
                            className="flex gap-3 text-orange-400 py-[14px] px-6 border-2 w-fit border-orange-400/30 font-bold items-center"
                            href={data.link}>READ MORE
                                <FaArrowRight />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}