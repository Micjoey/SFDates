import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { retrieveDates } from '../../actions/date_actions'
import { closeModal } from '../../actions/model_actions';


class TypeFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            allDates: [],
            uniqueDateType: [],
        }
        this.fixState = this.fixState.bind(this)
    }
    
    componentDidMount() {
        const dates = this.props.dates
        Promise.all([dates])
        .then(this.fixState())
        .then(() => this.setState({ loaded: true}))
    }
  

    fixState() {
        this.setState({allDates: this.props.dates})
    }

    render() {
        return(
            <div className="dropdown-menu overflow-y" >
                {this.props.dateType.map((dateLocation, i) => (
                    <ul className="dropdown-menu-items dropdown-menu-items-location" key={i}>
                        <Link 
                            className="no-link" 
                            to={`/datesuggestions/date_type_${dateLocation}`}
                            onClick={e => this.props.shutModal(e, this.props.closeModal)}
                        >
                            {dateLocation}
                        </Link>
                                
                    </ul>
                ))}
            </div>
        )
    }
}

const mapStateToProps = ({entities}) => {
    let dates = Object.values(entities.dates)
    const dateType = [...new Set(dates.map(date => date.date_type))]
    return {
        dates: dates,
        dateType: dateType,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveDates: () => dispatch(retrieveDates()),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);