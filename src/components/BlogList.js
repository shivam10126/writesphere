import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { 
  Card, CardContent, CardActions, Typography, Chip, Box, 
  Button, TextField, IconButton, Menu, MenuItem, Grid
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SortIcon from '@mui/icons-material/Sort'
import FilterListIcon from '@mui/icons-material/FilterList'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import CommentIcon from '@mui/icons-material/Comment'
import { setCurrentBlog, setSearchTerm, setSortOrder, setSelectedTags } from '../store/blogSlice'

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs)
  const searchTerm = useSelector((state) => state.blog.searchTerm)
  const sortOrder = useSelector((state) => state.blog.sortOrder)
  const selectedTags = useSelector((state) => state.blog.selectedTags)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [sortAnchorEl, setSortAnchorEl] = useState(null)
  const [filterAnchorEl, setFilterAnchorEl] = useState(null)

  const handleViewBlog = (blog) => {
    dispatch(setCurrentBlog(blog))
    navigate(`/blogs/${blog.id}`)
  }

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value))
  }

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget)
  }

  const handleSortClose = (order) => {
    if (order) {
      dispatch(setSortOrder(order))
    }
    setSortAnchorEl(null)
  }

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget)
  }

  const handleFilterClose = () => {
    setFilterAnchorEl(null)
  }

  const handleTagToggle = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag]
    dispatch(setSelectedTags(newSelectedTags))
  }

  const filteredAndSortedBlogs = blogs
    .filter((blog) => 
      (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       blog.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedTags.length === 0 || blog.tags.some(tag => selectedTags.includes(tag)))
    )
    .sort((a, b) => {
      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
    })

  const allTags = Array.from(new Set(blogs.flatMap(blog => blog.tags)))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <TextField
          label="Search blogs"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ flexGrow: 1, mr: 2 }}
        />
        <IconButton onClick={handleSortClick}>
          <SortIcon />
        </IconButton>
        <Menu
          anchorEl={sortAnchorEl}
          open={Boolean(sortAnchorEl)}
          onClose={() => handleSortClose()}
        >
          <MenuItem onClick={() => handleSortClose('asc')}>Date (Ascending)</MenuItem>
          <MenuItem onClick={() => handleSortClose('desc')}>Date (Descending)</MenuItem>
        </Menu>
        <IconButton onClick={handleFilterClick}>
          <FilterListIcon />
        </IconButton>
        <Menu
          anchorEl={filterAnchorEl}
          open={Boolean(filterAnchorEl)}
          onClose={handleFilterClose}
        >
          {allTags.map((tag) => (
            <MenuItem key={tag} onClick={() => handleTagToggle(tag)}>
              <Chip
                label={tag}
                color={selectedTags.includes(tag) ? 'secondary' : 'default'}
                onClick={() => handleTagToggle(tag)}
              />
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Grid container spacing={2}>
        {filteredAndSortedBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom noWrap>
                  {blog.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                  By {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                }}>
                  {blog.description || blog.content.slice(0, 100) + '...'}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                  {blog.tags.slice(0, 3).map((tag, index) => (
                    <Chip key={index} label={tag} color="secondary" size="small" />
                  ))}
                  {blog.tags.length > 3 && (
                    <Chip label={`+${blog.tags.length - 3}`} size="small" variant="outlined" />
                  )}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', alignItems: 'center', px: 2, pb: 1 }}>
                <Box display="flex" alignItems="center">
                  <Box display="flex" alignItems="center" mr={1}>
                    <ThumbUpIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                      {blog.likes}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mr={1}>
                    <ThumbDownIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                      {blog.dislikes}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <CommentIcon fontSize="small" color="action" />
                    <Typography variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                      {blog.comments ? blog.comments.length : 0}
                    </Typography>
                  </Box>
                </Box>
                <Button 
                  size="small"
                  startIcon={<VisibilityIcon />} 
                  onClick={() => handleViewBlog(blog)}
                  sx={{
                    color: 'secondary.main',
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'common.white',
                    },
                  }}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogList

