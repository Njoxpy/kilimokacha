import { useState } from "react";

const Subscribe = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail("");
    }

    return (
        <>
            <div>
                <h3>Empowering Smallholder Farmers in Africa</h3>
                <form action="/subscribe" onSubmit={handleSubmit}>
                    <h4>Subscribe To Never Miss Updates!</h4>
                    <input
                        type="email"
                        name=""
                        value={email}
                        id="" onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        placeholder="godbless@gmail.com"
                        required
                    />
                    <button>Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default Subscribe;