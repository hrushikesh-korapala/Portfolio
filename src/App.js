import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from  './Home/Home';
import Timeline from './Timeline/Timeline';
import Projects from './Projects/Projects';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="hrushikesh-korapala.github.io/" element={<Home />} />
        <Route path="hrushikesh-korapala.github.io/Timeline" element={<Timeline />} />
        <Route path="hrushikesh-korapala.github.io/Projects" element={<Projects />} />
        <Route path="hrushikesh-korapala.github.io/Blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
