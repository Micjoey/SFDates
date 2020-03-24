import { connect } from 'react-redux'
import { retrieveDates, retrieveDate } from '../../actions/book_actions'
import IndexDate from './index_dates'
import { withRouter } from 'react-router'

const mapStateToProps = (state) => {
    return {
        dates: Object.values(state.entities.dateSuggestions)
    }
}

const mapDispatchToProps = dispatch => ({
    retrieveDates: () => dispatch(retrieveDates()),
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexDate)
