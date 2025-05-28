import {
    createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";



const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/jobs/:id',
                Component: JobDetails
            }
        ]
    },
]);




export default router