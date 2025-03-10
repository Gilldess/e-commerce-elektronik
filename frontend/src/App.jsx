import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Testimolasi from "./components/testimolasi/Testimolasi";
import Popup from "./components/popupMenu/Popup";
import TopProduct from "./components/TopProduct";
import Categori from "./components/Categori";

const App = () => {
  const [menuProduct, setMenuProduct] = React.useState(false);

  const handleMenuProduct = () => {
    setMenuProduct(!menuProduct);
  };
  return (
    <div>
      <Navbar handleMenuProduct={handleMenuProduct} />
      <Popup menuProduct={menuProduct} setMenuProduct={setMenuProduct} />
      <Hero />
      <Testimolasi />
      <TopProduct />
      <Categori />
    </div>
  );
};

export default App;
