import React, { useState } from 'react'

export default function generateKeyNumber() {
    const [keys, newKeys] = useState(0);
    let random = Math.random() * Math.random()
    let checker = false
    while (!checker) {
        if (keys.includes(random)) {
            checker = false;
            random = Math.random() * Math.random() * 2000
        } else {
            newKeys(keys + 1)
            checker = true
        }
    }
    return random
}