import { Link } from "react-router-dom";

function RootLayout() {
    return (
        <>
            <div>
                <h1 className="font-bold text-blue-800 text-2xl m-2"><Link to="/">KilimoKacha</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/market-info">Market Prices</Link></li>
                        <li><Link to="/weather-data">Weather</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/expert-advice">Expert Advice</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default RootLayout;