import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './pages/HomeView/HomeView';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
