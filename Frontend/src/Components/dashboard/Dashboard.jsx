import "./Dashboard.css";
// import { SocialIcon } from 'react-social-icons';
import { AiOutlineHome } from "react-icons/ai";
import { BiSolidMessageAltAdd } from "react-icons/bi";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiSolidCity } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { PiSignOut } from "react-icons/pi";
import ClipLoader from "react-spinners/ScaleLoader";

function Dashboard() {
    return (
        <div className="body1">
            <div className="container1">
                <div className="navigation1">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    {/* <SocialIcon url='https://twitter.com"' /> */}
                                    <ClipLoader />
                                </span>
                                <span className="title">City Watch</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon">
                                    <AiOutlineHome size={32} />
                                </span>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon" style={{ paddingTop: "3px" }}>
                                    <BiSolidMessageAltAdd size={32} />
                                </span>
                                <span className="title">Register New Issue</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon" style={{ marginTop: "-2px" }}>
                                    <BsGlobeAmericas size={25} />
                                </span>
                                <span className="title">Explore all Issues</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon" style={{ paddingTop: "2px" }}>
                                    <BiSolidCity size={30} />
                                </span>
                                <span className="title">Show my City</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon" style={{ paddingTop: "2px" }}>
                                    <IoIosSettings size={32} />
                                </span>
                                <span className="title">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon" style={{ paddingTop: "2px" }}>
                                    <PiSignOut size={32} />
                                </span>
                                <span className="title">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="main1">
                    <div className="topbar">
                        <div className="toggle">
                            <ion-icon name="menu-outline" />
                        </div>
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search here" />
                                <ion-icon name="search-outline" />
                            </label>
                        </div>
                        <div className="user">
                            <img src="user.jpg" />
                        </div>
                    </div>
                    <div className="cardBox">
                        <div className="card">
                            <div>
                                <div className="numbers">1,504</div>
                                <div className="cardName">Daily Visits on Site</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="eye-outline" />
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Sales</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="analytics-outline" />
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">284</div>
                                <div className="cardName">Comments</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="chatbubbles-outline" />
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">$4,534</div>
                                <div className="cardName">Earning</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="wallet-outline" />
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <h2>Recent Orders</h2>
                                <a href="#" className="btn">
                                    View All
                                </a>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Price</td>
                                        <td>Payment</td>
                                        <td>status11</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Star Refrigerator</td>
                                        <td>$1200</td>
                                        <td>Paid</td>
                                        <td>
                                            <span className="status1 delivered">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Window Coolers</td>
                                        <td>$650</td>
                                        <td>Due</td>
                                        <td>
                                            <span className="status1 pending">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Speakers</td>
                                        <td>$100</td>
                                        <td>Processing....</td>
                                        <td>
                                            <span className="status1 progress">
                                                Yet to Deliver
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hp Laptop</td>
                                        <td>$110</td>
                                        <td>Paid</td>
                                        <td>
                                            <span className="status1 delivered">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Apple Watch</td>
                                        <td>$1200</td>
                                        <td>Due</td>
                                        <td>
                                            <span className="status1 progress">In Progress</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Wall Fan</td>
                                        <td>$60</td>
                                        <td>Paid</td>
                                        <td>
                                            <span className="status1 delivered">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Adidas Shoes</td>
                                        <td>$110</td>
                                        <td>Paid</td>
                                        <td>
                                            <span className="status1 delivered">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Denim Shirt</td>
                                        <td>$20</td>
                                        <td>Pending</td>
                                        <td>
                                            <span className="status1 progress">
                                                Yet to Deliver
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Casual Shoes</td>
                                        <td>$100</td>
                                        <td>Due</td>
                                        <td>
                                            <span className="status1 progress">
                                                Out for Delivery
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Wall Clock</td>
                                        <td>$20</td>
                                        <td>Paid</td>
                                        <td>
                                            <span className="status1 delivered">Delivered</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Charge</td>
                                        <td>$10</td>
                                        <td>Due</td>
                                        <td>
                                            <span className="status1 pending">Pending</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="recentCustomers">
                            <div className="cardHeader">
                                <h2>Recent Customers</h2>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img1.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                David
                                                <br />
                                                <span>Italy</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img2.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Ansh
                                                <br />
                                                <span>India</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img3.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Archi
                                                <br />
                                                <span>USA</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img4.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Abhishek
                                                <br />
                                                <span>Canada</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img5.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Pranav
                                                <br />
                                                <span>Japan</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img6.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Michael
                                                <br />
                                                <span>Australia</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img7.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Amit
                                                <br />
                                                <span>Africa</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img8.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Hardik
                                                <br />
                                                <span>India</span>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="60px">
                                            <div className="imgBx">
                                                <img src="img9.jpg" />
                                            </div>
                                        </td>
                                        <td>
                                            <h4>
                                                Neil
                                                <br />
                                                <span>Spain</span>
                                            </h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <p />
        </div>
    );
}

export default Dashboard;