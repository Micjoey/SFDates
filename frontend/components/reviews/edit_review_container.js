import { connect } from 'react-redux'
import { retrieveDate } from '../../actions/book_actions';
import { editReview } from '../../actions/review_actions';
import EditReview from './edit_review'


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
    editReview: review => dispatch(editReview(review)),
    deleteReview: (id) => dispatch(deleteReview(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditReview)


