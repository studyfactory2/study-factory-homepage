import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const ContactForm = () => {
	return (
		<Stack component="form" className="contact-form" onSubmit={(event) => event.preventDefault()}>
			<TextField label="Name" name="name" fullWidth />
			<TextField label="Email" name="email" type="email" fullWidth />
			<TextField label="Message" name="message" multiline rows={5} fullWidth />
			<Button type="submit" variant="contained">
				Send message
			</Button>
		</Stack>
	);
};

export default ContactForm;
