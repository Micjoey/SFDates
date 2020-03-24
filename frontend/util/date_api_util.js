export const retrieveDates = (key, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/dates`
    })
)


export const retrieveDate = dateId => (
    $.ajax({
        method: 'GET',
        url: `/api/dates/${bookId}`
    })
)







