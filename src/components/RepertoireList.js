import RepertoireCard from "./RepertoireCard";
import NewRepertoireForm from "./NewRepertoireForm";
import NavBar from "./NavBar.js";
import { useState, useEffect } from "react";

function RepertoireList() {
    const [repertoire, setRepertoire] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/repertoire")
            .then((response) => response.json())
            .then((data) => setRepertoire(data))
            .catch((error) => console.error("Error", error))
    }, []);

    function handleAddRepertoire(newRepertoire) {
        setRepertoire([...repertoire, newRepertoire])
    }

    return (
        <div>
            <NavBar />
            <h1>Repertoire List</h1>
            <NewRepertoireForm onAddRepertoire={handleAddRepertoire} />
            {repertoire.map((rep, index) => (
                <RepertoireCard key={index} rep={rep} />
            ))}
        </div>
    );
}

export default RepertoireList;