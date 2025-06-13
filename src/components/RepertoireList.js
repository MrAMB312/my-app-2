import RepertoireCard from "./RepertoireCard";

function RepertoireList({ repertoireList }) {

    return (
        <div>
            <h1>Repertoire List</h1>
            {repertoireList.map((rep, index) => (
                <RepertoireCard key={index} rep={rep} />
            ))}
        </div>
    );
}

export default RepertoireList;