export const retrieveDates = () => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/datesuggestions`
        })
    )
}



export const retrieveDate = dateId => (
    $.ajax({
        method: 'GET',
        url: `/api/datesuggestions/${dateId}`
    })
)







