import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Dashboard from './pages/admin/Dashboard';
import Layout from './pages/admin/Layout';
import AddBlogs from './pages/admin/AddBlogs';
import ListBlog from './pages/admin/ListBlog';
import Comments from './pages/admin/Comments';
import Login from './components/admin/Login';


const App = () => {
  return (
    <div >
      
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:id" element={<Blogs/>} />
        <Route path='/admin' element = {true ? <Layout/> :<Login/>}>
          {/* child route here */}
            <Route index element = {<Dashboard/>}/>
            <Route path='addblogs' element = {<AddBlogs/>}/>
            <Route path='listblogs' element = {<ListBlog/>}/>
            <Route path='comments' element = {<Comments/>}/>
        </Route>
    </Routes>
    </div>
  )
}

export default App