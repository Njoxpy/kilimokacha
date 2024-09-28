import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div>
                <form action="/login">
                    <h4>Login</h4>
                    <label htmlFor="username">username</label>
                    <input type="text" name="" id="" placeholder="Username" required autoComplete="on" />

                    <label htmlFor="password">password</label>
                    <input type="password" name="" id="" placeholder="Password" required />

                    <p>Not Registered, create account <Link to="/register">Here</Link></p>
                    <p>Forgot password, click <Link to="/reset-password">here</Link></p>

                    <button>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login;