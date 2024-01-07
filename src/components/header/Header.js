import "./Header.scss";
import logo from "../../Assets/Logo/BrainFlix-logo.svg";
import avatar from "../../Assets/Images/Mohan-muruge.jpg";
import search from "../../Assets/Icons/search.svg";
import upload from "../../Assets/Icons/upload.svg";
//import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="header">
      <img src={logo} alt="user logo" className="header__logo"></img>
      <div className="header__container">
            <div className="header__container--search">
                  <img className="search--img" src={search} alt="user-search"></img>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search--input"
                  ></input>
            </div>
            <div className="header__container--avatar">
                  <img src={avatar} alt="user avatar" className="avatar--img"></img>
            </div>
            <div className="header__container--btn">
                  <button className="btn--upload">
                    <img src={upload} className="btn--img" alt="user-upload"></img>
                    UPLOAD
                  </button>
            </div>
      </div>
    </div>
  );
}

export default Header;
