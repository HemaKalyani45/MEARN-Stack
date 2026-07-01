import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import JobList from './components/JobList';
import PostJob from './components/PostJob';
import AdminDashboard from './components/AdminDashboard';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobList/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/post-job" element={<PostJob/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}
