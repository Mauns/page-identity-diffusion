const setString = (value) => {
    let first_letter = value.split("")[0]
    let double_quote = first_letter === '"'
    let single_quote = first_letter === "'"
    // let dings_quote = first_letter === ""
    if (single_quote ||
        double_quote) {
        return value
    } else {
        return "'" + value + "'"
    }
}

export const convertToString  = {
    type: 'value',
    name: 'convertToString',
    transitive: true,
    matcher: (token) => {
        return token.type === 'fontFamilies'
    },
    transformer: (token) => {
        return setString(token.value)
    }
}