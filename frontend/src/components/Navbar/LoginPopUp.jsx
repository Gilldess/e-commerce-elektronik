import { useContext, useState } from 'react';
import axios from 'axios';
import { IoEyeOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { ShopContext } from '../../context/ShopContext';

const LoginPopUp = ({setShowLogin}) => {
	const { url, setToken } = useContext(ShopContext);
	const [state, setState] = useState('Login');
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((data) => ({ ...data, [name]: value }));
	};

	const onLogin = async (event) => {
		event.preventDefault();
		let newUrl = url;
		if (state === 'Login') {
			newUrl += '/api/user/login';
		} else {
			newUrl += '/api/user/register';
		}
		const response = await axios.post(newUrl, data);
		if (response.data.success) {
			setToken(response.data.token);
			localStorage.setItem('token', response.data.token);
            setShowLogin(false)
		} else {
			alert(response.data.message);
		}
	};
	return (
		<div className='absolute z-[9999] w-[424px] text-xl rounded-md bg-white p-8 right-0 top-[150px] text-black shadow-xl'>
			<div className='flex flex-col justify-center gap-3 items-center'>
				<p className='font-bold'>
					{state === 'Sign Up'
						? 'Sign up to your account'
						: 'Sign in to your account'}
				</p>
				<form
					onSubmit={onLogin}
					className='flex flex-col w-full gap-5'
				>
					{state === 'Sign Up' && (
						<div className='flex flex-col gap-5'>
							<label
								htmlFor='name'
								className='text-sm font-semibold'
							>
								Name
							</label>
							<input
								onChange={onChangeHandler}
								value={data.name}
								name='name'
								type='text'
                                placeholder='Name'
								required
								className='border border-black w-full h-[44px] px-2'
							/>
						</div>
					)}
					<label
						htmlFor='email'
						className='text-sm font-semibold'
					>
						Email Address
					</label>
					<input
						onChange={onChangeHandler}
						value={data.email}
						name='email'
						type='email'
						placeholder='Email'
						required
						className='border border-black w-full h-[44px] px-2'
					/>
					<div className='flex justify-between text-sm font-semibold'>
						<label htmlFor='password'>Password</label>
						<a
							className='text-blue-400'
							href='#'
						>
							Forget password
						</a>
					</div>
					<div className='relative group'>
						<input
							onChange={onChangeHandler}
							value={data.password}
							name='password'
							type='password'
							placeholder='*******'
							required
							className='border border-black w-full h-[44px] px-2'
						/>
						<a href=''>
							<IoEyeOutline className='absolute top-1/2 -translate-y-1/2 right-3' />
						</a>
					</div>
					<button
						type='submit'
						className='flex justify-center items-center h-[48px] gap-2 bg-orange-400 font-bold text-white'
					>
						{state === 'Sign Up' ? 'Create an Account' : 'Login'}
						<FaArrowRight className='pt-1 text-2xl' />
					</button>
				</form>
				{state === 'Sign Up' ? (
					<div className='flex flex-col gap-3 justify-center'>
						<div className='flex justify-center items-center gap-3'>
							<div className='h-[2px] w-10 bg-gray-300'></div>
							<a
								href='#'
								className='text-gray-500 '
							>
								Already have an Account?{' '}
							</a>
							<div className='h-[2px] w-10 bg-gray-300'></div>
						</div>
						<div className='border border-orange-400 flex justify-center items-center py-2 font-bold text-orange-400'>
							<button onClick={() => setState('Login')}>SIGN IN</button>
						</div>
					</div>
				) : (
					<div className='flex flex-col gap-3 justify-center'>
						<div className='flex justify-center items-center gap-3'>
							<div className='h-[2px] w-20 bg-gray-300'></div>
							<a
								href='#'
								className='text-gray-500 '
							>
								Don&apos;t have account{' '}
							</a>
							<div className='h-[2px] w-20 bg-gray-300'></div>
						</div>
						<div className='border border-orange-400 flex justify-center items-center py-2 font-bold text-orange-400'>
							<button onClick={() => setState('Sign Up')}>
								CREATE ACCOUNT
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default LoginPopUp;
