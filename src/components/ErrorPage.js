import NavBar from "./NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div>
            <NavBar />
            <h1>Error: {error?.message || "Whoops! Something went wrong!"}</h1>
        </div>
    );
}

export default ErrorPage;