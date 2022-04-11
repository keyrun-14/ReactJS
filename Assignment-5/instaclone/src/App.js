import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Postview from './Postview';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Postview" element={<Postview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
