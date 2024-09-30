import Justin from "../../assets/images/justin.jpg"

const authorCard = () => {
    return(
        <>
        <div className="author-card">
            <img src={Justin} alt="author profile photo" className="w-24 rounded"/>
            <h3>author name</h3>
        </div>
        </>
    )
}

export default authorCard;