import Album from "./Components/Album";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
    <Navbar/>
    <Album/>
    </>
  );
}

export default App;
