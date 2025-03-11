import { categories } from '../lib/data';
import Slider from 'react-slick';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'black',
				borderRadius: '100%',
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'black',
				borderRadius: '100%',
			}}
			onClick={onClick}
		/>
	);
}

export default function Categori({setCategory}) {
	var settings = {
		dots: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		infinity: true,
		speed: 500,
		slidesToScroll: 1,
		autoPlay: true,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		pauseOnHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 1,
					infinity: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlides: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className='flex flex-col px-[180px] text-center my-[72px]'>
			<h1 className='text-3xl font-bold'>Shop wiht Categorys</h1>
			<div>
				<Slider {...settings}>
					{categories.map((data) => (
						<div
							
							className='my-6'
							key={data.name}
						>
							<div onClick={() =>
								setCategory((prev) => (prev === data.name ? 'All' : data.name))
							} className='flex flex-col relative gap-4 shadow-lg py-8 px-6 mx-4 rounded-md border border-gray-200 cursor-pointer'>
								<div>
									<img
										src={data.image}
										alt=''
									/>
								</div>
								<h1 className='font-bold '>{data.name}</h1>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
}
