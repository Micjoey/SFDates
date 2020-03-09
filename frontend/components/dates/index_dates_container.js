import { connect } from 'react-redux'
import { retrieveDates, retrieveDate } from '../../actions/book_actions'
import IndexDate from './index_books'
import { withRouter } from 'react-router'

const mapStateToProps = (state) => {
    return {
        books: Object.values(state.entities.books)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveDates: () => dispatch(retrieveDates()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexDate)
