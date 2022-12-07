import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing.page';
import Home from './pages/home/home.page';
import Nav from './pages/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
