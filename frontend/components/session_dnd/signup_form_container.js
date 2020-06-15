import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { openModal, closeModal} from '../../actions/model_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signUp: (user) => dispatch(signUp(user)),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);