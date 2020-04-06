import React from 'react';

import TextField from '@material-ui/core/TextField';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { useForm } from 'react-hook-form';
import GuestBookEntry from '../../interfaces/GuestBookEntry';
import { useStoreActions } from '../../hooks/index';

import * as yup from 'yup';

const GuestBookEntrySchema = yup.object().shape({
	name: yup.string().trim().required('Required'),
	content: yup
		.string()
		.trim()
		.min(10, 'Must be at least 10 characters')
		.max(200, 'Can be no longer than 200 characters')
		.required(),
});

const GuestBookEntryForm: React.FC = () => {
	const classes = useStyles();
	const createEntry = useStoreActions((state) => state.guestbook.createEntry);
	const { register, handleSubmit, errors, reset } = useForm<GuestBookEntry>({
		validationSchema: GuestBookEntrySchema,
	});

	const onSubmit = (data: GuestBookEntry): void => {
		createEntry(data);
		reset();
	};
	return (
		<form
			noValidate
			className={classes.formContainer}
			onSubmit={handleSubmit(onSubmit)}
		>
			<TextField
				inputRef={register}
				label="name"
				name="name"
				fullWidth
				variant="outlined"
				error={!!errors.name}
				helperText={errors.name ? errors.name.message : ''}
			/>
			<TextField
				inputRef={register}
				multiline
				rows={3}
				label="Content"
				name="content"
				fullWidth
				variant="outlined"
				error={!!errors.content}
				helperText={errors.content ? errors.content.message : ''}
			/>
			<Box display="flex" justifyContent="flex-end">
				<Button type="submit" color="primary" variant="contained">
					Add Entry
				</Button>
			</Box>
		</form>
	);
};

export default GuestBookEntryForm;
