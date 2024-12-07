import React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="white" align="center">
          © 2023 WriteSphere. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer

