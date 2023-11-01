import { ToastContainer } from "react-toastify";
import Navbar from "@components/Navbar";
import TaskBoard from "@components/TaskBoard";
import "react-toastify/dist/ReactToastify.css";
import "@styles/index.scss";

function App() {
    return (
        <>
            <Navbar />
            <TaskBoard />
            <ToastContainer />
        </>
    );
}

export default App;
