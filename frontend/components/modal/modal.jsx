import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/model_actions'
import DateNumberFilter from '../filterbar/date_number_filter';
import LoginFormContainer from '../session_form/login_form_container'
import SignUpFormContainer from '../session_form/sign_up_form_container'



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
        case 'login':
            component = <LoginFormContainer/>;
            break;
        case 'sign up':
            component = <SignUpFormContainer />;
            break;
        default:
            return null;
    }
    let x = 0
    let y = 0
    let elementRect
    let bodyRect

    if (divName) {
        const divElement = Object.values(document.getElementsByClassName(`${divName}`))[0]
        elementRect = divElement.getBoundingClientRect();
        bodyRect = document.body.getBoundingClientRect();
        x = elementRect.left
        y = elementRect.top
    }
    return (
        <div className="modal-background" id={`${outerClassName}`} onClick={closeModal}>
            <div className="modal-child" id={`${innerClassName}`} style={{ top: y }, { left: x }} onClick={e => e.stopPropagation()}>
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