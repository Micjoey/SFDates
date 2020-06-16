import { connect } from 'react-redux';
import { openModal } from '../../actions/model_actions';
import { retrieveDates, retrieveDate } from '../../actions/date_actions'
import { withRouter } from 'react-router';
import FilterBar from './filter_bar';

const mapStateToProps = ({ entities: { dates }}) => {
    const firstDate = dates[1]
    return {
        dates: Object.values(dates),
        uniqueDateType: firstDate.unique_date_type,
        uniqueDateLocation: firstDate.unique_date_location,
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
