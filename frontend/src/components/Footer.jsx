import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="p-4 bg-footerBg text-footerText">
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
                        <li><Link to="/facebook" className="text-footerLinkColor hover:underline">Facebook</Link></li>
                        <li><Link to="/twitter" className="text-footerLinkColor hover:underline">Twitter</Link></li>
                        <li><Link to="/instagram" className="text-footerLinkColor hover:underline">Instagram</Link></li>
                        <li><Link to="/linkedin" className="text-footerLinkColor hover:underline">LinkedIn</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-center underline">© 2024 KilimoKacha</h3>
                </div>
            </div>
        </>
    );
}

export default Footer;
