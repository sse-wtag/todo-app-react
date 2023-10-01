import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "@components/Navbar";
import TaskBoard from "@components/TaskBoard";
import "react-toastify/dist/ReactToastify.css";
import "@styles/index.scss";

function App() {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <>
            <Navbar onSearching={setIsSearching} />
            <TaskBoard isSearching={isSearching} />
            <ToastContainer />
        </>
    );
}

export default App;
