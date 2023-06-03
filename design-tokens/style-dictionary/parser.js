export const singleFileParser = {
    pattern: /\.json$/,
    parse: ({ filePath, contents }) => {
        const file = JSON.parse(contents)

        let newObject = {};
        for (let outerKey in file) {
            for (let innerKey in file[outerKey]) {
                newObject[innerKey] = file[outerKey][innerKey];
            }
        }
        
        return newObject
    },
}