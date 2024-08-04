import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
function App() {
document.title="Taylor Swift - The Eras Tour"
  return (
    <div className="App">
        <Routes>
            <Route 
                excact
                path="/"
                element={<Home />}
            />
        </Routes>
    </div>
  );
}

export default App;
