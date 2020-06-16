import { connect } from 'react-redux';
import { openModal } from '../../actions/model_actions';
import { retrieveDates, retrieveDate } from '../../actions/date_actions'
import { withRouter } from 'react-router';
import FilterBar from './filter_bar';

const mapStateToProps = ({ entities: { dates }}) => {
    return {
        dates: Object.values(dates),
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: (modal, idName) => dispatch(openModal(modal, idName)),
    retrieveDates: () => dispatch(retrieveDates()),
    retrieveDate: dateId => dispatch(retrieveDate(dateId))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBar));
