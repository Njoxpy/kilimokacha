import Logo1 from "../assets/images/kibo.png";
import Logo2 from "../assets/images/must.png";
import Logo3 from "../assets/images/pay.png";
import Logo4 from "../assets/images/tunzaa.png";
import Logo5 from "../assets/images/udsm.png";
import Logo6 from "../assets/images/yara.png";

const Sponsors = () => {
    return (
        <>
            <div className="p-4">
                <h3 className="text-2xl text-center mb-9">Explore Our Key Sponsors</h3>
                <div className="flex flex-wrap justify-center mt-4">
                    <img src={Logo1} alt="Kibo" className="m-2 h-16 sm:h-20 md:h-24 lg:h-28" />
                    <img src={Logo2} alt="MUST" className="m-2 h-16 sm:h-20 md:h-24 lg:h-28" />
                    <img src={Logo3} alt="Pay" className="m-2 h-16 sm:h-20 md:h-24 lg:h-28" />
                    <img src={Logo4} alt="Tunzaa" className="m-2 h-16 sm:h-20 md:h-24 lg:h-28" />
                    <img src={Logo5} alt="UDSM" className="m-2 h-16 sm:h-20 md:h-24 lg:h-28" />
                    <img src={Logo6} alt="Yara" className="m-2 h-16 sm:h-20 md:h-24 lg:h-28" />
                </div>
            </div>
        </>
    );
};

export default Sponsors;
