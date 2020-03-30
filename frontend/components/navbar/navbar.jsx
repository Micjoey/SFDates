import React from 'react';
import { Link} from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
import LoginFormContainer from '../session_form/login_form_container'




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



    personalGreeting() {
        return(
        <div className="header-group">
            <div className="header-group-logged-in">
                <Link to="/home" className="FunReads-title-logged-in" >SFDates</Link>
                <Link to="/home" className="nav-bar-home-button" >Home</Link>
                {/* <Link to='/Shelf' className="nav-bar-mybooks-button">Date Number</Link> */}
                <button>Date Number Placeholder</button>
                <SearchBarContainer allDates={this.props.retrieveDates()}/>
                <div className="dropdown">
                    <img src={images.account_image} className="dropdown-image-icon" alt="" />
                    <div className="dropdown-content">
                        <disabled className="header-currentuser-name">Hi, {this.props.currentUser.username}!</disabled>
                        <Link to="/home" className="nav-bar-dropdown-mybooks-button" >Home</Link>
                        <Link to='/Shelf' className="nav-bar-dropdown-mybooks-button">Saved Dates</Link>
                        <Link to='/home' className="nav-bar-dropdown-mybooks-button" onClick={this.props.logout}>Log Out</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    sessionLinks() {
        return (
            <div className="main-page-container">
                <div className="navbar-view-to-login-or-signup">
                    <div className="navbar-view-to-login">
                        <Link to="/" className="FunReads-title-logged-in">SFDates</Link>
                        {/* <button className="login-signup-button" onClick={() => this.props.openModal('signup')}>Signup</button>
                        <button className="login-signup-button" onClick={() => this.props.openModal('login')}>Login</button> */}
                        <div className='nav-bar-login-form-cont'>
                            <LoginFormContainer />
                        </div>
                        {/* <button className="login-signup-button" onClick={() => this.props.openModal('signup')}>Sign up</button> */}
                    </div>
                    <div className="test">
                        Trial
                    </div>
                </div>
            </div>
            )
        }
        
        render() {
            if (this.props.currentUser) {
                return this.personalGreeting()
            } else {
                return this.sessionLinks()
            }
        }
    }
    
    
    export default Navbar;
