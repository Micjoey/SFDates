export const retrieveDates = (key, id) => (
    $.ajax({
        method: 'GET',
        url: `/api/datesuggestions`
    })
)


export const retrieveDate = dateId => (
    $.ajax({
        method: 'GET',
        url: `/api/datesuggestions/${dateId}`
    })
)







