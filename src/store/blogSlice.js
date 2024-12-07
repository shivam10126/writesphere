import { createSlice } from '@reduxjs/toolkit'
import { initialBlogs } from '../data/initialBlogs'

const initialState = {
  blogs: initialBlogs,
  currentBlog: null,
  searchTerm: '',
  sortOrder: 'desc',
  selectedTags: [],
  userInteractions: {
    blogLikes: {},
    blogDislikes: {},
    commentLikes: {},
    commentDislikes: {}
  }
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push({
        ...action.payload,
        likes: 0,
        dislikes: 0,
        comments: []
      })
    },
    setCurrentBlog: (state, action) => {
      state.currentBlog = action.payload
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload
    },
    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload
    },
    addComment: (state, action) => {
      const { blogId, comment } = action.payload
      const blog = state.blogs.find(blog => blog.id === blogId)
      if (blog) {
        blog.comments.push({
          id: Date.now().toString(),
          ...comment,
          likes: 0,
          dislikes: 0
        })
      }
    },
    likeBlog: (state, action) => {
      const blogId = action.payload;
      if (!state.userInteractions.blogLikes[blogId]) {
        const blog = state.blogs.find(blog => blog.id === blogId);
        if (blog) {
          blog.likes += 1;
          if (state.userInteractions.blogDislikes[blogId]) {
            blog.dislikes -= 1;
            state.userInteractions.blogDislikes[blogId] = false;
          }
          state.userInteractions.blogLikes[blogId] = true;
        }
      }
    },
    dislikeBlog: (state, action) => {
      const blogId = action.payload;
      if (!state.userInteractions.blogDislikes[blogId]) {
        const blog = state.blogs.find(blog => blog.id === blogId);
        if (blog) {
          blog.dislikes += 1;
          if (state.userInteractions.blogLikes[blogId]) {
            blog.likes -= 1;
            state.userInteractions.blogLikes[blogId] = false;
          }
          state.userInteractions.blogDislikes[blogId] = true;
        }
      }
    },
    likeComment: (state, action) => {
      const { blogId, commentId } = action.payload;
      if (!state.userInteractions.commentLikes[`${blogId}-${commentId}`]) {
        const blog = state.blogs.find(blog => blog.id === blogId);
        if (blog) {
          const comment = blog.comments.find(comment => comment.id === commentId);
          if (comment) {
            comment.likes += 1;
            if (state.userInteractions.commentDislikes[`${blogId}-${commentId}`]) {
              comment.dislikes -= 1;
              state.userInteractions.commentDislikes[`${blogId}-${commentId}`] = false;
            }
            state.userInteractions.commentLikes[`${blogId}-${commentId}`] = true;
          }
        }
      }
    },
    dislikeComment: (state, action) => {
      const { blogId, commentId } = action.payload;
      if (!state.userInteractions.commentDislikes[`${blogId}-${commentId}`]) {
        const blog = state.blogs.find(blog => blog.id === blogId);
        if (blog) {
          const comment = blog.comments.find(comment => comment.id === commentId);
          if (comment) {
            comment.dislikes += 1;
            if (state.userInteractions.commentLikes[`${blogId}-${commentId}`]) {
              comment.likes -= 1;
              state.userInteractions.commentLikes[`${blogId}-${commentId}`] = false;
            }
            state.userInteractions.commentDislikes[`${blogId}-${commentId}`] = true;
          }
        }
      }
    }
  }
})

export const {
  addBlog,
  setCurrentBlog,
  setSearchTerm,
  setSortOrder,
  setSelectedTags,
  addComment,
  likeBlog,
  dislikeBlog,
  likeComment,
  dislikeComment
} = blogSlice.actions

export default blogSlice.reducer

