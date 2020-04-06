import GuestBookModel from '../interfaces/GuestBookModel';

import { action, thunk, computed } from 'easy-peasy';

const GuestBook: GuestBookModel = {
	entries: [],
	reverseEntries: computed((state) => state.entries.slice().reverse()),
	setEntries: action((state, entries) => {
		state.entries = entries;
	}),
	addEntry: action((state, entry) => {
		state.entries.push(entry);
	}),
	createEntry: thunk(async (state, entry) => {
		const response = await fetch('http://localhost:5454/entries', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(entry),
		});
		const result = await response.json();
		state.addEntry(result);
	}),
	getEntries: thunk(async (state) => {
		const response = await fetch('http://localhost:5454/entries');
		const entries = await response.json();
		state.setEntries(entries);
	}),
};

export default GuestBook;

// {
// 	id: Date.now(),
// 	name: 'CJ',
// 	content: 'Hello World',
// 	submitted: new Date(),
// },

// addEntry: action((state, entry) => {
// 	entry.id = Date.now();
// 	entry.submitted = new Date();
// 	state.entries.unshift(entry);
// }),
