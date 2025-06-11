import NavBar from "./NavBar";

function NewRepertoireForm() {
    return (
        <div>
            <NavBar />
            <h2>Add New Repertoire Entry</h2>
            <form>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <label>
                    Composer:
                    <input type="text" name="composer" />
                </label>
                <label>
                    Grade:
                    <input type="text" name="grade" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default NewRepertoireForm;