import { fontAttributes, fontStyles } from "../mappings.js"
import { mapFontStyle } from "../helper/typeHelper.js"

/*——————————————————————————————————————
This function is transforming the typography attributes
into css classes that represent the typography styles in figma.

This function is called in the config as a formatter.

1. iterate over all tokens given for this formatter. (This will be Typography styles which contain further tokens)
2. Open up toAppend Array to store font-attributes that might have to be added later
3. iterate over the tokens within the given tokens
    a. map the correct fontAttributes from the keys of the tokens
    b. check for font-weights
        a. font-weights value currently holds a single string with (!) font-weight + font-style
        b. map the font-weights & font-styles seperately and split them up within mapFontStyle()
        c. push font-style -> toAppend[]
    d. iterate and return values
4. push toAppend to t
5. format the tokens so they make-up a css class

Bare with my code structure, I’m just a designer
——————————————————————————————————————*/

export const cssTypographyFormat = {
    type: "value",
    name: "cssTypographyFormat",
    formatter: (dictionary, options) => {

        let fileContents = ``
        dictionary.allTokens.forEach(style => {

            let toAppend = []
            const t = Object.entries(style.value).map((prop, i, arr) => {
                let [name, value] = prop

                const attributeName = fontAttributes[name]

                if (attributeName === "font-weight") {
                    const fontWeightStyle = mapFontStyle(value)
                    value = fontWeightStyle.fontWeight
                    toAppend.push({ name: "font-style", value: fontWeightStyle.fontStyle })
                }

                return {
                    name: attributeName,
                    value: value
                }
            })

            t.push(...toAppend)

            let cssClass = ""
            cssClass += `.${style.name} { \n`
            t.forEach((tt, i) => {
                if (tt.name !== null) {
                    cssClass += `${tt.name}: ${tt.value}; \n`
                }
            })
            cssClass += `font-feature-settings: "tnum"; \n`
            cssClass += `}\n\n`

            fileContents += cssClass
        })

        return fileContents
    }
}