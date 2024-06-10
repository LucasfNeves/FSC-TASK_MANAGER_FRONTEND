import { Tasks } from "./components/Task";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "./components/Sidebar";

import './App.css'
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const App = () => {
    return (
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
       </Routes>
    );
};

export default App;
