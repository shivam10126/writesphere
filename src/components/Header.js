import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WriteSphere
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            View Blogs
          </Button>
          <Button color="inherit" component={RouterLink} to="/add">
            Add Blog
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

