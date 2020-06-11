import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import {retrieveDates, retrieveDate} from '../../actions/date_actions'
import Splash from './splash'


const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        allDates: () => dispatch(retrieveDates()),
        retrieveDate: dateId => dispatch(retrieveDate(dateId)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);

