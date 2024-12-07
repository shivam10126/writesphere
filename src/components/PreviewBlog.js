import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';

const PreviewBlog = ({ title, content, onConfirm, onCancel }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Typography variant="h4" gutterBottom>
        Preview Blog
      </Typography>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button onClick={onCancel} sx={{ mr: 2 }}>
          Cancel
        </Button>
        <Button onClick={onConfirm} variant="contained" color="primary">
          Confirm
        </Button>
      </Box>
    </Paper>
  );
};

export default PreviewBlog;

