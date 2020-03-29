import React from 'react';
import { formatDateWithDay } from '../../util/calendar_date_util';
import AddShelfContainer from './add_shelf_container';
import CreateReviewContainer from '../reviews/create_review_form_container';
import { deleteReview } from '../../actions/review_actions';
import { IndivRating } from '../stars/star';



class showDate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            hasRead: '',
        }
    }

    componentDidMount() {
        const bookMount = this.props.retrieveDate(this.props.match.params.dateId)
        const usersMount = this.props.retrieveAllUsers()
        Promise.all([bookMount, usersMount]).then( () => this.setState({loaded:true}))
    }


    handleDelete(reviewID) {
        deleteReview(reviewID)
        this.props.retrieveDate(this.props.date.id)
    }

    hasRead() {
        let date = this.props.date
        date.date_read = !date.date_read
        this.props.updateDate(date)
            .then(() => this.setState({hasRead: date.date_read}))
            .then(() => this.props.retrieveDate(this.props.match.params.dateId))
        
    }

    
    
    render() {
        if (this.state.loaded) {
            const date = this.props.date
            const cover = (
                <img className="show-date-cover" src={date.photo} />
            )
            const allUsers = this.props.allUsers
            const shelf = (date.unique_shelves.length > 1) ? <p>On Shelves:</p> : <p>On Shelf:</p>
            const book_information = (typeof this.props.date !== 'undefined') ? (
                <div className="show-date-information">
                        <div className='show-date-information-title'>{date.title}</div>
                        <div className='show-date-information-author'>by: {date.author}</div>
                    <div className='show-date-information-rating '>Avg. Rating: {date.average_rating} 
                            <IndivRating min={1} max={5}
                                value={date.average_rating}
                            />
                            
                        </div>
                        <div className='show-date-information-genre'>Genre: {date.genre}</div>
                        <div className='show-date-information-description'>Description: {date.description} </div>
                </div>
            ) : (<p>Sorry! No Dates!</p>)
            return (
            <div className='background-color'>
                <div className="show-date">
                    <div className='show-date-background'>
                        <div className='show-date-all-information-and-reviews'>
                            <div className='show-date-all-information'>
                                <div className="show-date-information-cover-image">
                                    {cover}
                                </div>
                                <div className="show-date-information-detail">
                                    {book_information}
                                </div>
                            </div>
                            <div className="show-date-review">
                                <div className="leave-a-review"> Leave a review! </div>
                                <CreateReviewContainer book_id={date.id} user_id={this.props.userId} />
                            </div>
                        </div>
                        <div className="show-date-my-activity"> 
                            <div className="show-date-add-to-shelf"> 
                                <AddShelfContainer />
                            </div>
                            
                            <div className="empty-space">
                                {/* empty space */}
                            </div>
                            <div className="show-date-activity-rating">
                                <params className="show-date-my-activity-text">MY date ACTIVITY</params>
                            </div>
                            <div className="show-date-activity-shelf">
                                <div className="show-date-unique-shelves">
                                    {shelf}
                                    <div className="dropdown-content2">
                                        <ul className="show-date-all-shelves">
                                            {date.unique_shelves.map((shelf, i)=>(
                                                (shelf.user_id === this.props.userId) ? <ul key={`shelf-${i}`}>{shelf.bookshelf_title}</ul> : <div key={`shelf-${i}`}> None </div>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="show-date-myactivity">
                                    {(date.date_read) ?
                                    <div>Date: Read</div> :
                                    <div>Date: Hasn't Read Yet</div>}
                                </div>
                                <button className="show-date-myactivity" onClick={() => this.hasRead()}>
                                    {(!date.date_read) ?
                                    <div>Mark As: Read</div> :
                                    <div>Mark As: Hasn't Read Yet</div>}
                                </button>
                            </div>
                                <div className="show-date-activity-status">

                                </div>
                                <div className="show-date-activity-review">

                                </div>
                        </div>
                        <div className="show-date-reviews">
                            <div className="show-date-all-reviews">
                                <div className="show-date-all-reviews-text">ALL REVIEWS</div>
                                    {date.reviews.sort(function(b,a) {
                                        return (new Date(a.created_at)) - (new Date(b.created_at))
                                        }
                                    ).map((review,i) => (
                                        <div key={`review-${i}`} className="show-date-individual-review">
                                            <div className="show-date-individual-review-title">Review Title: {review.title}</div>
                                            <div className="show-date-individual-review-date">Date Reviewed: {formatDateWithDay(review.created_at)}</div>
                                            <div className="show-date-individual-review-id">User: {allUsers[review.user_id].username}</div>
                                            {/* <div className="show-date-individual-review-rating">User Rating: {review.rating}</div> */}
                                            <div className="show-date-individual-review-rating">User Rating: 
                                                <IndivRating min={1} max={5}
                                                    value={review.rating}
                                                />
                                            </div>
                                            <div className="show-date-individual-review-body">Review: {review.body}</div>
                                            <div>{(review.user_id === this.props.userId) ? <button 
                                                onClick={() => this.handleDelete(review.id)}>
                                                    Delete Review</button> : null }
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        } else {
            return (<div className="loading-page">
                <div className="loading-sections">
                    <div>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span className="sr-only">Loading...If longer than 1 min, please refresh the page.</span>
                    </div>
                </div>
            </div>)}
    }
}

export default showDate
