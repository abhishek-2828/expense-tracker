import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Dashboard from './Component/Dashboard';
import { useState, useEffect } from 'react';

function App() {

  const getAdminUser = () => {
    const admin_user = localStorage.getItem('admin_user');
    return JSON.parse(admin_user);
  }

  const getUserData = () => {
    const demo_user = localStorage.getItem('demo_user');
    return JSON.parse(demo_user);
  }

  const [adminUser, setAdminUser] = useState(getAdminUser);
  const [user, setUser] = useState(getUserData);

  useEffect( () => {

    const demoAdminUser = [
      {"id": 1, "firstname": "Abhishek", "lastname": "Gupta", "email": "abhihselgupta8689@gmail.com", "password": "Abhishek@8689"},
      {"id": 2, "firstname": "Shivam", "lastname": "Gupta", "email": "shivamgupta8689@gmail.com", "password": "Shivam@12345"}
    ];

    const demoUser = [
      {"id": 1, "firstname": "Abhay", "lastname": "Singh", "email": "abhaysingh1234@gmail.com", "password": "Abhay@12345"},
      {"id": 2, "firstname": "Karan", "lastname": "Sahani", "email": "karansahani1234@gmail.com", "password": "Karan@12345"}
    ];

    setAdminUser(demoAdminUser);
    setUser(demoUser);

    localStorage.setItem('admin_user', JSON.stringify(adminUser));
    localStorage.setItem('demo_user', JSON.stringify(user));
  },[])

  return (
    <Router>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn adminUser={adminUser} user={user} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
