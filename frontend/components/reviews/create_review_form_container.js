import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import { retrieveDate } from '../../actions/book_actions';
import AddReview from './create_review_form'
import { createReview } from '../../actions/review_actions';


const mapStateToProps = (state, ownProps) => {
    const book = state.entities.books[ownProps.match.params.dateId];
    const user = state.entities.users[state.session];
    return ({
        book: book,
        currentUser: user,
    })
}

const mapDispatchToProps = dispatch => ({
    retrieveDate: dateId => dispatch(retrieveDate(dateId)),
    createReview: review => dispatch(createReview(review)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AddReview))


