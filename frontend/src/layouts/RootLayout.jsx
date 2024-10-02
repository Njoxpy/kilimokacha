import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const RootLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="font-serif leading-relaxed text-gray-800">
                {/* Announcement Section */}
                <div className="bg-announceBg text-white p-4 flex justify-between items-center">
                    <h1>Announcement title</h1>
                    <Link to="announcement/1">
                        <button className="bg-announceCta p-2 hover:bg-green-800 transition-all duration-400">Read more</button>
                    </Link>
                </div>

                {/* Navbar */}
                <div className="flex justify-between items-center p-2.5 bg-green-700">
                    <h1 className="font-bold text-white text-2xl m-2"><Link to="/">KilimoKacha</Link></h1>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {/* Hamburger Icon */}
                            {isMenuOpen ? '✖' : '☰'}
                        </button>
                    </div>
                    <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative bg-green-700 md:bg-transparent w-full md:w-auto`}>
                        <ul className="flex flex-col md:flex-row gap-5 md:gap-0 md:items-center p-4 md:p-0">
                            <li><Link to="/" className="text-white font-bold hover:underline transition-all duration-400 mr-[22px]">Home</Link></li>
                            <li><Link to="/market-info" className="text-white font-bold hover:underline transition-all duration-400 mr-[22px]">Market Prices</Link></li>
                            <li><Link to="/weather-data" className="text-white font-bold hover:underline transition-all duration-400 mr-[22px]">Weather</Link></li>
                            <li><Link to="/blogs" className="text-white font-bold hover:underline transition-all duration-400 mr-[22px]">Blogs</Link></li>
                            <li><Link to="/expert-advice" className="text-white font-bold hover:underline transition-all duration-400 mr-[22px]">Expert Advice</Link></li>
                        </ul>
                    </nav>
                </div>

                <Outlet />
            </div>
        </>
    );
};

export default RootLayout;
