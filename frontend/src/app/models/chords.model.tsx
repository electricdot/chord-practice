export const notes = ['C', 'C♯', 'D♭', 'D', 'D♯', 'E♭', 'E', 'F', 'F♯', 'G♭', 'G', 'G♯', 'A♭', 'A', 'A♯', 'B', 'B♭'];
export const chords = [
	{
		name: 'Maj',
		group: 'triads',
		fingers: ['+875xxx', 'x+320xx'],
	},
	{
		name: 'Min',
		group: 'triads',
		fingers: ['+865xxx', 'x+310xx'],
	},

	{
		name: 'Maj7',
		group: 'sevens',
		fingers: ['+8x998x', 'x+3545x'],
	},
	{
		name: 'Min7',
		group: 'sevens',
		fingers: ['+8x888x', 'x+3534x'],
	},
	{
		name: 'Dom7',
		group: '',
		fingers: ['+8x898x', 'x+3535x'],
	},
	{
		name: 'Min7(♭5)',
		group: '',
		fingers: ['+8x887x', 'x+3434x'],
	},

	{
		name: 'Dom7sus4',
		group: '',
		fingers: ['+7x797x', 'x+3536x'],
	},
	{
		name: '7(♯5)',
		group: '',
		fingers: ['+8x899x', 'x+3635x'],
	},
	{
		name: 'Dim7',
		group: '',
		fingers: ['+8x787x', 'x+3424x'],
	},
	{
		name: 'Maj6',
		group: '',
		fingers: ['+8x798x', 'x+3525x'],
	},

	{
		name: 'Min6',
		group: '',
		fingers: ['+8x788x', 'x+3524x'],
	},
	{
		name: 'Min9',
		group: '',
		fingers: ['+7x7779', 'x+3133x'],
	},
	{
		name: '9',
		group: '',
		fingers: ['+7x7879', 'x+3233x'],
	},
	{
		name: '7(♭9)',
		group: '',
		fingers: ['+8x8989', 'x+3232x'],
	},

	{
		name: '7(♯9)',
		group: '',
		fingers: ['+6x679x', 'x+3234x'],
	},
	{
		name: '13',
		group: '',
		fingers: ['+7x789x', 'x+32335'],
	},
	{
		name: 'Min/Maj7',
		group: '',
		fingers: ['+8x988x', 'x+3544x'],
	},
	{
		name: 'Maj7(♯5)',
		group: '',
		fingers: ['+8x999x', 'x+3645x'],
	},

	{
		name: 'Maj7(♭5)',
		group: '',
		fingers: ['+8x997x', 'x+3445x'],
	},
	{
		name: 'Min7(♯5)',
		group: '',
		fingers: ['+8x889x', 'x+3634x'],
	},
	{
		name: '7(♭5)',
		group: '',
		fingers: ['+8x897x', 'x+3435x'],
	},
	{
		name: 'Dim/Maj7',
		group: '',
		fingers: ['+8x987x', 'x+3444x'],
	},

	{
		name: 'Maj9',
		group: '',
		fingers: ['+8x978x', 'x+3243x'],
	},
	{
		name: 'Maj6/9',
		group: '',
		fingers: ['+8x778x', 'x+3223x'],
	},
	{
		name: 'Min9/Maj7',
		group: '',
		fingers: ['+7x8779', 'x+3143x'],
	},
	{
		name: '7(♭9 ♭13)',
		group: '',
		fingers: ['+8x8999', 'x+32324'],
	},

	{
		name: '13(♭9)',
		group: '',
		fingers: ['+7x7898', 'x+32325'],
	},
	{
		name: '7(♭9 ♭13)',
		group: '',
		fingers: ['+7x7889', 'x+32334'],
	},
];

export const getRandomChord = () => {
	return {
		note: notes[Math.floor(Math.random() * notes.length)],
		...chords[Math.floor(Math.random() * chords.length)],
	};
};

export interface IChord {
	note: string;
	name: string;
	group: string;
	fingers: string[];
}
