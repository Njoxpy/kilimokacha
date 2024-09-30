import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="p-4 bg-footerBg text-footerText">
                <div className="quick-links">
                    <ul className="flex gap-4 justify-center">
                        <li><Link to="/about" className="text-footerLinkColor">About Us</Link></li>
                        <li><Link to="/contact" className="text-footerLinkColor">Contact Us</Link></li>
                        <li><Link to="/terms" className="text-footerLinkColor">Terms And Conditions</Link></li>
                        <li><Link to="/privacy" className="text-footerLinkColor">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex gap-4 p-4 jsutify-center">
                        <Link to="faceboook" className="text-footerLinkColor">Facebook</Link>
                        <Link to="twitter" className="text-footerLinkColor">Twitter</Link>
                        <Link to="instagram" className="text-footerLinkColor">Instagram</Link>
                        <Link to="linkedin" className="text-footerLinkColor">Linkedin</Link>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-center underline">2024 KilimoKacha</h3>
                </div>
            </div>
        </>
    )
}

export default Footer;