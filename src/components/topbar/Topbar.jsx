import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";


export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    //if menuOpen is true will add a class called active
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">React.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>0426751648</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>jiayeli.bus@gmail.com</span>
          </div>
        </div>
        <div className="right">
          
          <div className="hamburger" onClick={function () {
            //change the menuOpen to control the hamburger
            setMenuOpen(!menuOpen);
          }}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
            {/*These are the three lines for the hamburger*/}
          </div>
        </div>
      </div>
    </div>
  )
}
