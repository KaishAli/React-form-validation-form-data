// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../Landing/HomePage';
import LoginForm from '.././LoginForm';
function RoutingFile() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/LoginForm" element={<LoginForm />} />
                <Route path="/HomePage" element={<HomePage />} />
            </Routes>
        </Router>

    );
};

export default RoutingFile;
