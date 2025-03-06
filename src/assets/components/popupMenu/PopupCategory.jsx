// import { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";

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

const PopupCategory = ({ handleOpen, open }) => {
  return (
    <div>
      {open && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
            {/* header  */}
            <div className="flex items-center justify-between">
              <div>
                <h1>Kategori</h1>
              </div>
              <div>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={handleOpen}
                />
              </div>
            </div>
            {/* kategori shop  */}
            <div className="mt-4">
              {kategoriClick.map((data) => (
                <div key={data.id}>
                  <a href={data.link}>{data.nama}</a>
                </div>
              ))}
            </div>
            <div>
              <p>dmakkkanf</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupCategory;
