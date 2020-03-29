export const retrieveDates = (key, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
)


export const retrieveDate = dateId => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${dateId}`
    })
)

export const updateBook = book => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books/${book.id}`,
        data: {book}
    })
)





