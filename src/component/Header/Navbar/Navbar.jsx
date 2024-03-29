import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png"

const Navbar = () => {
    return (
        <div className="">
            <nav>
                <div className="lg:flex lg:justify-between items-center py-4 px-5">
                    <div className=" flex justify-between">
                        <div className="justify-end">
                            <Link to="/" className=""><img className="w-40" src={Logo} alt="logo" /></Link>
                        </div>
                        <div className="dropdown relative">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content absolute -left-[155px]  mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                                <li className="text-lg">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-bold	text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink
                                        to="/donation"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-bold	text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Donation
                                    </NavLink>
                                </li>
                                <li className="text-lg">
                                    <NavLink
                                        to="/statistics"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-bold	text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Statistics
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="hidden lg:flex">
                        <ul className=" menu-horizontal items-center gap-8 px-1">
                            <li className="text-lg">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold	text-[#FF444A] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold	text-[#FF444A] underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-bold	text-[#FF444A] underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;