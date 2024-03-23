import arrowImg from '../../img/clarity_arrow-line.png';
import './pricing_items.scss';
import backgroundImg2 from '../../img/senior.png';
import backgroundImg1 from '../../img/Frame 118.png';

export const PricingItem = ({ item }) => {
	const screenWidth = window.innerWidth;

	return (
		<div className='item'>
			<div className='item_img'>
				<img src={screenWidth < 430 ? backgroundImg1 : backgroundImg2} />
			</div>
			<div className='item_price'>
				<b>${item.price[0]}</b> to <b>${item.price[1]}</b> /hour
			</div>
			<div className='item_text'>{item.text}</div>
			<div className='item_button'>
				<div className='item_button_text'>Hire now</div>
				<img src={arrowImg} />
			</div>
		</div>
	);
};
