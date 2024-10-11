import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <form className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-green-600">Login</h2>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="username">Username</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" id="username" />

                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="password" id="password" />


                    <p className="mb-4 text-green-600"><Link to={"/auth/new/password"}>Forgot Password?</Link></p>

                    <button className="w-full p-2 bg-green-600 text-white rounded">Login</button>

                    <p className="text-gray-700 mb-4 mt-4 text-center">Don't have account?<Link to={"/auth/register"} className="text-green-600"> Register </Link></p>
                </form>

            </div>


            <Footer />

        </>
    );
};


export default Login;