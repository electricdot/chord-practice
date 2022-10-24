import React from 'react';
import { observer } from 'mobx-react-lite';

interface IChordChart {
	chord: string;
}

interface IPosition {
	x: number;
	y: number;
	isRoot?: boolean;
}

export const getFretAmount = (finger: string) => {
	const range: number[] = [];
	const fingerArr = Array.from(finger);
	fingerArr.forEach((f) => {
		if (!isNaN(parseInt(f))) {
			range.push(parseInt(f));
		}
	});

	const fretCount = Math.max(...range) - Math.min(...range) + 1;
	return fretCount > 4 ? fretCount : 4;
};

export const getFretPositions = (finger: string) => {
	const stringSpacing = 20;
	const fret = 30;
	const fretOffset = 15;

	const fingerArr = Array.from(finger);
	let ret: IPosition[] = [];
	const range: number[] = [];

	fingerArr.forEach((f) => {
		if (!isNaN(parseInt(f))) {
			range.push(parseInt(f));
		}
	});

	const min = Math.min(...range);
	const max = Math.max(...range);

	let posMod = -min;
	// if (min > 1) {
	// 	posMod = 1 - min;
	// }
	// if (max > 3) {
	// 	posMod = 3 - max;
	// }
	// if (max - min === 4) {
	// 	posMod = -min;
	// }
	// if (max - min === 3) {
	// 	posMod = -min;
	// }

	if (max - min <= 2) {
		posMod = 1 - min;
	}

	let string = 0;
	fingerArr.forEach((f, i) => {
		if (f === '+') {
			return;
		}

		if (isNaN(parseInt(f))) {
			string++;
			return;
		}

		const x = string * stringSpacing;
		const y = (parseInt(f) + posMod) * fret + fretOffset;

		const isRoot = fingerArr[i - 1] === '+';
		string++;

		ret.push({ x, y, isRoot });
	});

	return ret;
};

export const ChordChart = observer((props: IChordChart) => {
	const { chord } = props;
	const pos = getFretPositions(chord);
	const frets = getFretAmount(chord);

	const stringSpacing = 20;
	const fretSpacing = 30;
	const strings = 6;
	const width = (strings - 1) * stringSpacing;
	const height = frets * fretSpacing;
	const padding = 30;

	return (
		<div className="fingering" key={chord}>
			<svg width={width} height={height} viewBox={`-${padding} -${padding} ${width + padding * 2} ${height + padding * 2}`} fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="1" y1="1" x2="0.999995" y2={height} stroke="#6A6A6A" strokeWidth="2" />
				<line x1="20.75" y1="1" x2="20.75" y2={height} stroke="#6A6A6A" strokeWidth="1.5" />
				<line x1="40.625" y1="1" x2="40.625" y2={height} stroke="#6A6A6A" strokeWidth="1.25" />
				<line x1="60.5" y1="1" x2="60.5" y2={height} stroke="#6A6A6A" />
				<line x1="80.4" y1="1" x2="80.4" y2={height} stroke="#6A6A6A" strokeWidth="0.8" />
				<line x1="100.25" y1="1" x2="100.25" y2={height} stroke="#6A6A6A" strokeWidth="0.5" />

				{/* frets */}
				<line y1={0} y2={0} x1={0} x2={width} stroke="black" strokeWidth="1" />
				{[...Array(frets)].map((f, i) => {
					const y = fretSpacing * (i + 1);
					return <line key={`l${i}`} y1={y} y2={y} x1={0} x2={width} stroke="black" strokeWidth="1" />;
				})}

				{pos.map((p, i) => (
					<circle key={'c' + i} cx={p.x} cy={p.y} r={10} fill={p.isRoot ? '#6b447e' : 'black'} />
				))}
			</svg>
		</div>
	);
});
