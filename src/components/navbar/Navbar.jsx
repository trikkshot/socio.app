import "./navbar.scss"
import ChaletSharpIcon from '@mui/icons-material/ChaletSharp';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';

import { Link } from "react-router-dom";

import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);



  return (
    <div className="navbar">
      <div className="left">
      <Link to="/" style={{textDecoration:"none"}}>
        <span>Socio.App</span>
      </Link>
      <ChaletSharpIcon/>
      {darkMode ?(
       <WbSunnyOutlinedIcon onClick={toggle}/>)
       : (
        <DarkModeOutlinedIcon onClick={toggle} />)}
      <AppsOutlinedIcon/>
      <div className="search">
        <SearchOutlinedIcon/>
        <input type="text" placeholder="Search.." />
      </div>
    </div>
    <div className="right">
      <Person2OutlinedIcon/>
      <NotificationImportantOutlinedIcon/>
      <EmailOutlinedIcon/>
      <div className="user">
      <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
      </div>
    </div>  
  </div>
  );
};

export default Navbar;