// src/router/index.jsx
import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Chat from "../pages/chat";
import Generate from "../pages/generate/Generate";
import Interaction from "../pages/interaction";
import Pipeline from "../pages/pipeline";
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
                path: 'chat',
                element: <Chat />,
            },
            {
                path: 'pipeline',
                element: <Pipeline />,
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
