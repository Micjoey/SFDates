
const randomDate = (allDates) => {
    let randNum
    let randomDate
    const length = Object.values(allDates).length
    if (allDates) {
        randNum = Math.floor(Math.random() * length)
        randomDate = allDates[randNum]
    }
    return (
        randomDate
    )
}

export default randomDate