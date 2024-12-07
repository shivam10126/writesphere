import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { styled } from '@mui/material/styles';
import { addBlog } from '../store/blogSlice';
import { extractWordContent } from '../utils/wordExtractor';
import PreviewBlog from './PreviewBlog';

const tagOptions = [
  'Technology', 'Programming', 'React', 'JavaScript',
  'Web Development', 'Design', 'UX', 'Productivity'
];

const StyledButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: theme.shadows[4],
  },
}));

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isFileUpload, setIsFileUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [extractedContent, setExtractedContent] = useState('');
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: Date.now().toString(),
      title,
      content: isFileUpload ? extractedContent : content,
      author,
      description,
      tags: selectedTags,
      createdAt: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
      comments: []
    };
    dispatch(addBlog(newBlog));
    navigate('/');
  };

  const handleFileChange = async (e) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      try {
        const extractedText = await extractWordContent(selectedFile);
        setExtractedContent(extractedText);
        setIsPreviewMode(true);
      } catch (error) {
        console.error('Error extracting content:', error);
        // Handle error (e.g., show error message to user)
      }
    }
  };

  const handlePreviewConfirm = () => {
    setIsPreviewMode(false);
    setContent(extractedContent);
  };

  const handlePreviewCancel = () => {
    setIsPreviewMode(false);
    setFile(null);
    setExtractedContent('');
  };

  if (isPreviewMode) {
    return (
      <PreviewBlog
        title={title}
        content={extractedContent}
        onConfirm={handlePreviewConfirm}
        onCancel={handlePreviewCancel}
      />
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& > :not(style)': { m: 1 } }}>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        fullWidth
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <FormControl fullWidth>
        <InputLabel>Tags</InputLabel>
        <Select
          multiple
          value={selectedTags}
          onChange={(e) => setSelectedTags(e.target.value)}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {tagOptions.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Checkbox
            checked={isFileUpload}
            onChange={(e) => setIsFileUpload(e.target.checked)}
            name="fileUpload"
            color="secondary"
          />
        }
        label="Upload content from Word file"
      />
      {isFileUpload ? (
        <Button
          variant="contained"
          component="label"
          startIcon={<UploadFileIcon />}
          fullWidth
        >
          Upload File
          <input
            type="file"
            hidden
            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
          />
        </Button>
      ) : (
        <TextField
          fullWidth
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          multiline
          rows={5}
        />
      )}
      {file && <Box>Selected file: {file.name}</Box>}
      <StyledButton 
        type="submit" 
        variant="contained" 
        color="secondary" 
        fullWidth
        startIcon={<AddIcon />}
      >
        Add Blog
      </StyledButton>
    </Box>
  );
};

export default BlogForm;

