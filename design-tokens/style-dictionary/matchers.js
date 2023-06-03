export const isColor = (type) => {
    return type === "color"
}


export const isDimension = (type) => {
    return type === 'spacing' ||
        type === 'sizing' ||
        type === 'breakpoint' ||
        type === 'borderRadius' ||
        type === 'borderWidth' ||
        type === 'layout' ||
        type === 'fontSizes' ||
        type === 'lineHeights';
}

export const isAny = (type, desiredType = ['']) => {
    return desiredType.some(t => { return t === type })
}