export const retrieveDates = (info) => {
    if (!!info) {
        return (
            $.ajax({
                method: 'GET',
                url: `/api/datesuggestions/?${info[0]}=${info[1]}`
            })
        )
    }
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









