import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Home from './views/Home';
import BackToTop from './common/BackToTop';

function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/:value" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <BackToTop/>
  </>
  );
}

export default App;
