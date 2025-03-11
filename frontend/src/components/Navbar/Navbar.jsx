import { BsReddit } from 'react-icons/bs';
import {
	FaCaretDown,
	FaFacebook,
	FaPinterestP,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { FiInstagram, FiPackage, FiPhoneCall } from 'react-icons/fi';
import Logo from '../../assets/Icon.png';
import { PiHeadphones, PiShoppingCartSimple } from 'react-icons/pi';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import Img1 from '../../assets/America.png';
import Img2 from '../../assets/Mandarin.jpg';
import Img3 from '../../assets/Rusia.png';
import { CiLocationOn } from 'react-icons/ci';
import { MdCompareArrows } from 'react-icons/md';
import { CgDanger } from 'react-icons/cg';
import { useContext, useState } from 'react';
import PopupCategory from '../popupMenu/PopupCategory';
import { FaCircleUser } from 'react-icons/fa6';
import { TbLogout } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import LoginPopUp from './LoginPopUp';
import { ShopContext } from '../../context/ShopContext';

const DropdownLink = [
	{
		id: 1,
		item: Img1,
		name: 'English',
		Link: '/#',
	},
	{
		id: 2,
		item: Img2,
		name: 'Mandarin',
		Link: '/#',
	},
	{
		id: 3,
		item: Img3,
		name: 'Rusian',
		Link: '/#',
	},
];
const DropdownMony = [
	{
		id: 1,
		name: 'Dollar(USD)',
	},
	{
		id: 2,
		name: 'Euro(EUR)',
	},
];

const Navbar = ({ handleMenuProduct, showLogin, setShowLogin }) => {
	const { token, setToken } = useContext(ShopContext);
  const [open, setOpen] = useState(false);
	
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('token');
		setToken('');
		navigate('/');
	};

  const handleLogin = () => {
    setShowLogin(!showLogin)
  }
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<div className='bg-[#1B6392] text-white'>
			{/* upper navbar  */}
			<div className='flex justify-between items-center px-[300px] py-[16px] border-b border-b-slate-200/50'>
				<div>
					<p>Welcome to Clicon online eCommerce store</p>
				</div>
				{/* sosial media  and bahasa*/}
				<div className='flex justify-center items-center gap-6'>
					<div className='flex items-center gap-[12px]'>
						<p>Follow us:</p>
						<FaTwitter />
						<FaFacebook />
						<FaPinterestP />
						<BsReddit />
						<FaYoutube />
						<FiInstagram />
					</div>
					<div className='w-[0.5px] h-[25px] bg-white'></div>
					<div className='group relative cursor-pointer'>
						<a
							className='flex items-center gap-[2px] py-2'
							href='#'
						>
							Eng
							<span>
								<FaCaretDown
									className='transition-all
                    duration-200 group-hover:rotate-180'
								/>
							</span>
						</a>
						<div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-gray-600 shadow-md'>
							<ul>
								{DropdownLink.map((data) => (
									<li
										key={data.id}
										className='flex items-center gap-3 w-full rounded-sm p-2
                                    hover:text-black hover:bg-gray-300'
									>
										<img
											className='rounded-full'
											src={data.item}
											alt=''
										/>
										<a href={data.Link}>{data.name}</a>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className='group relative cursor-pointer'>
						<a
							className='flex items-center gap-[2px] py-2'
							href='#'
						>
							USD
							<span>
								<FaCaretDown
									className='transition-all
                    duration-200 group-hover:rotate-180'
								/>
							</span>
						</a>
						<div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
							<ul>
								{DropdownMony.map((data) => (
									<li
										key={data.id}
										className='inline-block w-full rounded-sm p-2
                                        hover:bg-gray-100 hover:text-orange-500'
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
			<div className='flex justify-between items-center px-[300px] py-[20px]'>
				<div className='flex items-center gap-2'>
					<img
						src={Logo}
						alt=''
					/>
					<h1 className='font-bold text-3xl'>GIl-SP</h1>
				</div>
				<div className='relative group hidden sm:block'>
					<input
						type='text'
						placeholder='Search'
						className='w-[650px] sm:-w[500px] transition-all group-hover:w-[700px]
                duration-300 rounded-sm border border-gray-300 px-3 py-1 text-black'
					/>
					<IoSearch className='text-gray-500 group-hover:text-black absolute top-1/2 -translate-y-1/2 right-3' />
				</div>
				<div className='flex items-center gap-6 text-3xl cursor-pointer'>
					<PiShoppingCartSimple />
					<IoIosHeartEmpty />
					{!token ? (
						<button
							onClick={handleLogin}
							className='btn-outline rounded-full'
						>
							<GoPerson />
						</button>
					) : (
						<div className='group relative'>
							<FaCircleUser className='text-2xl' />
							<ul className='bg-blue-600 shadow-sm p-3 w-fit ring-1 ring-slate-900/15 rounded absolute right-0 group-hover:flex flex-col hidden'>
								<li
									onClick={() => navigate('/myorders')}
									className='flex items-center gap-x-2 cursor-pointer'
								>
									<FiPackage className='text-[19px]' />
									<p>Orders</p>
								</li>
								<hr className='my-2' />
								<li
									onClick={logout}
									className='flex items-center gap-x-2 cursor-pointer'
								>
									<TbLogout className='text-[19px]' />
									<p>Logout</p>
								</li>
							</ul>
						</div>
					)}
				</div>
			</div>
			{/* lower navbar  */}
			<div className='bg-white text-black flex items-center justify-between py-4 px-[300px] shadow-md'>
				<div className='flex gap-6 items-center text-gray-500'>
					{/* menu search  */}
					<button
						onClick={() => handleMenuProduct()}
						className='flex items-center gap-[2px]  group relative cursor-pointer hover:text-black hover:bg-gray-200 py-[14px] px-6 rounded-sm'
					>
						All Category
						<FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
					</button>
					{/* introduction help  */}
					<div className='flex hover:text-black gap-[6px] items-center  hover:bg-gray-200 py-[14px] px-6 rounded-sm'>
						<CiLocationOn className='text-2xl' />
						<button>Track Order</button>
					</div>
					<div className='flex gap-[6px] hover:text-black items-center hover:bg-gray-200 py-[14px] px-6 rounded-sm'>
						<MdCompareArrows className='text-2xl' />
						<button>Compare</button>
					</div>
					<div className='flex gap-[6px] hover:text-black hover:bg-gray-200 items-center py-[14px] px-6 rounded-sm'>
						<PiHeadphones className='text-2xl' />
						<button onClick={handleOpen}>Customer Support</button>
						{open && (
							<div>
								<PopupCategory
									handleOpen={handleOpen}
									open={open}
								/>
							</div>
						)}
					</div>
					<div className='flex gap-[6px] hover:text-black hover:bg-gray-200 items-center py-[14px] px-6 rounded-sm'>
						<CgDanger className='text-2xl' />
						<button>Need Help</button>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<FiPhoneCall className='text-2xl' />
					<h2>+1-202-555-0104</h2>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
