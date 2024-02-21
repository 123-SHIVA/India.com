import {Link} from "react-router-dom";
// import AboutPage from "../Pages/AboutPage";

function Navbar() {
    return (
        <div>
            {/* ye ho jaane dijiye dekhte hai hota hai ya nhi ha to isi me 10 din de denge */}
            <div className="navbar bg-white">
                <div className="flex-1">
                    <a className="ghost text-xl"> hello</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                      <li><Link to='/about'>about itc</Link></li>
                        <li><a> Business</a></li>
                        <li><a> Brand</a></li>
                        <li><a> Sustainability</a></li>
                        <li><a> Media Center</a></li>
                        <li><a> Investor Relations</a></li>
                        <li><a> Careers</a></li>
                        <li><a> ITC Resource</a></li>
                        <li>
                            <details>
                                <summary>
                                    Parent kya hua 
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;