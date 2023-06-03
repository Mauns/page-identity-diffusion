import StyleDictionary from 'style-dictionary'
import { singleFileParser } from './parser.js'

// FORMATS
import { cssColorsFormat } from './formats-web/cssColorsFormat.js'
import { cssTypographyFormat } from './formats-web/cssTypographyFormat.js'

// TO CONVERT
import { sizesRem, sizesPx, letterSpacingEm } from "./transforms-shared/sizes.js"
import { convertToString } from "./transforms-shared/convertable.js"

// TRANSFORMS
import { cssColors } from './transforms-web/cssColors.js'

// MATCHERS
import { isAny, isColor } from './matchers.js'

StyleDictionary.registerParser(singleFileParser)
StyleDictionary.registerTransform(cssColors)
StyleDictionary.registerTransform(sizesRem)
StyleDictionary.registerTransform(sizesPx)
StyleDictionary.registerTransform(letterSpacingEm)
StyleDictionary.registerTransform(convertToString)
StyleDictionary.registerFormat(cssColorsFormat)
StyleDictionary.registerFormat(cssTypographyFormat)

const styleBuilder = StyleDictionary.extend({

    
    source: [
        "./design-tokens/tokens/tokens.json",
    ],
    // include: [

    //     // Same set for every Plattform
    //     `./tokens/wso/20_semantic/**/*.json`,
    //     `./tokens/wso/colors-global.json`,

    //     // Platformspecific Set
    //     `./tokens/wso/21_semantic-web/**/*.json`,
    // ],

    platforms: {
        cssColorVars: {
            transforms: ["cssColors", "name/cti/kebab", "color/hex8"],
            buildPath: "public/assets/web/css/",
            files: [
                {
                    filter: (token) => isColor(token.type),
                    destination: "_colors.css",
                    format: "cssColorsFormat"
                }
            ]
        },
        cssDimensionVars: {
            transforms: ["name/cti/kebab", "sizeRem"],
            buildPath: "public/assets/web/css/",
            files: [
                {
                    filter: (token) => isAny(token.type, ['borderRadius', 'spacing', 'sizing', 'breakpoint', 'layout']),
                    destination: "_dimensions.css",
                    format: "css/variables"
                }
            ]
        },

        /*——————————————————————————————————————
        Only if you want single attributes from the fonts
        Currently not supporting correct font-weights and font-styles
        as in the classes … might have to write a custom formatter   
        
        cssTypeVars: {
            transforms: ["name/cti/kebab", "sizeRem", "letterSpacingEm","convertToString"],
            buildPath: "public/assets/web/css/",
            files: [
                {
                    filter: (token) => isAny(token.type, [
                        'fontFamilies',
                        'fontWeights',
                        'lineHeights',
                        'fontSizes',
                        'letterSpacing',
                        'paragraphSpacing',
                        'textCase',
                        'textDecoration'
                    ]),
                    destination: "_typeAttributes.css",
                    format: "css/variables"
                }
            ]
        },
        ——————————————————————————————————————*/

        cssTypeCompositions: {
            transforms: ["name/cti/kebab", "sizeRem", "letterSpacingEm", "convertToString"],
            buildPath: "public/assets/web/css/",
            files: [
                {
                    filter: (token) => isAny(token.type, ['typography']),
                    destination: "_typography.css",
                    format: "cssTypographyFormat"
                }
            ]
        },
        scssColorVars: {
            transforms: ["cssColors", "name/cti/kebab", "color/hex8"],
            buildPath: "public/assets/web/scss/",
            files: [
                {
                    filter: (token) => isColor(token.type),
                    destination: "_colors.scss",
                    format: "scss/variables"
                }
            ]
        },
    }

})

styleBuilder.buildAllPlatforms()