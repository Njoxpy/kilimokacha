import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="p-4 bg-footerBg text-footerText mt-5">
                <div className="quick-links mb-4">
                    <ul className="flex flex-wrap gap-4 justify-center">
                        <li><Link to="/about" className="text-footerLinkColor hover:underline">About Us</Link></li>
                        <li><Link to="/contact" className="text-footerLinkColor hover:underline">Contact Us</Link></li>
                        <li><Link to="/terms" className="text-footerLinkColor hover:underline">Terms and Conditions</Link></li>
                        <li><Link to="/privacy" className="text-footerLinkColor hover:underline">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div className="mb-4">
                    <ul className="flex flex-wrap gap-4 justify-center">
                        <a href="https://www.linkedin.com/company/kilimokacha/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-footerLinkColor hover:underline">LinkedIn</a>

                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-center underline">© 2024 KilimoKacha</h3>
                </div>
            </div>
        </>
    );
}

// into social media account use a to send user to different page of the webiste

export default Footer;
