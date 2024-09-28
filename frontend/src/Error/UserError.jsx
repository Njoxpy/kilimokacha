import { useRouteError } from "react-router-dom";

const UserError = () => {
    const error = useRouteError()
    return (
        <>
            <div>
                <h4>user not found</h4>
                <p>{error.message}</p>
            </div>
        </>
    )
}

export default UserError;