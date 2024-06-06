import { Tasks } from "./components/Task";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from "./components/Sidebar";

import './App.css'

const App = () => {
    return (
        <div className='app-container'>
            <Sidebar />
            <Tasks />
            <ToastContainer />
        </div>
    );
};

export default App;
