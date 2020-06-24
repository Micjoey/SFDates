import { connect } from 'react-redux'
import { retrieveDates, retrieveDate } from '../../actions/date_actions'
import { withRouter } from 'react-router';
import DateType from './date_type'
// import generateKeyNumber from '../misc/generate_key';


const mapStateToProps = (state, ownProps) => {
    const dates = state.entities.dates;
    // const user = state.entities.users[state.session];
    // const userId = state.session.id
    // const allUsers = state.entities.users
    return ({
        dates: dates,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveDate: dateId => dispatch(retrieveDate(dateId)),
    retrieveDates: info => dispatch(retrieveDates(info)), 
    // generateKeyNumber: () => dispatch(generateKeyNumber()),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DateType))


