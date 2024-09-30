const Login = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-green-600">Login to AgroConnect</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-600"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-600"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Login;