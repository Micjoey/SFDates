import { connect } from 'react-redux'
import { retrieveDate} from '../../actions/date_actions'
import ShowDate from './show_date'
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const date = state.entities.dates[ownProps.match.params.bookId];
    // const user = state.entities.users[state.session];
    const userId = state.session.id
    const allUsers = state.entities.users
    return ({
        date: date,
        // currentUser: user,
        allUsers: allUsers,
        userId: userId
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveDate: bookId => dispatch(retrieveDate(bookId)),
    retrieveAllUsers: () => dispatch(retrieveAllUsers()),
    // updateDate: date => dispatch(updateDate(date))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowDate))


