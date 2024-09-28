import { Link } from "react-router-dom";

const Register = () => {
    return (
        <>
            <div>
                <h3>Create Account</h3>
                <label htmlFor="email">email</label>
                <input type="email" name="" id="" placeholder="email" required autoFocus />

                <label htmlFor="username">username</label>
                <input type="text" name="" id="" placeholder="username" required />

                <label htmlFor="password">password</label>
                <input type="password" name="" id="" placeholder="password" required />
                <p>already have account <Link to="/login">login</Link> </p>

                <button>Register</button>
            </div>
        </>
    )
}

export default Register;