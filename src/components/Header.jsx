import { Link, NavLink } from "react-router-dom";
import Eventum from "../../src/assets/rsz_eventum.png";
import avater from "../../src/assets/avater-removebg-preview.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.1) {
                setScrolling(true);
            }
            else {
                setScrolling(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            });
        toast("You have logout Successfully")
    }

    const navbarClasses = ` fixed  top-0 w-full z-10 bg-[#1F242D] " ${scrolling ? 'bg-[#fff] shadow-lg text-black ' : 'text-[#00FFFF]'}`;


    const links = <>
        <NavLink className="nav" to="/">Home</NavLink>
        <NavLink className="nav" to="/events">Events</NavLink>
        <NavLink className="nav" to="/login">Login</NavLink>
        <NavLink className="nav" to="/register">Register</NavLink>
    </>


    return (
        <div className={navbarClasses} >
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className=" text-2xl font-bold flex items-center justify-center"><img className="w-9 h-auto rounded-xl mr-2" src={Eventum} alt="" />   EVENTUM</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end hidden sm:flex ">
                    {
                     user?.displayName ?
                            <h3 className="text-xl mr-4">{user?.displayName}</h3> :
                            <h3 className="text-xl mr-4">{user?.email}</h3>
                    }
                    {
                        user ? <Link user={user} to="/profile"> <img className="rounded-full w-12 mr-5" src={user.photoURL} alt="" /></Link> :
                            <img className="w-14 mr-5" src={avater} alt="" />
                    }
                    {
                        user ?
                            <button onClick={handleLogOut} className="button">LogOut</button> :
                            <Link to="/login"> <button className="button btn-fill">Login</button></Link>
                    }
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;