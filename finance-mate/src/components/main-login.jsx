import React from 'react';
import { Button, TextField, FormControl, Grid, Box } from '@mui/material';

function LoginMain() {
  return (
    <Box
    //Can Add this to a CSS file
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <FormControl>
        <Box textAlign="center">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <TextField label="Username" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type="password" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                LOG IN
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Sign UP
              </Button>
            </Grid>
          </Grid>
        </Box>
      </FormControl>
    </Box>
  );
}

export default LoginMain;
