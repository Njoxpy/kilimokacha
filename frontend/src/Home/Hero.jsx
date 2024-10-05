import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="bg-green-600 text-white py-10 text-center njox relative">
                <div className="absolute inset-0 bg-cover bg-center opacity-30 njox"></div> {/* Background Image */}
                <div className="relative max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Empowering Farmers In Africa</h2>
                    <p className="text-sm sm:text-base md:text-lg mt-2 font-light">
                        Kilimokacha helps farmers grow better by giving them access to farming tips, market updates, and expert advice. 
                        We're here to support you in making your farming more productive and profitable.
                    </p>
                    <div className="cta mt-4 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* <Link to="/about">
                            <button className="px-6 py-3 bg-white text-green-600 font-medium rounded hover:text-green-800 transition-colors duration-300">
                                Learn More
                            </button>
                        </Link> */}
                        <Link to="/market-info">
                            <button className="px-6 py-3 bg-white text-green-600 font-medium rounded hover:text-green-800 transition-colors duration-300">
                                Explore More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
