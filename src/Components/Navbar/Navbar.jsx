import './navbar.scss';
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import {useState} from "react";

const Navbar = () => {
    const [active, setActive] = useState('navBar');

    const showNavbar = () => {
        setActive('navBar activeNavbar');
    }

    const closeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdOutlineTravelExplore className="icon"/> Travel.
                        </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem"><a href="/home" className="navLink">Home</a></li>
                        <li className="navItem"><a href="/packages" className="navLink">Packages</a></li>
                        <li className="navItem"><a href="/shop" className="navLink">Shop</a></li>
                        <li className="navItem"><a href="/about" className="navLink">About</a></li>
                        <li className="navItem"><a href="/pages" className="navLink">Pages</a></li>
                        <li className="navItem"><a href="/news" className="navLink">News</a></li>
                        <li className="navItem"><a href="/contact" className="navLink">Contact</a></li>
                        <button className="btn">
                            <a href="" className="">BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNavbar" onClick={() => closeNavbar()}>
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>
                <div className="toggleNavbar">
                    <TbGridDots className="icon" onClick={() => showNavbar()}/>
                </div>
            </header>
        </section>
    )
}

export default Navbar;