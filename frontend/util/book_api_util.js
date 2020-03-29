export const retrieveDates = (key, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books`
    })
)


export const retrieveDate = bookId => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}`
    })
)

export const updateBook = book => (
    $.ajax({
        method: 'PATCH',
        url: `/api/books/${book.id}`,
        data: {book}
    })
)





