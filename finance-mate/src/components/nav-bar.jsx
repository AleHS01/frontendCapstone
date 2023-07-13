import React from 'react';
import { Toolbar, Button, Stack } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';

function NavBar() {
  const handleSignOut = () => {
    // Handle sign out logic here
  };

  return (
    <Toolbar direction="columns">
      <Stack spacing={3}>
        <Button variant="contained">SIGN OUT</Button>
        <Button>
          <AddCardIcon />
          Payment
        </Button>
      </Stack>
    </Toolbar>
  );
}

export default NavBar;
