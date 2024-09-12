import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';

function App() {
  return (
    <Router>
      {/* <SignIn />
      <SignUp /> */}
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router >
  );
}

export default App;
