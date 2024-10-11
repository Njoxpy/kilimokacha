import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
    return (
        <>
            <div>
                <form className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-green-600">Sign Up</h2>
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="username">Username</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="text" id="username" />

                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="password" id="password" />

                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Confirm Password</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="password" id="password" />

                    <p className="mb-3">Already Have Account?<Link to={"/auth/login"} className="mb-4 text-green-600"> Login here</Link></p>

                    <button className="w-full p-2 bg-green-600 text-white rounded">Sign Up</button>
                </form>

            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default Register;