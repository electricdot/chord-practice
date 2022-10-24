import './assets/styles.scss';
import { HomeContainer } from './app/containers/HomeContainer';

const App: React.FC = () => {
	return (
		<div className="app">
			<HomeContainer />
		</div>
	);
};

export default App;
