
const randomDate = (allDates) => {
    let randNum;
    let randomDate;
    const length = Object.values(allDates).length;
    if (allDates) {
        randNum = Math.floor(Math.random() * length);
        if (randNum === 0) randNum = 1;
        randomDate = allDates[randNum];
    }
    return (
        randomDate
    )
}

export default randomDate