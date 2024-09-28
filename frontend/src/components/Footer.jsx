import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div>
                <div className="quick-links">
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/terms">Terms And Conditions</Link></li>
                        <li><Link to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <Link to="faceboook">Facebook</Link>
                        <Link to="twitter">Twitter</Link>
                        <Link to="instagram">Instagram</Link>
                        <Link to="linkedin">Linkedin</Link>
                    </ul>
                </div>

                <div>
                    <h3>2024 KilimoKacha</h3>
                </div>
            </div>
        </>
    )
}

export default Footer;