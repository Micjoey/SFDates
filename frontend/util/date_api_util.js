export const retrieveDates = (key, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
)


export const retrieveDate = dateId => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}`
    })
)







