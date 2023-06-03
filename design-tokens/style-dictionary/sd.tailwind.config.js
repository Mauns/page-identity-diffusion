import StyleDictionary from 'style-dictionary'
import { singleFileParser } from './parser.js'

// FORMATS
import { cssTailwindColorsFormat } from './formats-tailwind/cssTailwindColorsFormat.js'
import { cssTypographyFormat } from './formats-web/cssTypographyFormat.js'
import { tailwindTypographyFormat } from './formats-tailwind/tailwindTypographyFormat.js'

// TO CONVERT
import { sizesRem, sizesPx, letterSpacingEm } from "./transforms-shared/sizes.js"
import { convertToString } from "./transforms-shared/convertable.js"

// TRANSFORMS
import { cssColors } from './transforms-web/cssColors.js'
import { nameTailwindColors, tailwindColors } from './transforms-tailwind/tailwindColors.js'

// MATCHERS
import { isAny, isColor } from './matchers.js'

StyleDictionary.registerParser(singleFileParser)
StyleDictionary.registerTransform(cssColors)
StyleDictionary.registerTransform(tailwindColors)
StyleDictionary.registerTransform(nameTailwindColors)
StyleDictionary.registerTransform(sizesRem)
StyleDictionary.registerTransform(sizesPx)
StyleDictionary.registerTransform(letterSpacingEm)
StyleDictionary.registerTransform(convertToString)
StyleDictionary.registerFormat(cssTailwindColorsFormat)
StyleDictionary.registerFormat(cssTypographyFormat)
StyleDictionary.registerFormat(tailwindTypographyFormat)

const styleBuilder = StyleDictionary.extend({

    source: [
        "./design-tokens/tokens/tokens.json",
    ],

    platforms: {
        cssColorVars: {
            transforms: ["cssColors", "name/cti/kebab", "color/hex8"],
            buildPath: "./src/assets/tailwind/css/",
            files: [
                {
                    filter: (token) => isColor(token.type),
                    destination: "_colors.css",
                    format: "css/variables"
                }
            ]
        },
        tailwindColorReference: {
            transforms: ["tailwindColors", "nameTailwindColors"],
            buildPath: "./src/assets/tailwind/",
            files: [
                {
                    filter: (token) => isColor(token.type),
                    destination: "_colors.cjs",
                    format: "javascript/module-flat"
                }
            ]
        },
        tailwindTypeComposition: {
            transforms: ["name/cti/camel", "sizeRem", "letterSpacingEm", "convertToString"],
            buildPath: "./src/assets/tailwind/",
            files: [
                {
                    filter: (token) => isAny(token.type, ['typography']),
                    destination: "_typography.cjs",
                    format: "tailwindTypographyFormat"
                }
            ]
        },
        cssTypeCompositions: {
            transforms: ["name/cti/kebab", "sizeRem", "letterSpacingEm", "convertToString"],
            buildPath: "./src/assets/tailwind/css/",
            files: [
                {
                    filter: (token) => isAny(token.type, ['typography']),
                    destination: "_typography.css",
                    format: "cssTypographyFormat"
                }
            ]
        },
    }

})

styleBuilder.buildAllPlatforms()