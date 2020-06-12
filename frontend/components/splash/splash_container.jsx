import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import {retrieveDates, retrieveDate} from '../../actions/date_actions'
import Splash from './splash'


const mapStateToProps = ({ session, entities: {users, dates}}) => {
// const mapStateToProps = (state, ownProps) => {
    const userId = users.id
    const allDates = Object.values(dates)
    // const allDates = Object.values(state.session.dates)
    return {
        currentUser: userId,
        dates: allDates,
    };
};

const mapDispatchToProps = dispatch => ({
    retrieveDates: () => dispatch(retrieveDates()),
    retrieveDate: dateId => dispatch(retrieveDate(dateId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);

