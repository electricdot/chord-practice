import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChordDisplay } from '../components/ChordDisplay';

export const HomeContainer = observer(() => {
	return (
		<div className="home-container">
			<ChordDisplay />
		</div>
	);
});
