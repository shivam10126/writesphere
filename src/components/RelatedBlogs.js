import React from 'react'
import { Typography, Card, CardContent, CardActionArea, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const RelatedBlogs = ({ currentBlog, blogs }) => {
  const navigate = useNavigate()

  const relatedBlogs = blogs
    .filter(blog => 
      blog.id !== currentBlog.id && 
      blog.tags.some(tag => currentBlog.tags.includes(tag))
    )
    .slice(0, 3)

  const topBlogs = blogs
    .filter(blog => blog.id !== currentBlog.id)
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 3)

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`)
  }

  const renderBlogList = (blogList, title) => (
    <>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {blogList.map(blog => (
        <Card key={blog.id} sx={{ mb: 2 }}>
          <CardActionArea onClick={() => handleBlogClick(blog.id)}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By {blog.author}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  )

  return (
    <Box>
      {relatedBlogs.length > 0 ? (
        renderBlogList(relatedBlogs, "You might also like")
      ) : (
        <>
          <Typography variant="body1" gutterBottom>
            There are no similar blogs available. Why not read something else?
          </Typography>
          {renderBlogList(topBlogs, "Top blogs")}
        </>
      )}
    </Box>
  )
}

export default RelatedBlogs

