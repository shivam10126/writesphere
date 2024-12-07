import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { Typography, Card, CardContent, Box, Avatar, Grid, IconButton, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PersonIcon from '@mui/icons-material/Person'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import RelatedBlogs from './RelatedBlogs'
import CommentSection from './CommentSection'
import { likeBlog, dislikeBlog } from '../store/blogSlice'

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}))

const BlogDetail = () => {
  const { blogId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const blogs = useSelector((state) => state.blog.blogs)
  const userInteractions = useSelector((state) => state.blog.userInteractions)
  const currentBlog = blogs.find(blog => blog.id === blogId)

  if (!currentBlog) {
    return <Navigate to="/" />
  }

  const handleLike = () => {
    dispatch(likeBlog(currentBlog.id))
  }

  const handleDislike = () => {
    dispatch(dislikeBlog(currentBlog.id))
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  const userLiked = userInteractions.blogLikes[currentBlog.id]
  const userDisliked = userInteractions.blogDislikes[currentBlog.id]

  return (
    <>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
        sx={{ mb: 2 }}
      >
        Go Back
      </Button>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" component="h1" gutterBottom>
                {currentBlog.title}
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                  {currentBlog.author[0].toUpperCase()}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" component="span">
                    <PersonIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {currentBlog.author}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" component="span" sx={{ ml: 2 }}>
                    <CalendarTodayIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {new Date(currentBlog.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
              <Box className="blog-content">
                <Typography variant="body1" paragraph>
                  {currentBlog.content}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <IconButton onClick={handleLike} color={userLiked ? "primary" : "default"}>
                  <ThumbUpIcon />
                </IconButton>
                <Typography variant="body2" sx={{ mr: 2 }}>
                  {currentBlog.likes}
                </Typography>
                <IconButton onClick={handleDislike} color={userDisliked ? "primary" : "default"}>
                  <ThumbDownIcon />
                </IconButton>
                <Typography variant="body2">
                  {currentBlog.dislikes}
                </Typography>
              </Box>
            </CardContent>
          </StyledCard>
          <CommentSection blogId={currentBlog.id} comments={currentBlog.comments || []} />
        </Grid>
        <Grid item xs={12} md={4}>
          <RelatedBlogs currentBlog={currentBlog} blogs={blogs} />
        </Grid>
      </Grid>
    </>
  )
}

export default BlogDetail

