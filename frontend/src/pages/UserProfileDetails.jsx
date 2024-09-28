import { useParams } from "react-router-dom";

const UserProfileDetails = () => {

    const {username} = useParams()
    return(
        <>
        <div>
            <h3>{username}</h3>
        </div>
        </>
    )
}

export default UserProfileDetails;