import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { toast } from 'react-hot-toast';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(
      logIn({
        password: password,
        email: email,
      })
    );
    if (email === '') {
      toast.error('Please, log in to proceed!');
    } else {
      toast.success('Log in successfully');
    }
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
            required
            margin="normal"
            fullWidth
            id="filled-required"
            label="Email"
            type="email"
            name="email"
            autoFocus
          />
          <TextField
            required
            margin="normal"
            fullWidth
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
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
