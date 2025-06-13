import Home from "./components/Home";
import About from "./components/About";
import RepertoireList from "./components/RepertoireList";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/repertoire-list",
        element: <RepertoireList />,
        errorElement: <ErrorPage />,
    }
];

export default routes;