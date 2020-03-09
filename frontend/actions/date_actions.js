import * as DateAPIUtil from '../util/date_api_util';
export const RECEIVE_ALL_DATES = 'RECEIVE_ALL_DATES';
export const RECEIVE_DATE = 'RECEIVE_DATE';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const receiveAllDates = dates => ({
  type: RECEIVE_ALL_DATES,
  books
});

const receiveDate = date => ({
  type: RECEIVE_DATE,
  date
});





export const retrieveDates = () => dispatch => (
  DateAPIUtil.retrieveDates()
    .then(dates => dispatch(receiveAllDates(dates))
));

export const retrieveDate = bookId => dispatch => (
  DateAPIUtil.retrieveDate(bookId)
    .then(book => dispatch(receiveDate(book)))
);

export const updateDate = (book) => dispatch => (
  DateAPIUtil.updateDate(book)
    .then(book => dispatch(retrieveDates(book)))
)



		