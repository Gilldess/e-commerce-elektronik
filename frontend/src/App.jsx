import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Testimolasi from './components/testimolasi/Testimolasi';
import Popup from './components/popupMenu/Popup';
import TopProduct from './components/TopProduct';
import Categori from './components/Categori';
import ProductBaner from './components/ProductBaner';
import LoginPopUp from './components/Navbar/LoginPopUp';
import Banner from './components/Banner';
import LatestNews from './components/LatestNews';
import Subscribe from './components/Subscribe';
import Footer from './components/footer';
import Copyrght from './components/copyrght';

const App = () => {
	const [menuProduct, setMenuProduct] = React.useState(false);
	const [showLogin, setShowLogin] = useState(false);
	const [category, setCategory] = useState("All")

	const handleMenuProduct = () => {
		setMenuProduct(!menuProduct);
	};
	return (
		<BrowserRouter>
			{showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
				<Navbar
					handleMenuProduct={handleMenuProduct}
					showLogin={showLogin}
					setShowLogin={setShowLogin}
				/>
				<Popup
					menuProduct={menuProduct}
					setMenuProduct={setMenuProduct}
				/>
				<Hero />
				<Testimolasi />
				<TopProduct />
				<Categori setCategory={setCategory} />
				<ProductBaner category={category} />
				<Banner />
				<LatestNews />
				<Subscribe />
				<Footer />
				<Copyrght />
		</BrowserRouter>
	);
};

export default App;
