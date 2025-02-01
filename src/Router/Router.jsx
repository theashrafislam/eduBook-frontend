import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import MyCollage from "../Pages/MyCollage";
import PrivateRouter from "./PrivateRouter";
import Profile from "../Pages/Profile";

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
            }
        ]
    }
]);

export default router;