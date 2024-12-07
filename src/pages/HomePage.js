import React from 'react'
import BlogList from '../components/BlogList'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Recent Blogs
      </Typography>
      <BlogList />
    </Container>
  )
}

export default HomePage

