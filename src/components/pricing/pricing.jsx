import './pricing.scss';
import itemImg from '../../img/senior.png';
import { PricingItem } from '../Pricing_items/pricing_items';
import ItemArrowRight from '../../img/iconamoon_arrow-up-2-light.png';
import ItemArrowLeft from '../../img/iconamoon_arrow-up-2-light (1).png';
import { useState } from 'react';

export const Pricing = () => {
	const pricing = [
		{
			id: 1,
			img: itemImg,
			text: 'Developers with little work experience up to 2 years, that have just completed courses/training and are full of enthusiasm and energy to perform various tasks.',
			price: [1, 2],
		},
		{
			id: 2,
			img: itemImg,
			text: 'Developers with little work experience up to 2 years, that have just completed courses/training and are full of enthusiasm and energy to perform various tasks.',
			price: [1, 2],
		},
		{
			id: 3,
			img: itemImg,
			text: 'Developers with little work experience up to 2 years, that have just completed courses/training and are full of enthusiasm and energy to perform various tasks.',
			price: [1, 2],
		},
	];

	const [scrollPosition, setScrollPosition] = useState(0);

	const scrollLeft = () => {
		const newPosition = scrollPosition - 314; // Змінюйте значення зміщення, якщо потрібно
		setScrollPosition(newPosition < 0 ? 0 : newPosition);
	};

	const scrollRight = () => {
		const newPosition = scrollPosition + 314; // Змінюйте значення зміщення, якщо потрібно
		setScrollPosition(newPosition);
	};

	return (
		<div className='pricing'>
			<div className='pricing_title'>PRICING</div>
			<div className='pricing_text'>
				When it comes to financial services—be it insurance, wealth management, or lending—nothing can replace the personal touch.
				<br /> Telemarketing provides a direct channel of communication with potential clients, allowing financial advisors to answer questions, address concerns, and cultivate trust.
				<br /> When it comes to financial services—be it insurance, wealth management, or lending—nothing can replace the personal touch.
			</div>

			<div className='pricing_button'>
				<button onClick={scrollLeft}>
					<img src={ItemArrowLeft} />
				</button>
				<button onClick={scrollRight}>
					<img src={ItemArrowRight} />
				</button>
			</div>
			<div className='pricing_item'>
				<div style={{ display: 'flex', transform: `translateX(-${scrollPosition}px)`, transition: 'transform 0.3s ease' }}>
					{pricing.map(item => (
						<PricingItem key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
};
