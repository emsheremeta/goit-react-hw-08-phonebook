import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Container from '@mui/material/Container';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        password: form.elements.password.value,
        email: form.elements.email.value,
      })
    );
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
