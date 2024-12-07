import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AddBlogPage from './pages/AddBlogPage'
import BlogDetail from './components/BlogDetail'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E50', // Midnight Blue
    },
    secondary: {
      main: '#FF6F61', // Light Coral
    },
    background: {
      default: '#F5F5DC', // Beige
    },
    common: {
      white: '#FFFFFF', // White
    },
  },
})

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Container component="main" className="flex-grow" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddBlogPage />} />
                <Route path="/blogs/:blogId" element={<BlogDetail />} />
              </Routes>
            </Container>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App

