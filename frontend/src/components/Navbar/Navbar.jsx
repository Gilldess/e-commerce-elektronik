import { BsReddit } from "react-icons/bs";
import {
  FaArrowRight,
  FaCaretDown,
  FaFacebook,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiPhoneCall } from "react-icons/fi";
import Logo from "../../assets/Icon.png";
import { PiHeadphones, PiShoppingCartSimple } from "react-icons/pi";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoEyeOutline, IoSearch } from "react-icons/io5";
import Img1 from "../../assets/America.png";
import Img2 from "../../assets/Mandarin.jpg";
import Img3 from "../../assets/Rusia.png";
import { CiLocationOn } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
import PopupCategory from "../popupMenu/PopupCategory";

const DropdownLink = [
  {
    id: 1,
    item: Img1,
    name: "English",
    Link: "/#",
  },
  {
    id: 2,
    item: Img2,
    name: "Mandarin",
    Link: "/#",
  },
  {
    id: 3,
    item: Img3,
    name: "Rusian",
    Link: "/#",
  },
];
const DropdownMony = [
  {
    id: 1,
    name: "Dollar(USD)",
  },
  {
    id: 2,
    name: "Euro(EUR)",
  },
];

const Navbar = ({ handleMenuProduct }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#1B6392] text-white">
      {/* upper navbar  */}
      <div className="flex justify-between items-center px-[300px] py-[16px] border-b border-b-slate-200/50">
        <div>
          <p>Welcome to Clicon online eCommerce store</p>
        </div>
        {/* sosial media  and bahasa*/}
        <div className="flex justify-center items-center gap-6">
          <div className="flex items-center gap-[12px]">
            <p>Follow us:</p>
            <FaTwitter />
            <FaFacebook />
            <FaPinterestP />
            <BsReddit />
            <FaYoutube />
            <FiInstagram />
          </div>
          <div className="w-[0.5px] h-[25px] bg-white"></div>
          <div className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2" href="#">
              Eng
              <span>
                <FaCaretDown
                  className="transition-all
                    duration-200 group-hover:rotate-180"
                />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-gray-600 shadow-md">
              <ul>
                {DropdownLink.map((data) => (
                  <li
                    key={data.id}
                    className="flex items-center gap-3 w-full rounded-sm p-2
                                    hover:text-black hover:bg-gray-300"
                  >
                    <img className="rounded-full" src={data.item} alt="" />
                    <a href={data.Link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2" href="#">
              USD
              <span>
                <FaCaretDown
                  className="transition-all
                    duration-200 group-hover:rotate-180"
                />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownMony.map((data) => (
                  <li
                    key={data.id}
                    className="inline-block w-full rounded-sm p-2
                                        hover:bg-gray-100 hover:text-orange-500"
                  >
                    <p>{data.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* mid navbar  */}
      <div className="flex justify-between items-center px-[300px] py-[20px]">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="" />
          <h1 className="font-bold text-3xl">GIl-SP</h1>
        </div>
        <div className="relative group hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="w-[650px] sm:-w[500px] transition-all group-hover:w-[700px]
                duration-300 rounded-sm border border-gray-300 px-3 py-1 text-black"
          />
          <IoSearch className="text-gray-500 group-hover:text-black absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
        <div className="flex items-center gap-6 text-3xl cursor-pointer">
          <PiShoppingCartSimple />
          <IoIosHeartEmpty />
          <div className="group relative">
            <GoPerson />
            <div className="absolute z-[9999] hidden group-hover:block w-[424px] h-[444px] text-xl rounded-md bg-white p-8 right-0  text-black shadow-xl">
              <div className="flex flex-col justify-center gap-3 items-center">
                <p className="font-bold">Sing in to your account</p>
                <div className="flex flex-col w-full gap-5">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border border-black w-full h-[44px]"
                  />
                  <div className="flex justify-between text-sm font-semibold">
                    <label htmlFor="password">Password</label>
                    <a className="text-blue-400" href="#">
                      Forget password
                    </a>
                  </div>
                  <div className="relative group">
                    <input
                      type="password"
                      id="password"
                      className="border border-black w-full h-[44px]"
                    />
                    <a href="">
                      <IoEyeOutline className="absolute top-1/2 -translate-y-1/2 right-3" />
                    </a>
                  </div>
                  <div className="flex justify-center items-center h-[48px] gap-2 bg-orange-400 font-bold text-white">
                    <a href="">Login</a>
                    <FaArrowRight className="pt-1 text-2xl" />
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <div className="flex justify-center items-center gap-3">
                    <div className="h-[2px] w-20 bg-gray-300"></div>
                    <a href="#" className="text-gray-500 ">
                      Don&apos;t have account{" "}
                    </a>
                    <div className="h-[2px] w-20 bg-gray-300"></div>
                  </div>
                  <div className="border border-orange-400 flex justify-center items-center py-2 font-bold text-orange-400">
                    <button>CREATE ACCOUNT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar  */}
      <div className="bg-white text-black flex items-center justify-between py-4 px-[300px] shadow-md">
        <div className="flex gap-6 items-center text-gray-500">
          {/* menu search  */}
          <button
            onClick={() => handleMenuProduct()}
            className="flex items-center gap-[2px]  group relative cursor-pointer hover:text-black hover:bg-gray-200 py-[14px] px-6 rounded-sm"
          >
            All Category
            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
          </button>
          {/* introduction help  */}
          <div className="flex hover:text-black gap-[6px] items-center  hover:bg-gray-200 py-[14px] px-6 rounded-sm">
            <CiLocationOn className="text-2xl" />
            <button>Track Order</button>
          </div>
          <div className="flex gap-[6px] hover:text-black items-center hover:bg-gray-200 py-[14px] px-6 rounded-sm">
            <MdCompareArrows className="text-2xl" />
            <button>Compare</button>
          </div>
          <div className="flex gap-[6px] hover:text-black hover:bg-gray-200 items-center py-[14px] px-6 rounded-sm">
            <PiHeadphones className="text-2xl" />
            <button onClick={handleOpen}>Customer Support</button>
            {open && (
              <div>
                <PopupCategory handleOpen={handleOpen} open={open} />
              </div>
            )}
          </div>
          <div className="flex gap-[6px] hover:text-black hover:bg-gray-200 items-center py-[14px] px-6 rounded-sm">
            <CgDanger className="text-2xl" />
            <button>Need Help</button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FiPhoneCall className="text-2xl" />
          <h2>+1-202-555-0104</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
