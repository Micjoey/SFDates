import React from 'react';
import { connect } from 'react-redux';

import TypeModal from '../all_dates_show_page/modal_filters/type_modal';
import { closeModal } from '../../actions/model_actions';
import LoginFormContainer from '../../old_code/login_form_container' 
import {renderModal} from './modal_render';




function Modal({ modal, closeModal } ) {
    if (!modal) {
        return null;
    }
    // let allDates = Object.values(modal.dates);
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
        case 'date_type':

            component = <TypeModal/>;
            break;
        case 'location':

            component = <TypeModal/>;
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
        renderModal(component, outerIdName, innerIdName)
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