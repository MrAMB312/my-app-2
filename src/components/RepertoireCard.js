function RepertoireCard({ rep }) {
    const { title, composer, grade } = rep;

    return (
        <div className="repertoire-card">
            <h3>{title}</h3>
            <p>Composed by: <em>{composer}</em></p>
            <p>Grade: <em>{grade}</em></p>
        </div>
    );
}

export default RepertoireCard;