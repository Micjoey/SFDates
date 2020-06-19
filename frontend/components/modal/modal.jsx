import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/model_actions'
import DateNumberFilter from '../filterbar/date_number_filter';
import LoginFormContainer from '../session_form/login_form_container'
import SignUpFormContainer from '../session_form/sign_up_form_container'
import LocationFilter from '../filterbar/location_filter'
import CostFilter from '../filterbar/cost_filter';
import TypeFilter from '../filterbar/date_type_filter'


function Modal({ modal, closeModal } ) {
    
    if (!modal) {
        return null;
    }
    let allDates = Object.values(modal.dates);
    let idName = modal.idName;
    modal = modal.switchName;
    let component;
    let outerIdName
    let innerIdName
    if (modal === "sign up" || modal === "login") {
        outerIdName = ""
        innerIdName = ""
    } else {
        outerIdName = "dropdown-menu"
        innerIdName = "dropdown-menu-child"
    }
    
    
    switch(modal) {
        case 'type':
            component = <TypeFilter shutModal={shutModal} allDateInfo={allDates}/>;
            break;
        case 'cost':
            component = <CostFilter shutModal={shutModal} allDateInfo={allDates}/>;
            break;
        case 'date number':
            component = <DateNumberFilter shutModal={shutModal} allDateInfo={allDates}/>;
            break;
        case 'location':
            component = <LocationFilter shutModal={shutModal} allDateInfo={allDates}/>;
            break;
        case 'login':
            component = <LoginFormContainer/>;
            break;
        case 'sign up':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }

    // This makes the page automatically fit the dropdown menu to be below the div above it
    let left = "50%"
    let top = "50%"
    let elementRect
    let right = ""
    let bottom = ""
    let minWidth = ""

    if (idName) {
        const divElement = document.getElementById(`${idName}`)
        elementRect = divElement.getBoundingClientRect();
        left = elementRect.left 
        top = elementRect.top
        right = elementRect.right
        bottom = elementRect.bottom
        minWidth = elementRect.width
    }

    function shutModal(e, closeModal) {
        e.stopPropagation()
        closeModal()
    }

    return (
        <div className="modal-background" id={`${outerIdName}`} onClick={() => closeModal()}>
            <div className="modal-child" id={`${innerIdName}`} style={{ top: top, left: left, right: right, bottom:bottom, minWidth:minWidth }} onClick={e => e.stopPropagation()}>
                { component }
            </div>  
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);