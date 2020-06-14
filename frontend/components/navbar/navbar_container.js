import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar'
import { openModal, closeModal } from '../../actions/model_actions';
import { retrieveDates } from '../../actions/date_actions';



const mapStateToProps = ({ session, entities: { users} }) => {
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: modal => dispatch(closeModal(modal)),
    retrieveDates: () => dispatch(retrieveDates())
    // idSwitch: target => dispatch(dropDownIdSwitch(target))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
