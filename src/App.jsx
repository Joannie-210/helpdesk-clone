import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Activity from "./pages/Activity";
import  Branches from "./pages/Branches";
import  Database from "./pages/Database";
import  KnowledgeBase from "./pages/KnowledgeBase";
import  Projects from "./pages/Projects";
import  Reports from "./pages/Reports";
import  Settings from "./pages/Settings";
import  Support from "./pages/Support";
import  Tickets from "./pages/Tickets";
import  Users from "./pages/Users";
import CreateTicket from "./pages/CreateTicket";
import "./index.css";
import AppLayout from "./components/layouts/AppLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <Routes>
         <Route path="/" element={<AppLayout />}>
        <Route path="/activity" element={<Activity />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/database" element={<Database />} />
        <Route path="/knowledgebase" element={<KnowledgeBase />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/users" element={<Users />} />
</Route>
      </Routes>
    
  </BrowserRouter>
);
export default App;