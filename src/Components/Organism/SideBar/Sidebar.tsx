import Text from '../../atoms/Text/Text';
import { Link } from 'react-router-dom';
import {BiHomeCircle, BiHelpCircle} from "react-icons/bi";
import {BsFileEarmarkText, BsGear, BsCheckCircle} from "react-icons/bs";
import {GoPeople} from "react-icons/go";
import {GiOwl} from "react-icons/gi";
import {RxExit} from "react-icons/rx";
import SideBarStyle from './SideBarStyle';
// import { useLocation } from 'react-router-dom';

const SideBar = () => {

  return (
<SideBarStyle>
<nav className="side__bar">
<div className="link_container">
<div className="logo_container">
  <p><GiOwl size={35}/></p>
</div>
<Text classname="list_header" value="General"/>
  <div className='active nav__link'>
   <Link  to="/dashboard"><span className="icon"><BiHomeCircle size={17} /></span> <span className="link_text">Overview</span></Link></div>
<div className="nav__link"><Link to="/payroll"><span className="icon"> <BsFileEarmarkText size={17}/></span> <span className="link_text">Payroll</span></Link></div>
<div className="nav__link"><Link to="/employee"> <span className="icon"><GoPeople size={17}/> </span><span className="link_text">Employee</span></Link></div>
<div className="nav__link"><Link to="/attendance"> <span className="icon"><BsCheckCircle size={17}/> </span><span className="link_text">Attendance</span></Link></div>

<div className="others">
<Text classname="list_header" value="Others"/>
<div className="nav__link"><Link to="/help"> <span><BiHelpCircle size={18}/> </span><span className="link_text">Help</span></Link></div>
<div className="nav__link"><Link to="/settings"> <span><BsGear size={18}/> </span> <span className="link_text">Settings</span></Link></div>
</div>
</div>



<div className="link_container logout_container">
<button className="logout_btn"> <span className="logout_icon"><RxExit color="red"/></span> <span className="logout_text">Logout</span></button>
</div>
</nav>
</SideBarStyle>
  )
}

export default SideBar;