// import modules
import { Link, Outlet } from 'react-router-dom';

const CategoryLayout = () => {
    return (
        <>
            <div className="p-4 bg-green-500 text-white">
                <nav>
                    <ul className='flex justify-evenly text-lg'>
                        <li className='hover:font-bold transition-all .4s'><Link to="/blog/farming-tips">Farming Tips</Link> </li>
                        <li><Link to="/blog/market-trends">Market Trends</Link> </li>
                        <li><Link to="/blog/success-stories">Success Stories</Link></li>
                        <li><Link to="/blog/sustainability">Sustainability</Link></li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    )
}

export default CategoryLayout;
