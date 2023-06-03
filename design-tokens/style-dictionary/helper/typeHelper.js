import { toLowerCase } from "js-convert-case";
import { fontWeights, fontStyles } from "../mappings.js"

export const mapFontStyle = (tokenValue) => {
    let fontWeightVal = fontWeights.normal
    let fontStyleVal = fontStyles.normal

    const attribute = toLowerCase(tokenValue)
    const attributeSplitted = attribute.split(" ")

    // const newAttributes = attributeSplitted.map((a, i) => {
    //     let fontWeight = Object.entries(fontWeights).filter(fw => {
    //         const [key, value] = fw
    //         return a === key
    //     })[0]
    //     let fontStyle = Object.entries(fontStyles).filter(fs => {
    //         const [key, value] = fs
    //         return a === key
    //     })[0]

    //     if (fontWeight === undefined) fontWeight = null
    //     if (fontStyle === undefined) fontStyle = null

    //     return {
    //         fontWeight,
    //         fontStyle
    //     }
    // })

    let fontWeight = Object.entries(fontWeights).filter(fw => {
        const [key, value] = fw
        return attribute.includes(key)
    })[0]
    let fontStyle = Object.entries(fontStyles).filter(fs => {
        const [key, value] = fs
        return attribute.includes(key)
    })[0]

    // if (fontWeight === undefined) fontWeight = null
    // if (fontStyle === undefined) fontStyle = null

    
    if (fontWeight === undefined) fontWeightVal = fontWeights.normal
    else fontWeightVal = fontWeight[1]
    
    if (fontStyle === undefined) fontStyleVal = fontStyles.normal
    else fontStyleVal = fontStyle[1]

    return {
        fontWeight: fontWeightVal,
        fontStyle: fontStyleVal
    }
}

// const fontStyleAI = (value = "normal") => {
//     if (fontStyles[value]) {
//         return fontStyles[value];
//     } else if (value.includes("italic") || value.includes("kursiv") || value.includes("oblique")) {
//         return "italic";
//     }
//     return "normal";
// }
