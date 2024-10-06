import Footer from "../components/Footer";

const ForgotPasswd = () => {
    return (
        <>
            <div className="p-4">
                <form action="" className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
                    <h2 className="text-2xl font-bold mb-4 text-green-600">Reset Password</h2>

                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="password" id="password" />


                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                    <input className="w-full p-2 mb-4 border border-gray-300 rounded" type="password" id="password" />


                    <button className="w-full p-2 bg-green-600 text-white rounded">Confirm</button>

                </form>
            </div>
            <div className="footer-mh">
                <Footer />
            </div>
        </>
    )
}

export default ForgotPasswd;