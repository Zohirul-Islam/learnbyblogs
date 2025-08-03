import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';


const App = () => {
  return (
    <div >
      
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog/:id" element={<Blogs/>} />
    </Routes>
    </div>
  )
}

export default App