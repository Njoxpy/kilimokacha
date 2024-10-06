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
                                    isActive ? 'font-bold' : 'text-white font-bold hover:underline transition-all duration-400 mr-[22px]'
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
                                    isActive ? 'font-bold' : 'text-white font-bold hover:underline transition-all duration-400 mr-[22px]'
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
                                    isActive ? 'font-bold' : 'text-white font-bold hover:underline transition-all duration-400 mr-[22px]'
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
                                    isActive ? 'font-bold' : 'text-white font-bold hover:underline transition-all duration-400 mr-[22px]'
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
