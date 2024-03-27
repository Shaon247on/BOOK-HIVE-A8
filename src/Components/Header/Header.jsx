import { Link, NavLink } from "react-router-dom";

const Header = () => {
    

    const links = <>
        <li className="hover:bg-blue-gray-100 rounded-2xl hover:scale-105 ml-3 transition"><NavLink to={'/'}>Home</NavLink></li>
        <li className="hover:bg-blue-gray-100 rounded-2xl hover:scale-105 ml-3 transition"><NavLink to='/list'>Listed Books</NavLink></li>
        <li className="hover:bg-blue-gray-100 rounded-2xl hover:scale-105 ml-3 transition"><NavLink to='/page'>Pages to Read</NavLink></li>
        <li className="hover:bg-blue-gray-100 rounded-2xl hover:scale-105 ml-3 transition"><NavLink to='/FAQ'>FAQ</NavLink></li>
        <li className="hover:bg-blue-gray-100 rounded-2xl hover:scale-105 ml-3 transition"><NavLink to='/blogs'>Blogs</NavLink></li>
    </>

    return (
        <div className="mx-0 lg:mx-24 mt-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <h1 className="text-base lg:text-2xl font-bold transition border-2 p-4 hover:scale-105 hover:border-[#59C6D2] hover:no-underline focus:no-underline rounded-2xl"><Link to='/'>B<span className="text-[#23BE0A]">O</span><span className="text-[#59C6D2]">O</span>K HIVE</Link></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <a className="btn bg-[#23BE0A] text-white px-6 hidden lg:flex">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white px-6">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;