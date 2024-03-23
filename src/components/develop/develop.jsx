import girleImg from '../../img/profile-shot-of-aristocratic-girl-in-blouse-with-frill-lady-with-flowers-in-her-hair-posing-proudly-against-blue-wall 5.png';
import videoImg from '../../img/front-view-colleague-at-work-looking-at-laptop 1.png';
import star from '../../img/Vector (1).png';

import arrow from '../../img/Vector.png';
import videoPlayImg from '../../img/Vector2.png';
import phoneVideoPlayImg from '../../img/Polygon 1.png';

import './develop.scss';

export const Develop = () => {
	const girlsImgCount = 5;
	const starImgCount = 5;

	const screenWidth = window.innerWidth;

	return (
		<div className='develop'>
			<div className='develop_information'>
				<div className='develop_title'>We develop anything what you desire</div>
				<div className='develop_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est mi, feugiat id velit vel, pharetra rhoncus tellus. </div>
				<div className='develop_videoPhone'>
					<img className='develop_video_imgPhone' src={videoImg} alt='' />
					<div className='circlePhone'></div>
					<img className='develop_video_playPhone' src={phoneVideoPlayImg} />
				</div>

				<div className='develop_button'>
					<button>
						<div className='button_text'>GET A FREE QUOTE</div>
						<img src={arrow} />
					</button>
				</div>

				<div className='develop_rated'>
					<div className='develop_rated_text'>Rated</div>
					{Array.from({ length: starImgCount }, (_, index) => (
						<img key={index} src={star} alt={`Star ${index + 1}`} className='rated-image' />
					))}
				</div>
				<div className='develop_girle'>
					{Array.from({ length: girlsImgCount }, (_, index) => (
						<img key={index} src={girleImg} alt={`Girl ${index + 1}`} className='girl-image' />
					))}
				</div>
			</div>
			<div className='develop_video'>
				<img className='develop_video_img' src={videoImg} alt='' />
				<div className='circle'></div>
				<img className='develop_video_play' src={videoPlayImg} />
			</div>
		</div>
	);
};
