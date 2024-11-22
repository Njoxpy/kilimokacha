import Logo1 from "../assets/images/kibo.png";
import Logo2 from "../assets/images/must.png";
import Logo3 from "../assets/images/pay.png";
import Logo4 from "../assets/images/tunzaa.png";
import Logo5 from "../assets/images/udsm.png";
import Logo6 from "../assets/images/yara.png";

const NewSponsors = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <h3 className="text-2xl text-center mb-9">Explore Our Key Sponsors</h3>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    <div className="bg-gray-400/5 p-8 sm:p-10">
                        <img
                            alt="Transistor"
                            src={Logo1}
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                    <div className="bg-gray-400/5 p-6 sm:p-10">
                        <img
                            alt="Reform"
                            src={Logo2}
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                    <div className="bg-gray-400/5 p-6 sm:p-10">
                        <img
                            alt="Tuple"
                            src={Logo3}
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                    <div className="bg-gray-400/5 p-6 sm:p-10">
                        <img
                            alt="Laravel"
                            src={Logo4}
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                    <div className="bg-gray-400/5 p-6 sm:p-10">
                        <img
                            alt="SavvyCal"
                            src={Logo5}
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                    <div className="bg-gray-400/5 p-6 sm:p-10">
                        <img
                            alt="Statamic"
                            src={Logo6}
                            width={158}
                            height={48}
                            className="max-h-12 w-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NewSponsors;