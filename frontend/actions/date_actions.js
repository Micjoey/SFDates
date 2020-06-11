import * as DateAPIUtil from '../util/date_api_util';
export const RECEIVE_ALL_DATES = 'RECEIVE_ALL_DATES';
export const RECEIVE_DATE = 'RECEIVE_DATE';

const receiveAllDates = dates => ({
  type: RECEIVE_ALL_DATES,
  dates
});

const receiveDate = date => ({
  type: RECEIVE_DATE,
  date
});



export const retrieveDates = () => dispatch => {
  debugger
  return (
    DateAPIUtil.retrieveDates()
      .then(dates => dispatch(receiveAllDates(dates))
    )
  )
};

export const retrieveDate = dateId => dispatch => (
  DateAPIUtil.retrieveDate(dateId)
    .then(date => dispatch(receiveDate(date)))
);



		