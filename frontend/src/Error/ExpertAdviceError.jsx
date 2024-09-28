import { useRouteError } from "react-router-dom";

const ExpertAdviceError = () => {
    const error = useRouteError()
    return (
        <>
            <div>
                <h3>Not Found</h3>
                <p>{error.message}</p>
            </div>
        </>
    )
}

export default ExpertAdviceError;