function RepertoireCard({ rep }) {
    const { title, composer, grade } = rep;

    return (
        <div>
            <h3>{title}</h3>
            <p>Composed by: {composer}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}

export default RepertoireCard;