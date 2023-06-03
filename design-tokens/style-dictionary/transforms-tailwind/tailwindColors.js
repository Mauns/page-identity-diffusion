import { toKebabCase } from "js-convert-case"
import { isColor } from "../matchers.js"

export const nameTailwindColors = {
    name: "nameTailwindColors",
    type: "name",
    matcher: (token) => isColor(token.type),
    transformer: (token) => { return toKebabCase(removePrefix(token.path).join("-")) }
}

export const tailwindColors = {
    name: "tailwindColors",
    type: "value",
    matcher: (token) => isColor(token.type),
    transformer: (token) => { return createCssReference(token.path) }
}

const createCssReference = (path) => {
    const newPath = toKebabCase(removePrefix(path).join("-"))
    return `var(--${newPath})`
}

const removePrefix = (path) => {
    if (path[0] === 'light' || path[0] === 'dark' || path[0] === 'global') {
        path.shift();
    }
    return path;
}
