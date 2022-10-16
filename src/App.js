import { Routes, Route } from 'react-router-dom';
import Landing from './routes/landing/landing.page';
import Nav from './routes/navigation/navigation.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
