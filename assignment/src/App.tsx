import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Home from "./pages/Home"; 
import Counter from "./components/Counter";
import UserDataForm from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/DashBoard";
import SignIn from "./components/SignIn"; 

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignIn />} /> 
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<UserDataForm />} />
          <Route path="/editor" element={<RichTextEditor />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
