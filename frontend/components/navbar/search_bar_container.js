import { connect } from 'react-redux';
import SearchBar from './search_bar'
import { openModal } from '../../actions/model_actions';
import { retrieveDates, retrieveDate } from '../../actions/book_actions'
import { withRouter } from 'react-router';


const mapStateToProps = ({ entities: { books },  }) => {
    return {
        books: Object.values(books),
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    retrieveDates: () => dispatch(retrieveDates()),
    retrieveDate: bookId => dispatch(retrieveDate(bookId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar));
