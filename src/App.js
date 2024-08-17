import { Route, Routes } from 'react-router-dom';
import Home from  './pages/Home';
import Timeline from './pages/Timeline';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';

function App() {
  return (
      <Routes>
        <Route path="Portfolio/" element={<Home />} />
        <Route path="Portfolio/Timeline" element={<Timeline />} />
        <Route path="Portfolio/Projects" element={<Projects />} />
        <Route path="Portfolio/Blogs" element={<Blogs />} />
      </Routes>
  );
}

export default App;
