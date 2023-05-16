import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError()
    return (
        <>
        <div className="bg-body-colour">
            <div className="bg-white">
              <h1 className="text-black text-center mt-6"> Opps!!! </h1>
              <h1 className="text-black text-center mt-10" > {err.status + ":" + err.statusText} </h1>
            </div>
        </div>
        </>  
    )
}

export default Error