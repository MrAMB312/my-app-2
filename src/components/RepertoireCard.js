import React from "react";

function RepertoireCard({ title, composer, grade }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Composed by: {composer}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}

export default RepertoireCard;