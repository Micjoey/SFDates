

const dropDown = (idName) => {
    const currentDiv = document.getElementById(`${idName}`)
    if (currentDiv.style.display === "none" || currentDiv.style.display === "") {
        currentDiv.style.display = "block"
    } else {
        currentDiv.style.display = "none"
    }
}

export default dropDown