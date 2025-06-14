import { useState } from "react";

function NewRepertoireForm({ onAddRepertoire }) {
    const [formData, setFormData] = useState({
        title: "",
        composer: "",
        grade: "",
    });

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newRepertoire = {
            title: formData.title,
            composer: formData.composer,
            grade: formData.grade,
        };

        fetch("http://localhost:3001/repertoire", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRepertoire),
        })
            .then((response) => response.json())
            .then((savedRepertoire) => {
                onAddRepertoire(savedRepertoire);
                setFormData({
                    title: "",
                    composer: "",
                    grade: "",
                })
            })
    }
    
    return (
        <div className="new-repertoire-form">
            <h2 className="form-title">Add New Repertoire</h2>
            <form onSubmit={handleSubmit}>
                <div className="inputs-container">
                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Composer:
                        <input
                            type="text"
                            name="composer"
                            value={formData.composer}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Grade:
                        <input
                            type="text"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default NewRepertoireForm;