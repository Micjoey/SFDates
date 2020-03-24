import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Root from './navbar'
import { openModal } from '../../actions/model_actions';
import { retrieveBooks, retrieveBook } from '../../actions/book_actions'


const mapStateToProps = ({ session, entities: { users} }) => {
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    retrieveBooks: () => dispatch(retrieveBooks())
    // idSwitch: target => dispatch(dropDownIdSwitch(target))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
