import './App.scss';
import { Develop } from './components/develop/develop';
import { Pricing } from './components/pricing/pricing';

function App() {
	return (
		<div className='App'>
			<div className='header_block'></div>
			<div className='main_block'>
				<div className='develop_block'>
					<Develop />
				</div>
				<div className='pricing_block'>
					<Pricing />
				</div>
			</div>
		</div>
	);
}

export default App;
