import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <div className="bg-announceBg text-white p-4 flex justify-between items-center">
                <h1>Announcement title</h1>
                <Link to="/"><button className="bg-announceCta p-2">Read more</button></Link>
            </div>
            <div className="flex justify-between items-center p-2.5 bg-green-700">
                <h1 className="font-bold text-white text-2xl m-2"><Link to="/">KilimoKacha</Link></h1>
                <nav>
                    <ul className="flex gap-5">
                        <li><Link to="/" className="text-white font-bold hover:underline transition-all duration-400">Home</Link></li>
                        <li><Link to="/market-info" className="text-white font-bold hover:underline transition-all duration-400">Market Prices</Link></li>
                        <li><Link to="/weather-data" className="text-white font-bold hover:underline transition-all duration-400">Weather</Link></li>
                        <li><Link to="/blog" className="text-white font-bold hover:underline transition-all duration-400">Blog</Link></li>
                        <li><Link to="/expert-advice" className="text-white font-bold hover:underline transition-all duration-400">Expert Advice</Link></li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    )
}

export default RootLayout;