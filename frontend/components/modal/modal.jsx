import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/model_actions'
import TypeModal from '../all_dates_show_page/modal_filters/type_modal';



function Modal({ modal, closeModal } ) {
    if (!modal) {
        return null;
    }
    debugger
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
            console.log("hit")
            component = <TypeModal/>;
            break;
        case 'location':
            console.log("hit")
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