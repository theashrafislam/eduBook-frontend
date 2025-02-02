import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import MyCollage from "../Pages/MyCollage";
import PrivateRouter from "./PrivateRouter";
import Profile from "../Pages/Profile";
import College from "../Pages/College";
import CollegeDetails from "../Components/CollegeDetails";
import Admission from "../Pages/Admission";
import AdmissionBook from "../Components/AdmissionBook";

let router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/my-collage',
                element: <PrivateRouter><MyCollage /></PrivateRouter>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile /></PrivateRouter>
            },
            {
                path: '/college',
                element: <College />
            },
            {
                path: `/college/:id`,
                element: <PrivateRouter><CollegeDetails /></PrivateRouter>
            },
            {
                path: '/admission',
                element: <Admission />
            },
            {
                path: '/admission/:id',
                element: <PrivateRouter><AdmissionBook /></PrivateRouter>
            },
        ]
    }
]);

export default router;