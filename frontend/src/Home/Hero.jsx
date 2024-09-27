import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div>
                <img src="" alt="website hello section" />
                <div>
                    <h2>Empowering Farmers In Africa</h2>
                    <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptas ea doloribus velit similique deserunt sunt natus accusamus, debitis ratione maiores officiis eum? Quo autem numquam voluptates, voluptas aliquid vel!</h4>
                    <div className="cta">
                        <button><Link to="/about">Learn More</Link></button>
                        <button><Link to="/market-info">Explore More</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;