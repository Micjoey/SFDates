import { connect } from 'react-redux'
import { retrieveDates, retrieveDate } from '../../actions/date_actions'
import { withRouter } from 'react-router';
import DateType from './date_type';

const mapStateToProps = (state, ownProps) => {
    debugger
    const date = state.entities.dates[ownProps.match.params.dateNumber];
    // const user = state.entities.users[state.session];
    // const userId = state.session.id
    // const allUsers = state.entities.users
    return ({
        date: date,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveDate: dateId => dispatch(retrieveDate(dateId)),
    retrieveDates: () => dispatch(retrieveDates()) 
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DateType))


