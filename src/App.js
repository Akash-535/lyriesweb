import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Home from './views/Home';

function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/:value" element={<Home />} />
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App;
