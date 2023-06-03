/*——————————————————————————————————————
Transformer Functions
——————————————————————————————————————*/

const setRem = (value) => {
    if (!isNaN(value)) {
        return `${parseFloat((value / 16).toFixed(4))}rem`
    } else {
        return value
    }
}

const setPx = (value) => {
    if (!isNaN(value)) {
        return `${value}px`
    } else {
        return value
    }
}

const setLetterSpacingEm = (value) => {
    let result = value
    if (isNaN(value) && value.includes("%")) {
        let ls = parseFloat(value.split("%")[0]) / 100;
        let newLs = `${ls}em`
        return result = newLs
    }
    return result
}

export const setLetterSpacingFloat = (value) => {
    let result = value
    if (isNaN(value) && value.includes("%")) {
        let ls = parseFloat(value.split("%")[0]) / 100;
        let newLs = ls
        return result = newLs
    }
    return result
}

/*——————————————————————————————————————
Transformer being imported into style-dictionary config
——————————————————————————————————————*/

export const sizesPx = {
    type: 'value',
    name: 'sizePx',
    transitive: true,
    matcher: (token) => {
        // console.log(token)
        return token.type === 'spacing' ||
            token.type === 'sizing' ||
            token.type === 'borderRadius' ||
            token.type === 'borderWidth' ||
            token.type === 'layout';
    },
    transformer: (token) => {
        // token.value will be resolved and transformed at this point
        return setPx(token.value)
    }
}

export const sizesRem = {
    type: 'value',
    name: 'sizeRem',
    transitive: true,
    matcher: (token) => {
        return token.type === 'spacing' ||
            token.type === 'sizing' ||
            token.type === 'breakpoint' ||
            token.type === 'borderRadius' ||
            token.type === 'borderWidth' ||
            token.type === 'layout' ||
            token.type === 'fontSizes' ||
            token.type === 'lineHeights';
    },
    transformer: (token) => {
        // token.value will be resolved and transformed at this point
        return setRem(token.value)
    }
}

export const letterSpacingEm = {
    type: 'value',
    name: 'letterSpacingEm',
    transitive: true,
    matcher: (token) => {
        return token.type === 'letterSpacing'
    },
    transformer: (token) => {
        return setLetterSpacingEm(token.value)
    }
}