import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from  './Home/Home';
import Timeline from './Timeline/Timeline';
import Projects from './Projects/Projects';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Timeline" element={<Timeline />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
