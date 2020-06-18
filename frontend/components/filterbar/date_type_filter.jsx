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
        }
    }
    
    
    

    render() {
        let uniqueDateType = []
        if (this.props.uniqueDateType.length > 0) {
            uniqueDateType = this.props.uniqueDateType

        }
        // debugger
        return(
            <div className="dropdown-menu overflow-y" >
                {uniqueDateType.map((dateLocation, i) => (
                    <ul className="dropdown-menu-items dropdown-menu-items-location" key={i}>
                        <Link 
                            className="no-link" 
                            to={`/datesuggestions/${dateLocation}`}
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
    let uniqueDateType = []
    let firstId = Object.keys(entities.dates)[0]
    if (entities.dates) {
        uniqueDateType = entities.dates[firstId].unique_date_type
    }
    return {
        uniqueDateType: uniqueDateType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        retrieveDates: () => dispatch(retrieveDates()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);