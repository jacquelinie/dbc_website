import './App.css';
import LandingPage from "./components/Landing";
import HomePage from "./components/Home";
import { Routes, Route } from 'react-router-dom';

function App() {
  document.title = 'DBC Website';
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
