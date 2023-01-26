import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing.page';
import Home from './pages/home/home.page';
import Nav from './pages/navigation/navigation.component';
import { ProjectsContent } from './pages/projects/projects.component';
import { AboutContent } from './pages/about/about.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<ProjectsContent />} />
        <Route path="/about" element={<AboutContent />} />
      </Route>
    </Routes>
  );
}

export default App;
