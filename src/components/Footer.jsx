import { Link } from "react-router-dom";
import Eventum from "../../src/assets/rsz_eventum.png"
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer container mx-auto p-10  text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <Link className="link link-hover" to="/login">Login</Link>
                    <Link className="link link-hover" to="/register">Register</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer container mx-auto px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <Link to="/"><img className="w-12 rounded-xl" src={Eventum} alt="" /></Link>
                    <p>Eventum Industries Ltd.<sup>®</sup> <br />Providing reliable Event Management Service since 1992</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 ">

                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/imteajalammonna">
                            <FaFacebook className="text-2xl text-[#0866FF] hover:text-black transition-all" ></FaFacebook>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/imteajalammonna/">
                            <FaInstagram className="text-2xl text-[rgb(250,58,180)] hover:text-black transition-all"></FaInstagram>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/imteaj-alam-monna/">
                            <FaLinkedin className="text-2xl text-[#0A66C2] hover:text-black transition-all" ></FaLinkedin>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCmqM9MJMAybSmfBG-JHvNlg">
                            <FaYoutube className="text-2xl text-[#FF0000] hover:text-black transition-all" ></FaYoutube>
                        </a>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;