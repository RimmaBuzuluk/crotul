import './pricing.scss';
import itemImg from '../../img/senior.png';
import { PricingItem } from '../Pricing_items/pricing_items';

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
	return (
		<div className='pricing'>
			<div className='pricing_title'>PRICING</div>
			<div className='pricing_text'>
				When it comes to financial services—be it insurance, wealth management, or lending—nothing can replace the personal touch.
				<br /> Telemarketing provides a direct channel of communication with potential clients, allowing financial advisors to answer questions, address concerns, and cultivate trust.
				<br /> When it comes to financial services—be it insurance, wealth management, or lending—nothing can replace the personal touch.
			</div>
			<div className='pricing_item'>
				{pricing.map(item => (
					<PricingItem item={item} />
				))}
			</div>
		</div>
	);
};
