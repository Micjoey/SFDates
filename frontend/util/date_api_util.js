export const retrieveDates = () => {
    debugger
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







