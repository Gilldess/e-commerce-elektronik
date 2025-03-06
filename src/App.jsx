import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Navbar from "./assets/components/Navbar/Navbar"
import Popup from "./assets/components/popupMenu/Popup"
import Hero from "./assets/components/Hero/Hero";

const App = () => {
  const [menuProduct, setMenuProduct] = React.useState (false);
  
  const handleMenuProduct = () => {
    setMenuProduct (!menuProduct);
  }
  return (
    <div>
      <Navbar handleMenuProduct={handleMenuProduct}/>
      <Popup menuProduct={menuProduct} setMenuProduct={setMenuProduct}/>
      <Hero />
    </div>
  )
}

export default App