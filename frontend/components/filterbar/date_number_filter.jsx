import React from 'react'
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/model_actions';
import { connect } from 'react-redux';




class DateNumberFilter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const dateNumber = ['Date 1', 'Date 2', 'Date 3', 'Date 4 or More']
        return (
            <div className="dropdown-menu">
                {dateNumber.map((dateNumber, i) => (
                    <ul className="dropdown-menu-items" key={i}>
                        <Link 
                            to={`/datesuggestions/date_number_${dateNumber}`} 
                            onClick={e => this.props.shutModal(e, this.props.closeModal)} 
                            className="no-link">{dateNumber}
                        </Link>
                    </ul>
                ))}
            </div>
        )
    }
}


const mapStateToProps = ({ entities }) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        // retrieveDates: () => dispatch(retrieveDates()),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateNumberFilter);

