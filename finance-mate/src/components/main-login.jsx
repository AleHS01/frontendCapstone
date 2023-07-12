import React from 'react';
import { Button, TextField, Stack } from '@mui/material';

function LoginMain() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      spacing={2}
    >
      <h1>Finance Mate</h1>
      <TextField label="Username" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained" color="primary">
        LOG IN
      </Button>
      <Button variant="contained" color="primary">
        Sign UP
      </Button>
    </Stack>
  );
}

export default LoginMain;
