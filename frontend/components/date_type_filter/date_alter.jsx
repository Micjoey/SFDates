import React from 'react'

    const DateAlter = ({match}) => {
        let ele = Object.keys(match.params)[0]
        switch (ele) {
            case "title":
                return ele = "Title"
            case "location":
                return ele = "Location"
            case "title":
                return ele = "Title"
            case "date_number":
                ele = ele.split("_").join(" ")
                return ele = capitalize(ele)
            case "address_location":
                return ele = capitalize(ele)
            case "date_type":
                return ele = capitalize(ele)
            case "cost":
                return ele = capitalize(ele)
            case "description":
                return ele = capitalize(ele)
            default:
                break;
        }
        return ele
    }


const capitalize = (sentence) => {
    let splitter
    if (sentence.includes("_")) {
        splitter = "_"
    } else {
        splitter = " "
    }
    sentence = sentence
        .split(splitter)
        .map(word => {
            if (!word.includes("#")) {
                return word = word[0].toUpperCase() + word.slice(1, word.length)
            } else {
                return word = word.slice(0, 1) + word[1].toUpperCase() + word.slice(2, word.length)
            }
        })
    sentence = sentence.join(" ")
    return sentence
}