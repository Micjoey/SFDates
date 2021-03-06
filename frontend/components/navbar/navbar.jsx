import React from 'react';
import { Link} from 'react-router-dom';
// import SearchBarContainer from '../filterbar/search_bar_container';





class Navbar extends React.Component {
    constructor(props) {
        super(props); 
        this.dropDownIdSwitch = this.dropDownIdSwitch.bind(this)
    }

    dropDownIdSwitch() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    reload () {
        window.location.assign('/home');
    }



    loggedIn() {
        return(
        <div className="header-group">
            <div className="header-group-logged-in">
                <Link to="/home" className="SfDates-title-logged-in" >SFDates</Link>
                <Link to="/home" className="nav-bar-home-button" >Home</Link>
                <Link to="/home" className="nav-bar-home-button" >Saved Dates</Link>
                {/* <Link to='/Shelf' className="nav-bar-mybooks-button">Date Number</Link> */}
                {/* <SearchBarContainer allDates={this.props.retrieveDates()}/> */}
                {/* <div className="dropdown">
                    <img src={images.account_image} className="dropdown-image-icon" alt="" />
                    <disabled className="header-currentuser-name">Hi, {this.props.currentUser.username}!</disabled>
                    <div className="dropdown-content">
                        <Link to="/home" className="nav-bar-dropdown-mybooks-button" >Home</Link>
                        <Link to='/Saved_Dates' className="nav-bar-dropdown-mybooks-button">Saved Dates</Link>
                        <Link to='/home' className="nav-bar-dropdown-mybooks-button" onClick={this.props.logout}>Log Out</Link>
                    </div>
                </div> */}
            </div>
        </div>
        )
    }
    
    nonLoggedIn() {
        return (
            <div className="header-group">
                <div className="header-group-logged-in">
                    <Link to="/home" className="SfDates-title-logged-in" >SFDates</Link>
                    <button
                        onClick={() => window.location.href = "#/datesuggestions/"}
                        className="nav-bar-button"
                    >
                        All Dates
                    </button>
                </div>
            </div>
            )
        }

        
        render() {
            if (this.props.currentUser) {
                return this.loggedIn()
            } else {
                return this.nonLoggedIn()
            }
        }
    }
    
    
    export default Navbar;
