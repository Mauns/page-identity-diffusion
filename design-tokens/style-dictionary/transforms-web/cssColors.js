import { isColor } from "../matchers.js"

export const cssColors = {
    name: "cssColors",
    type: "value",
    matcher: (token) => isColor(token.type),
    transformer: (token) => { return token.value }
}