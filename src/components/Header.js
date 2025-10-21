import { LOGO_URL } from "../utils/contants";
const Header=()=>{
    return (
        <div className="header">
            <div className="Logo-container">
                <img src={LOGO_URL} className="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;