import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { toast } from 'react-hot-toast';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    const form = e.target;
    const name = form.elements.name.value;
    const password = form.elements.password.value;
    const email = form.elements.email.value;
    dispatch(
      register({
        name: name,
        password: password,
        email: email,
      })
    );
    if (email.trim() === '') {
      toast.error('Empty registration form. Please register!');
    } else {
      toast.success('Registed succesfully!');
    }
    form.reset();
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            margin="normal"
            fullWidth
            id="filled-helperText"
            label="Username"
            type="text"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            required
            id="filled-required"
            label="Email"
            type="email"
            name="email"
          />
          <TextField
            margin="normal"
            fullWidth
            required
            id="filled-password-input"
            label="Password"
            type="password"
            name="password"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            type="submit"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
