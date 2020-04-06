import GuestBookEntry from './GuestBookEntry';
import { Action, Thunk, Computed } from 'easy-peasy';

export default interface GuestBookModel {
	entries: GuestBookEntry[];
	reverseEntries: Computed<GuestBookModel, GuestBookEntry[]>;
	setEntries: Action<GuestBookModel, GuestBookEntry[]>;
	addEntry: Action<GuestBookModel, GuestBookEntry>;
	createEntry: Thunk<GuestBookModel, GuestBookEntry>;
	getEntries: Thunk<GuestBookModel>;
}
