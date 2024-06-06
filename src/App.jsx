import { Tasks } from "./components/Task";
import { ToastContainer } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
        <>
           <Tasks />
           <ToastContainer />
        </>
    );
};

export default App;
