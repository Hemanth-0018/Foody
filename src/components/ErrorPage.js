import { useRouteError } from "react-router-dom"
const ErrorPage=()=>{
    const err=useRouteError();
    return (
        <div>
            <h1>Opps</h1>
            <h3>there is an error</h3>
        </div>
    )
}