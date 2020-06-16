import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { openModal, closeModal } from '../../actions/model_actions';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session,
        formType:'login',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        openModal: (modal, idName) => dispatch(openModal(modal, idName)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);