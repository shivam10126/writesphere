import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box, Avatar, IconButton } from '@mui/material'
import { ThumbUp, ThumbDown } from '@mui/icons-material'
import { likeComment, dislikeComment } from '../store/blogSlice'
import CommentForm from './CommentForm'

const CommentSection = ({ blogId, comments }) => {
  const dispatch = useDispatch()
  const userInteractions = useSelector((state) => state.blog.userInteractions)

  const handleLike = (commentId) => {
    dispatch(likeComment({ blogId, commentId }))
  }

  const handleDislike = (commentId) => {
    dispatch(dislikeComment({ blogId, commentId }))
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      {comments && comments.length > 0 ? comments.map((comment) => {
        const userLiked = userInteractions.commentLikes[`${blogId}-${comment.id}`]
        const userDisliked = userInteractions.commentDislikes[`${blogId}-${comment.id}`]

        return (
          <Box key={comment.id} sx={{ mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <Avatar sx={{ bgcolor: 'secondary.main', mr: 2 }}>
                {comment.name[0].toUpperCase()}
              </Avatar>
              <Typography variant="subtitle1">{comment.name}</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {comment.content}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="caption" color="text.secondary">
                {new Date(comment.createdAt).toLocaleString()}
              </Typography>
              <Box>
                <IconButton onClick={() => handleLike(comment.id)} size="small" color={userLiked ? "primary" : "default"}>
                  <ThumbUp fontSize="small" />
                </IconButton>
                <Typography variant="caption" sx={{ mx: 1 }}>
                  {comment.likes}
                </Typography>
                <IconButton onClick={() => handleDislike(comment.id)} size="small" color={userDisliked ? "primary" : "default"}>
                  <ThumbDown fontSize="small" />
                </IconButton>
                <Typography variant="caption" sx={{ ml: 1 }}>
                  {comment.dislikes}
                </Typography>
              </Box>
            </Box>
          </Box>
        )
      }) : (
        <Typography variant="body2" color="text.secondary">No comments yet.</Typography>
      )}
      <CommentForm blogId={blogId} />
    </Box>
  )
}

export default CommentSection

