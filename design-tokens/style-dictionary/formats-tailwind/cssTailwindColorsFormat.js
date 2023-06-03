import StyleDictionary from "style-dictionary"
import { themer } from "../helper/themer.js"

export const cssTailwindColorsFormat = {
    name: "cssTailwindColorsFormat",
    formatter: (dictionary, options) => {
        let fileContents = ``
        fileContents += themer(dictionary.allTokens, ['_light', 'light', 'global'], ':root', '--', ': ')
        fileContents += themer(dictionary.allTokens, ['dark'], ':root[data-theme=dark]', '--', ': ')
        return fileContents
    }
}