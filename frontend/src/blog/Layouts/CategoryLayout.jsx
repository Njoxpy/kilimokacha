// import modules
import { Link, Outlet, NavLink } from 'react-router-dom';

const CategoryLayout = () => {
    return (
        <>
            <div className="p-4 bg-green-500 text-white">
                <nav>
                    <ul className='flex justify-evenly text-lg'>
                        <li>
                            <NavLink 
                                to="/blog/farming-tips" 
                                className={({ isActive }) => 
                                    isActive ? 'font-bold' : 'hover:font-bold transition-all duration-300'
                                } 
                                aria-label="Farming Tips"
                            >
                                Farming Tips
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/blog/market-trends" 
                                className={({ isActive }) => 
                                    isActive ? 'font-bold' : 'hover:font-bold transition-all duration-300'
                                } 
                                aria-label="Market Trends"
                            >
                                Market Trends
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/blog/success-stories" 
                                className={({ isActive }) => 
                                    isActive ? 'font-bold' : 'hover:font-bold transition-all duration-300'
                                } 
                                aria-label="Success Stories"
                            >
                                Success Stories
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/blog/sustainability" 
                                className={({ isActive }) => 
                                    isActive ? 'font-bold' : 'hover:font-bold transition-all duration-300'
                                } 
                                aria-label="Sustainability"
                            >
                                Sustainability
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    );
};

export default CategoryLayout;
