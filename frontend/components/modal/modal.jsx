import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/model_actions'
import DateNumberFilter from '../filterbar/date_number_filter';
import LoginFormContainer from '../session_form/login_form_container'
import SignUpFormContainer from '../session_form/sign_up_form_container'



function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    let outerClassName = "modal-background"
    let innerClassName = "modal-child"
    switch(modal) {
        case 'date number':
            outerClassName += " date-number-dropdown"
            innerClassName += " date-number-dropdown-child"
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


    return (
        <div className={`${outerClassName}`} onClick={closeModal}>
            <div className={`${innerClassName}`} onClick={e => e.stopPropagation()}>
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