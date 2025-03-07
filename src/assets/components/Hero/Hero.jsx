import Slider from "react-slick";
import Img1 from "../img/ps.png";
import Img2 from "../img/ps.png";
import Img3 from "../img/ps.png";
import { FaArrowRight } from "react-icons/fa";
import Img4 from "../img/phone2.png";
import Img5 from "../img/tws.png"

const dataSlider = [
  {
    id: 1,
    text: "THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    deskription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem, ipsum dolor.",
    img: Img1,
    diskon: "$244",
  },
  {
    id: 2,
    text: "THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    deskription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem, ipsum dolor.",
    img: Img2,
    diskon: "$391",
  },
  {
    id: 3,
    text: "THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    deskription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem, ipsum dolor.",
    img: Img3,
    diskon: "$223",
  },
];

const Hero = () => {
  var settings = {
    dots: true,
    arrows: false,
    infintit: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="flex px-[300px] gap-6 py-6 justify-center items-center">
      <div className="bg-gray-100 px-14 py-14 flex items-center justify-center">
        <div className="container pb-2 w-[872px]">
          <Slider {...settings}>
            {dataSlider.map((data) => (
              <div key={data.id}>
                <div className="grid relative grid-cols-1 w-fit sm:grid-cols-2">
                  {/* text  */}
                  <div className="flex flex-col justify-center pt-12 sm:pt-0 text-center w-[356px] sm:text-left order-2 sm:order-1 relative z-10">
                    <p className="text-blue-500 text-xs font-bold pb-1 ">
                      {data.text}
                    </p>
                    <h1 className="text-4xl pb-4 font-bold">{data.title}</h1>
                    <p className="w-[356px] pb-6">{data.deskription}</p>
                    <button className="flex items-center gap-2 bg-orange-400 py-4 px-8 text-white font-bold border-none rounded-md w-fit">
                      SHOP NOW
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                  {/* img  */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img src={data.img} alt="" />
                    </div>
                  </div>
                  <div className="w-20 h-20 flex items-center font-bold justify-center text-white rounded-full bg-blue-400 absolute right-0">
                    <p>{data.diskon}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
        <div className="flex flex-col gap-6">
          <div className="flex relative rounded-md bg-black w-[424px] text-white">
            <div className="pl-[40px] py-[47px]">
              <p className="text-yellow-300 pb-[5px] ">SUMMER SALES</p>
              <h1 className="text-2xl font-bold pb-[18px]">New Google Pixel 6 Pro</h1>
              <button className="flex items-center font-bold text-sm gap-2 bg-orange-400 py-3 px-5 rounded-md">
                SHOP NOW
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
            <img className="pt-[47px]" src={Img4} alt="" />
            <div className="absolute text-black font-bold right-6 top-6 bg-yellow-400  py-2 px-4">
              <p>29% OFF</p>
            </div>
          </div>
          <div className="flex bg-gray-100 rounded-md py-11 justify-center items-center gap-5 w-[424px] text-black">
            <img src={Img5} alt="" />
            <div>
              <h3 className="font-bold pb-3 w-[100px]">Xiaomi FlipBuds Pro</h3>
              <p className="text-blue-500 font-semibold pb-5 ">$299 USD</p>
              <button className="flex items-center gap-2 bg-orange-400 py-3 px-5 font-bold text-white rounded-md">
                SHOP NOW
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
