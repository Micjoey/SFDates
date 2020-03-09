import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { IndivRating } from '../stars/star';
class IndexDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookSearch: '',
            books: [],
            loaded: false,
        }
        this.showDate = this.showDate.bind(this);
        this.filterDates = this.filterDates.bind(this)
        this.updateState = this.updateState.bind(this)
    }


    componentDidMount() {
        const books = this.props.retrieveDates()
        Promise.all([books]).then(() => this.setState({ loaded: true }))
    }

   

    showDate(id) {
        return (
        <Redirect to={`/book/${id}`}/>   
        )    
    }

    
    updateState() {
        let allDates = this.props.books.filter(indivDate =>
            indivDate.title.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivDate.author.toLowerCase().includes(this.state.bookSearch.toLowerCase()) ||
            indivDate.genre.toLowerCase().includes(this.state.bookSearch.toLowerCase())
        ).map(indivDate => indivDate);

        let notfound = images.notFound;
      
        if (allDates.length === 0) {
            this.setState({ books: [{ title: 'Not Found', photo: notfound }] , bookSearch: '' })
        } else {
            this.setState({ books: allDates })
        }
    }

    filterDates(text) {
        this.setState({bookSearch: text}, () => this.updateState())
    }
   
    render() {
        if (!this.props.books) return null;
        let allDates
        (this.state.books.length < 1) ? allDates = this.props.books : allDates = this.state.books
        const books = (
                <div className="index-books">
                    {allDates.map((book, i) => (
                    // {this.props.books.map((book, i) => (
                        <div key={`book-${i}`} className="index-books-book-info">
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
                                    <div> Date Description: </div>
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
                                placeholder="Filter Dates"
                                // value={this.state.currentHp}
                                onChange={text => this.filterDates(
                                    text.target.value
                                )}
                            />
                        </form>   
                    </div>
                    <div className="index-book-information"> 
                        {books}
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






