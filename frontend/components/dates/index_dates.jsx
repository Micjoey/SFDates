import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { IndivRating } from '../stars/star';
class IndexDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            loaded: false,
        }
        this.showDate = this.showDate.bind(this);
        this.filterDates = this.filterDates.bind(this)
        // this.updateState = this.updateState.bind(this)
    }


    componentDidMount() {
        const dates = this.props.retrieveDates()
        Promise.all([dates]).then(() => this.setState({ loaded: true }))
    }

   

    showDate(id) {
        return (
        <Redirect to={`/date/${id}`}/>   
        )    
    }

    
    // updateState() {
    //     let allDates = this.props.dates.filter(indivDate =>
    //         indivDate.title.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
    //         indivDate.author.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
    //         indivDate.genre.toLowerCase().includes(this.state.bookSearch.toLowerCase())
    //     ).map(indivDate => indivDate);

    //     let notfound = images.notFound;
      
    //     if (allDates.length === 0) {
    //         this.setState({ dates: [{ title: 'Not Found', photo: notfound }] , bookSearch: '' })
    //     } else {
    //         this.setState({ dates: allDates })
    //     }
    // }

    filterDates(text) {
        this.setState({bookSearch: text}, () => this.updateState())
    }
   
    render() {
        if (!this.props.dates) return null;
        let allDates
        (this.state.dates.length < 1) ? allDates = this.props.dates : allDates = this.state.dates
        const dates = (
                <div className="index-dates">
                    {allDates.map((date, i) => (
                    // {this.props.dates.map((date, i) => (
                        <div key={`date-${i}`} className="index-dates-date-info">
                            <div className='dropdown-date'>
                            <Link to={`/date/${date.id}`}>
                                <div className="index-date-covers">
                                    {/* <img src={date.photo} className="index-date-cover"/> */}
                                </div>
                            </Link>
                            </div>
                            <Link to={`/date/${date.id}`} className="dropdown-date-content">
                                <div className='index-date-information-title'>{date.title}</div>
                                <div className='index-date-information-author'>by: {date.author}</div>
                                <div className='index-date-information-rating'>Rating: {date.average_rating}</div>
                                <div className='index-date-information-rating'>
                                        <IndivRating min={1} max={5}
                                        value={date.average_rating}
                                    />
                                </div>
                                <div className='index-date-information-genre'>Genre: {date.genre}</div>
                                {/* <div className='index-date-information-date-read'>Date Read: {date.date_read}</div> */}
                                <div className='index-date-information-date-read'>{(date.date_read) ? 
                                                                <div>Date Read: Has Read</div> :
                                                               <div>Date Read: Hasn't Read</div>}
                                </div>
                                <div className='index-date-information-description'>
                                    <div> Date Description: </div>
                                    <div> {date.description} </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            )  
        if (this.state.loaded) {
            return (
                <div className='background-color'>
                    <div className='search-bar'>
                        <form className="index-date-search-bar" onSubmit={this.filterDates}>
                            <input type="text"
                                className="index-date-search-bar-text"
                                placeholder="Filter Dates"
                                // value={this.state.currentHp}
                                onChange={text => this.filterDates(
                                    text.target.value
                                )}
                            />
                        </form>   
                    </div>
                    <div className="index-date-information"> 
                        {dates}
                    </div>
                </div>
            )
        } else {
            return (<div className="loading-page">
				<div className="loading-sections">
					<div className='loading-circle'>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
					</div>
                    <div className='loading-text'>
                        <h1>Loading...If longer than 1 min, please refresh the page.</h1>
                    </div>
				</div>
			</div>)
        }
        
    }

}


export default IndexDate







