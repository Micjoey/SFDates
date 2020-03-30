import { connect } from 'react-redux';
import { signUp, login } from '../../actions/session_actions';
import SignupForm2 from './sign_up_form2';
import { openModal, closeModal } from '../../actions/model_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signUp(user)),
        login: (user) => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm2);