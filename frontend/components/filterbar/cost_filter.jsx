import React from 'react'
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/model_actions';
import { connect } from 'react-redux';




class CostFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const costAmount = ['None', 'Low', 'Medium', 'Expensive', 'Very Expensive']
        return (
            <div className="dropdown-menu">
                {costAmount.map((costAmount, i) => (
                    <ul className="dropdown-menu-items" key={i}>
                        <Link 
                            to={`/datesuggestions/date_cost_${costAmount}`}
                            className="no-link"
                            onClick={e => this.props.shutModal(e, this.props.closeModal)}
                        >
                            {costAmount}
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

export default connect(mapStateToProps, mapDispatchToProps)(CostFilter);


