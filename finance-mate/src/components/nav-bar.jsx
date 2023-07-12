import React from 'react'
import { Box, IconButton, Toolbar,Typography,Button, Stack } from '@mui/material'
import {} from "@mui/icons-material"
import AddCardIcon from '@mui/icons-material/AddCard';

function NavBar() {
  return (

    <Toolbar direction="columns">

      <Stack spacing={3}>
  
      <Button variant="contained">SIGN OUT</Button>
      <Button ><AddCardIcon></AddCardIcon>Payment</Button>
      </Stack>

    </Toolbar>
      

  )
}

export default NavBar