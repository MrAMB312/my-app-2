import Home from "./components/Home";
import About from "./components/About";
import RepertoireList from "./components/RepertoireList";
import ErrorPage from "./components/ErrorPage";
import App from "./App";

const routes = [
    // {
    //     path: "/",
    //     component: <Home />,
    //     errorElement: <ErrorPage />,
    // },
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/repertoirelist",
        element: <RepertoireList />,
        errorElement: <ErrorPage />,
    }
];

export default routes;