import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../store/blogSlice'
import { TextField, Button, Box } from '@mui/material'

const CommentForm = ({ blogId }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && email && content) {
      dispatch(addComment({
        blogId,
        comment: { name, email, content, createdAt: new Date().toISOString() }
      }))
      setName('')
      setEmail('')
      setContent('')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Comment"
        multiline
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit Comment
      </Button>
    </Box>
  )
}

export default CommentForm

