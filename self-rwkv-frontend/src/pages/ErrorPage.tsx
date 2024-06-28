import { useRouteError } from "react-router-dom"
 
export default function ErrorPage(){
    const routerError = useRouteError()
    return (
        <>
            <div className="main">
                <h1>this page is not found!</h1>
                <p>{routerError}</p>
            </div>
        </>
    )
}
