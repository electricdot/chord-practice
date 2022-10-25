import { chords } from './chords.model';

test('All chords have fingering', () => {
	chords.forEach((chord) => {
		const fingers = chord.fingers;
		expect(fingers.length).toBeGreaterThanOrEqual(1);
	});
});

describe('All chords are 6 string + root', () => {
	chords.forEach((chord) => {
		const fingers = chord.fingers;

		fingers.forEach((finger) => {
			it(`${chord.name}: ${finger} has exactly 1 root`, () => {
				expect(finger.split('+').length).toBe(2);
			});
		});

		fingers.forEach((finger) => {
			it(`${chord.name}: ${finger} is 6-string`, () => {
				expect(finger.length).toBe(7);
			});
		});
	});
});
