const Login = () => {
    return(
        <>
        <div>
            <form action="/login">
                <h4>Login</h4>
                <label htmlFor="username">username</label>
                <input type="text" name="" id="" placeholder="Username" required autoComplete="on"/>

                <label htmlFor="password">password</label>
                <input type="password" name="" id="" placeholder="Password" required/>

                <button>Login</button>
            </form>
        </div>
        </>
    )
}

export default Login;