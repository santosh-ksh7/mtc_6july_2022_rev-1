import React from 'react';
import "./Topnavbar.css";
import logo from "./Logo.png";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


export default function Topnavbar() {
  return (
    <div className='topbar'>
        <div className="topbarlogodes">
            <img className='topbarlogo' src={logo} alt="Company logo" />
            <p className="topbardes">MyTravelCompanion</p>
        </div>
        <div className="topbarsearch">
            <input type="text" size={20} placeholder="search here" /><SearchIcon />
        </div>
        <div className="topbarlinks">
            {/* <p>HOME</p> */}
            <Link style={{textDecoration: "none", color: "black"}} to="/home" >HOME</Link>
            <Link style={{textDecoration: "none", color: "black"}} to="/write" >WRITE</Link>
            {/* <p>WRITE</p> */}
        </div>
        <div style={{display: "flex", gap: "15px", alignItems: "center"}} className="topbarlogininfo">
            <Link style={{textDecoration: "none", color: "black"}} to="/my-account" ><img style={{borderRadius: "50%", height: "35px", width: "35px", objectFit: "cover"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU" alt="" /></Link>
            <p>Sign-in</p>
        </div>
    </div>
  )
}

