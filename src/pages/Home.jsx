import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
export default function Home() {
  return (
    <Container component="div" maxWidth="m">
      <Box
        sx={{
          alignItems: 'center',
          marginTop: 8,
          marginLeft: 5,
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to phonebook...
          <ContactPhoneIcon
            sx={{
              fontSize: 30,
            }}
          />
        </Typography>
      </Box>
    </Container>
  );
}
