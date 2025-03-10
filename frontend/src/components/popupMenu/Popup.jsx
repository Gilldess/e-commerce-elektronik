import { IoCloseOutline } from "react-icons/io5";
import Img1 from "../../assets/img/Image.png";
import Img2 from "../../assets/img/cctv.png";
import Img3 from "../../assets/img/Phone.png";
import Img4 from "../../assets/img/Phone1.png";
import { FaArrowRight } from "react-icons/fa";

const kategoriClick = [
  {
    id: 1,
    nama: "Computer & Laptop",
    link: "/",
  },
  {
    id: 2,
    nama: "Computer Accessories",
    link: "/",
  },
  {
    id: 3,
    nama: "SmartPhone",
    link: "/",
  },
  {
    id: 4,
    nama: "Headphone",
    link: "/",
  },
  {
    id: 5,
    nama: "Mobile Accessories",
    link: "/",
  },
  {
    id: 6,
    nama: "Gaming Console",
    link: "/",
  },
  {
    id: 7,
    nama: "Camera & Photo",
    link: "/",
  },
  {
    id: 8,
    nama: "TV & Homes Appliances",
    link: "/",
  },
  {
    id: 9,
    nama: "Watchs & Accessories",
    link: "/",
  },
  {
    id: 10,
    nama: "GPS & Navigation",
    link: "/",
  },
  {
    id: 11,
    nama: "Warable & Technology",
    link: "/",
  },
];
const dataClick = [
  {
    id: 1,
    nama: "All",
  },
  {
    id: 2,
    nama: "iPhone",
  },
  {
    id: 3,
    nama: "Samsung",
  },
  {
    id: 4,
    nama: "Realme",
  },
  {
    id: 5,
    nama: "Xiaomi",
  },
  {
    id: 6,
    nama: "Vivo",
  },
  {
    id: 7,
    nama: "OnePlus",
  },
  {
    id: 8,
    nama: "Huawei",
  },
  {
    id: 9,
    nama: "Infinix",
  },
  {
    id: 10,
    nama: "Oppo",
  },
  {
    id: 11,
    nama: "Tecno",
  },
];
const featuredClick = [
  {
    id: 1,
    name: "Samsung Electronics Samsung Galexy S21 5G",
    img: Img1,
    sell: "$160",
  },
  {
    id: 2,
    name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
    img: Img2,
    sell: "$1,500",
  },
  {
    id: 3,
    name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    img: Img3,
    sell: "$2,300",
  },
];

const Popup = ({ menuProduct, setMenuProduct }) => {
  return (
    <>
      {menuProduct && (
        <div>
          <div className="absolute z-50 py-4 top-[500PX] left-[450px] -translate-x-1/2 -translate-y-1/2 shadow-md border bg-white rounded-md duration-200 w-[300px] transition-all">
            {/* header  */}
            <div className="flex items-center justify-between px-4">
              <div>
                <h1>Kategori</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setMenuProduct(false)}
                />
              </div>
            </div>
            {/* kategori shop  */}
            <div className="mt-4 group relative cursor-pointer">
              {kategoriClick.map((data) => (
                <div className="py-2 hover:bg-gray-300 pl-4" key={data.id}>
                  <a href={data.link}>{data.nama}</a>
                </div>
              ))}
              <div className="absolute hidden left-[295px] top-[-60px] z-[9999] group-hover:block  p-4 shadow-none">
                <div className="flex gap-5 bg-white shadow-lg p-4 border rounded-md">
                  <div>
                    {/* list menu  */}
                    {dataClick.map((data) => (
                      <div
                        className="py-2 pl-4 hover:bg-gray-300 w-[164px]"
                        key={data.id}
                      >
                        <a href="#">{data.nama}</a>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 justify-center">
                    <h1 className="font-bold">FEATURED PHONES</h1>
                    {featuredClick.map((data) => (
                      <div
                        className="flex justify-center py-[18px] px-3 gap-3 border-dotted border-2 w-[312px] border-gray-300"
                        key={data.id}
                      >
                        <img src={data.img} alt="" />
                        <div className="flex flex-col gap-2 w-full font-semibold">
                          <p>{data.name}</p>
                          <p className="text-blue-400">{data.sell}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-yellow-500/40 w-[312px] flex flex-col items-center gap-6">
                    <div className="flex flex-col justify-center items-center text-gray-700 gap-3 p-8">
                      <img src={Img4} alt="" />
                      <div className="flex flex-col items-center w-full gap-2">
                        <p className="font-semibold text-3xl text-black">
                          21% Discount
                        </p>
                        <p>
                          Escape the noise, it's time to hear the magic with
                          Xiaomi Earbuds.
                        </p>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <p>Starting pice:</p>
                        <p className="text-black bg-white py-2 px-3 font-bold">
                          $99 USD
                        </p>
                      </div>
                    </div>
                    <button className="relative flex gap-2 items-center bg-orange-400 py-4 px-[70px] text-white font-bold">
                      SHOP NOW
                      <span>
                        <FaArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
