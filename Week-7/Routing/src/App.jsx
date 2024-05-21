import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Landing Page</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  );
}

export default App;
