import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/model_actions'
import DateNumberFilter from '../filterbar/date_number_filter';
import LoginFormContainer from '../session_form/login_form_container'
import SignUpFormContainer from '../session_form/sign_up_form_container'
import LocationFilter from '../filterbar/date_number_filter'



function Modal({ modal, closeModal } ) {
    
    if (!modal) {
        return null;
    }
    let divName = modal.divName
    modal = modal.switchName
    let component;

    let outerClassName = ""
    let innerClassName = ""
    switch(modal) {
        case 'date number':
            outerClassName = "date-number-dropdown"
            innerClassName = "date-number-dropdown-child"
            component = <DateNumberFilter/>;
            break;
        case 'location':
            outerClassName = "date-number-dropdown"
            innerClassName = "date-number-dropdown-child"
            component = <LocationFilter/>;
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
    let bodyRect
    let right = ""
    let bottom = ""

    if (divName) {
        const divElement = Object.values(document.getElementsByClassName(`${divName}`))[0]
        elementRect = divElement.getBoundingClientRect();
        bodyRect = document.body.getBoundingClientRect();
        left = elementRect.left 
        top = elementRect.top
        right = elementRect.right
        bottom = elementRect.bottom
    }

    return (
        <div className="modal-background" id={`${outerClassName}`} onClick={closeModal}>
            <div className="modal-child" id={`${innerClassName}`} style={{ top: top, left: left, right: right, bottom:bottom }} onClick={e => e.stopPropagation()}>
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