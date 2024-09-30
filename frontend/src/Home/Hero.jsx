import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="bg-green-600 text-white py-10 text-center njox">
                <div>
                    <h2 className="text-4xl font-bold">Empowering Farmers In Africa</h2>
                    <p className="text-base sm:text-lg mt-2 font-light">Kilimokacha helps farmermers grow better by giving them access to farming tips, market updates and expert advice.We're here to support you in making your farming more productive and profiltable.</p>
                    <div className="cta px-5 m-5">
                        <button className="mt-4 px-6 py-3 bg-white text-green-600 font-medium rounded mr-4 hover:text-green-800"><Link to="/about">Learn More</Link></button>
                        <button className="mt-4 px-6 py-3 bg-white text-green-600 font-medium rounded hover:text-green-800"><Link to="/market-info">Explore More</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;