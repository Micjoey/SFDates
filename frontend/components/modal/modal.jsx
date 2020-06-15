import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/model_actions'
import DateNumberFilter from '../filterbar/date_number_filter';
import LoginFormContainer from '../session_dnd/login_form_container'
import SignUpFormContainer from '../session_dnd/signup_form_container'



function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch(modal) {
        case 'date number':
            console.log("hit dum")
            component = <DateNumberFilter/>;
            break;
        case 'login':
            console.log("hit login")
            component = <LoginFormContainer/>;
            break;
        case 'sign up':
            console.log("hit login")
            component = <SignUpFormContainer/>;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
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