import Navbar from "@components/Navbar";
import TaskBoard from "@components/TaskBoard";
import { useState } from "react";

function App() {
    const [isSearching, setIsSearching] = useState(false);

    return (
        <>
            <Navbar onSearch={setIsSearching} />
            <TaskBoard isSearching={isSearching} />
        </>
    );
}

export default App;
