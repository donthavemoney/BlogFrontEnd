import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import NotAuthenticated from './components/NotAuthenticated';
import Login from './components/Login';
import Register from './components/Register';
import ViewBlogs from './components/Blog/ViewBlog';
import CreateBlog from './components/Blog/CreateBlog';
import SingleBlog from './components/Blog/SingleBlog';





function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<NotAuthenticated />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/blogs/explore" element={<ViewBlogs />}> </Route>
          <Route path="/blog/:slug" element={<SingleBlog />}> </Route>
          <Route path="/blogs/create" element={<CreateBlog />}> </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;