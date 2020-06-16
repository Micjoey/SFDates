import { connect } from 'react-redux';
import SearchBar from './search_bar'
import { openModal } from '../../actions/model_actions';
import { retrieveDates, retrieveDate } from '../../actions/date_actions'
import { withRouter } from 'react-router';


const mapStateToProps = ({ entities: { dates },  }) => {
    return {
        dates: Object.values(dates),
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    retrieveDates: () => dispatch(retrieveDates()),
    retrieveDate: dateId => dispatch(retrieveDate(dateId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar));
