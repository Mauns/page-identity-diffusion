import { toKebabCase } from "js-convert-case";
import { mapFontStyle } from "../helper/typeHelper.js";
import { fontAttributes } from "../mappings.js";
import { isAny } from "../matchers.js";

export const tailwindTypography = {
    name: "tailwindTypography",
    type: "value",
    matcher: (token) => isAny(token.type, ['typography']),
    transformer: (token) => { return undefined }
}

const createTypeAttribute = (token) => {
    let style = token
    let toAppend = []

    const t = Object.entries(style.value).map((prop, i, arr) => {
        let [name, value] = prop
        const attributeName = fontAttributes[name]

        if (attributeName === "font-weight") {
            const fontWeightStyle = mapFontStyle(value)
            value = fontWeightStyle.fontWeight
            toAppend.push({ name: "font-style", value: fontWeightStyle.fontStyle })
        }

        // if (attributeName === null) { return }

        return {
            [`${toKebabCase(attributeName)}`]: value
        }
    })

    console.log(t)

    t.push(...toAppend)
    return { ...t }
}

// 

// export const cssTypographyFormat = {
//     type: "value",
//     name: "cssTypographyFormat",
//     formatter: (dictionary, options) => {

//         let fileContents = ``
//         dictionary.allTokens.forEach(style => {

//             let toAppend = []
//             const t = Object.entries(style.value).map((prop, i, arr) => {
//                 let [name, value] = prop

//                 const attributeName = fontAttributes[name]

//                 if (attributeName === "font-weight") {
//                     const fontWeightStyle = mapFontStyle(value)
//                     value = fontWeightStyle.fontWeight
//                     toAppend.push({ name: "font-style", value: fontWeightStyle.fontStyle })
//                 }

//                 return {
//                     name: attributeName,
//                     value: value
//                 }
//             })

//             t.push(...toAppend)

//             let cssClass = ""
//             cssClass += `.${style.name} { \n`
//             t.forEach((tt, i) => {
//                 if (tt.name !== null) {
//                     cssClass += `${tt.name}: ${tt.value}; \n`
//                 }
//             })
//             cssClass += `font-feature-settings: "tnum"; \n`
//             cssClass += `}\n\n`

//             fileContents += cssClass
//         })

//         return fileContents
//     }
// }