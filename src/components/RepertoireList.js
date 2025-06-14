import RepertoireCard from "./RepertoireCard";
import NewRepertoireForm from "./NewRepertoireForm";
import NavBar from "./NavBar.js";
import Header from "./Header.js";
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
            <Header />
            <NavBar />
            <h1 className="component-title">Repertoire List</h1>
            <p>We are in the process of updating our recently played Repertoire List - compositions
                performed at concerts within the past 5 years. If you notice an omission from this list,
                please use the "Add New Repertoire" form below. Thank you for your assistance.
            </p>
            <NewRepertoireForm onAddRepertoire={handleAddRepertoire} />
            <div className="cards-container">
                {[...repertoire]
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((rep) => (
                        <RepertoireCard key={rep.id} rep={rep} />
                    ))}
            </div>
        </div>
    );
}

export default RepertoireList;