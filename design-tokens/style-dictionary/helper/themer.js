export const themer = (tokens, themes = [''], contentBegin = '', prefix = '', seperator = '', suffix = '') => {
    let fileContents = `${contentBegin} {\n`
    themes.forEach(theme => {
        tokens.map(t => {
            if (t.name.split("-")[0] === theme) {
                const tokenName = t.name.slice(theme.length + 1)
                fileContents += `${prefix}${tokenName}${seperator}${t.value}; \n`
            }
        })
    })
    fileContents += '} \n'
    return fileContents
}