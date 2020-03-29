import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import ShowBookContainer from './show_book_container';
import { IndivRating } from '../stars/star';
class IndexBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateSearch: '',
            dates: [],
            loaded: false,
        }
        this.showBook = this.showBook.bind(this);
        this.filterDates = this.filterDates.bind(this)
        this.updateState = this.updateState.bind(this)
    }


    componentDidMount() {
        const dates = this.props.retrieveDates()
        Promise.all([dates]).then(() => this.setState({ loaded: true }))
    }

   

    showBook(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
    }

    
    updateState() {
        let allDates = this.props.dates.filter(indivBook =>
            indivBook.title.toLowerCase().includes(this.state.dateSearch.toLowerCase()) ||
            indivBook.author.toLowerCase().includes(this.state.dateSearch.toLowerCase()) ||
            indivBook.genre.toLowerCase().includes(this.state.dateSearch.toLowerCase())
        ).map(indivBook => indivBook);

        let notfound = images.notFound;
      
        if (allDates.length === 0) {
            this.setState({ dates: [{ title: 'Not Found', photo: notfound }] , dateSearch: '' })
        } else {
            this.setState({ dates: allDates })
        }
    }

    filterDates(text) {
        this.setState({dateSearch: text}, () => this.updateState())
    }
   
    render() {
        if (!this.props.dates) return null;
        let allDates
        (this.state.dates.length < 1) ? allDates = this.props.dates : allDates = this.state.dates
        const dates = (
                <div className="index-dates">
                    {allDates.map((book, i) => (
                    // {this.props.dates.map((book, i) => (
                        <div key={`book-${i}`} className="index-dates-book-info">
                            <div className='dropdown-book'>
                            <Link to={`/book/${book.id}`}>
                                <div className="index-book-covers">
                                    <img src={book.photo} className="index-book-cover"/>
                                </div>
                            </Link>
                            </div>
                            <Link to={`/book/${book.id}`} className="dropdown-book-content">
                                <div className='index-book-information-title'>{book.title}</div>
                                <div className='index-book-information-author'>by: {book.author}</div>
                                <div className='index-book-information-rating'>Rating: {book.average_rating}</div>
                                <div className='index-book-information-rating'>
                                        <IndivRating min={1} max={5}
                                        value={book.average_rating}
                                    />
                                </div>
                                <div className='index-book-information-genre'>Genre: {book.genre}</div>
                                {/* <div className='index-book-information-date-read'>Date Read: {book.date_read}</div> */}
                                <div className='index-book-information-date-read'>{(book.date_read) ? 
                                                                <div>Date Read: Has Read</div> :
                                                               <div>Date Read: Hasn't Read</div>}
                                </div>
                                <div className='index-book-information-description'>
                                    <div> Book Description: </div>
                                    <div> {book.description} </div>
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
                        <form className="index-book-search-bar" onSubmit={this.filterDates}>
                            <input type="text"
                                className="index-book-search-bar-text"
                                placeholder="Filter Books"
                                // value={this.state.currentHp}
                                onChange={text => this.filterDates(
                                    text.target.value
                                )}
                            />
                        </form>   
                    </div>
                    <div className="index-book-information"> 
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


export default IndexBook







