// import modules
import { Link, Outlet } from 'react-router-dom';

function CategoryLayout() {
    return (
        <>
            <div>
                <h3>KilimoKacha</h3>
                <nav>
                    <ul>
                        <li><Link to="/blog/farming-tips">Farming Tips</Link> </li>
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
