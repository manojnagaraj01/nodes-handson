import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/Register';
import LoginForm from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
