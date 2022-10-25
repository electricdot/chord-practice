import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { getRandomChord, IChord } from '../models/chords.model';
import { ChordChart } from './ChordChart';

export const ChordDisplay = observer(() => {
	const [chord, setChord] = useState<IChord>();

	const updateChord = () => {
		const chord = getRandomChord();
		setChord(chord);
	};

	const keyHandler = (e: KeyboardEvent) => {
		if (e.code === 'Space') {
			updateChord();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyHandler, true);

		return () => {
			document.removeEventListener('keydown', keyHandler, true);
		};
	});

	if (!chord) {
		return (
			<>
				<div className="chord-display" onClick={updateChord}>
					<div className="inner">
						<span className="note">START</span>
					</div>
				</div>
				<div className="content">
					<p>Inspired by Tim Miller's Back to Basics course. </p>
					<p>Use this tool to memorise and practice chords, as well as learn the position of the notes on the fretboard.</p>
					<p>Press space or click to load the next random chord.</p>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="chord-display" onClick={updateChord}>
				<div className="inner">
					<span className="note">{chord.note}</span>
					<span className="sign">{chord.sign}</span>
					<span className="name">{chord.name}</span>
				</div>
			</div>

			<div className="fingerings">
				{chord.fingers.map((f) => (
					<ChordChart key={'chord-' + f} chord={f} />
				))}
			</div>
		</>
	);
});
