import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from '../../hooks/index';
import { Card, CardContent, Typography } from '@material-ui/core';
import GuestBookEntryForm from '../GuestBookEntryForm/index';
import useStyles from './styles';

const Home: React.FC = () => {
	const reverseEntries = useStoreState(
		(state) => state.guestbook.reverseEntries
	);
	const classes = useStyles();
	const getEntries = useStoreActions((state) => state.guestbook.getEntries);

	useEffect(() => {
		getEntries();
	}, []);

	return (
		<div>
			<GuestBookEntryForm />
			{reverseEntries.map((entry) => (
				<Card key={entry.id} className={classes.entryCard}>
					<CardContent>
						<Typography variant="h2"> {entry.name}</Typography>
						<Typography variant="body1"> {entry.content}</Typography>
						<Typography variant="subtitle2">{entry.submitted}</Typography>
					</CardContent>
				</Card>
			))}
		</div>
	);
};
export default Home;
