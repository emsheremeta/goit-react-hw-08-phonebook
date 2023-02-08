import * as React from 'react';
// import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const AuthNav = () => {
  console.log();
  const [value, setValue] = React.useState('REGISTER');
  const handleChange = e => {
    setValue(e.target.innerText);
  };

  React.useEffect(() => {
    window.location.href.endsWith('register')
      ? setValue('REGISTER')
      : setValue('LOG IN');
  }, []);
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs "
        >
          <Tab
            value="REGISTER"
            label="REGISTER"
            href="/goit-react-hw-08-phonebook/register"
            color="black"
            sx={{ minWidth: 250 }}
            fontSize="30px"
            onClick={handleChange}
          />
          <Tab
            value="LOG IN"
            label="LOG IN"
            href="/goit-react-hw-08-phonebook/login"
            color="black"
            sx={{ minWidth: 250 }}
            fontSize="30px"
          />
        </Tabs>
      </Box>
    </Box>
  );
};
