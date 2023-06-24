import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './pages/HomeView/HomeView';
import { Section } from 'components/Section/Section';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView title="Hello!" />} />
        </Routes>
      </BrowserRouter>

      <Section title="Different Title">This is my Section</Section>
    </>
  );
}

export default App;
