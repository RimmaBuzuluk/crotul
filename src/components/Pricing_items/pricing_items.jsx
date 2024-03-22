import arrowImg from '../../img/clarity_arrow-line.png';
import './pricing_items.scss';

export const PricingItem = ({ item }) => {
	console.log();

	return (
		<div className='item'>
			<div className='item_img'>
				<img src={item.img} />
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
