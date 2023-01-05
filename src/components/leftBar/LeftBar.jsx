import "./leftBar.scss"
import Friends from "../../assets/4.png.png";
import Groups from "../../assets/12.png.png";
import Market from "../../assets/10.png.png";
import Watch from "../../assets/14.png.png";
import Memories from "../../assets/8.png.png";
import Events from "../../assets/3.png.png";
import Gamings from "../../assets/6.png.png";
import Gallery from "../../assets/7.png.png";
import Videos from "../../assets/13.png.png";
import Messages from "../../assets/9.png.png";
import Funds from "../../assets/5.png.png";
import Tutorials from "../../assets/11.png.png";
import Courses from "../../assets/2.png.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);



  return (
    <div className="leftBar">
     <div className="container">
      <div className="menu">
       <div className="user">
       <img
            src={currentUser.profilePic}
            alt=""
        />
        <span>{currentUser.name}</span>
       <div className="item">
        <img src={Friends} alt="" />
        <span>Friends</span>
       </div>
       <div className="item">
        <img src={Groups} alt="" />
        <span>Groups</span>
       </div>
       <div className="item">
        <img src={Market} alt="" />
        <span>Marketplace</span>
       </div>
       <div className="item">
        <img src={Watch} alt="" />
        <span>Watch</span>
       </div>
       <div className="item">
        <img src={Memories} alt="" />
        <span>Memories</span>
       </div>
       </div>
       <hr/>
       <div className="menu">
        <span>Your shortcuts</span>
        <div className="item">
        <img src={Events} alt="" />
        <span>Events</span>
       </div>
       <div className="item">
        <img src={Gamings} alt="" />
        <span>Gamings</span>
       </div>
       <div className="item">
        <img src={Gallery} alt="" />
        <span>Gallery</span>
       </div>
       <div className="item">
        <img src={Videos} alt="" />
        <span>Videos</span>
       </div>
       <div className="item">
        <img src={Messages} alt="" />
        <span>Messages</span>
       </div>
       </div>
       <hr/>
       <div className="menu">
        <span>Others</span>
        <div className="item">
        <img src={Funds} alt="" />
        <span>Fundraiser</span>
       </div>
       <div className="item">
        <img src={Tutorials} alt="" />
        <span>Tutorials</span>
       </div>
       <div className="item">
        <img src={Courses} alt="" />
        <span>Courses</span>
       </div>
       </div>
      </div>
    </div>
    </div>
    
  )
}

export default LeftBar;