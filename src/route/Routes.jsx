import {
    createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import JobDetails from "../pages/JobDetails";
import ApplyJob from "../pages/ApplyJob";
import PrivateRoute from "./PrivateRoute";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";



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
                Component: JobDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/applyjob/:id',
                element: <PrivateRoute><ApplyJob /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: 'my-applications',
                element: <PrivateRoute><MyApplications /></PrivateRoute>
            },
            {
                path: 'add-job',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: 'my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: 'applications/:job_id',
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
            }
        ]
    },
]);




export default router