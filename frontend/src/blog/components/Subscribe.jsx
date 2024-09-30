import { useState } from "react";

const Subscribe = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail("");
    };

    return (
        <>
            <div className="p-4 bg-white shadow-md rounded-lg">
                <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                    Empowering Smallholder Farmers in Africa
                </h3>
                <form action="/subscribe" onSubmit={handleSubmit} className="space-y-4">
                    <h4 className="text-lg font-medium text-gray-600">
                        Subscribe To Never Miss Updates!
                    </h4>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="godbless@gmail.com"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-green-600 text-white rounded-full py-2 px-6 hover:bg-green-700 transition duration-300 ease-in-out"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </>
    );
};

export default Subscribe;
