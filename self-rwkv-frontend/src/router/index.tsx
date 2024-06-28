// src/router/index.jsx
import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Generate from "../pages/generate/Generate";
import Interaction from "../pages/interaction/Interaction";
import Talk from "../pages/talk/talk";
import Demo from "../views/Demo";
import Login from "../views/Login";
 
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/Demo" replace />,
        errorElement: <ErrorPage />,
    },
    {
        path:'/Demo',
        element: <Demo />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'generate',
                element: <Generate />,
            },
            {
                path: 'interaction',
                element: <Interaction />,
            },
            {
                path: 'talk',
                element: <Talk />,
            },
        ],
    },
    {
        path:'/login',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path:'*',
        element: <ErrorPage />,
    }
])
 
export default router
