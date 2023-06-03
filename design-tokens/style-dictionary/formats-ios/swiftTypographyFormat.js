

import { toCamelCase, toLowerCase } from "js-convert-case";
import { iosFontWeights } from "../mappings.js";
import { setLetterSpacingFloat } from "../transforms-shared/sizes.js";
import pkg from 'lodash';
const { camelCase, groupBy, map, upperFirst, uniqBy } = pkg;

export const swiftTypographyFormat = ({
    name: "swiftTypographyFormat",
    formatter: (dictionary) => {
        const typographyTokens = dictionary.allTokens.filter(
          (token) => token.type === "typography"
        );
      
        const uniqueTokens = uniqBy(typographyTokens, (token) => token.path);
      
        const modifiers = uniqueTokens.map((token) => {
        //   const styleName = camelCase(token.path[0]);
          const styleName = camelCase(token.path.join("-"))
          const modifierName = `${styleName.charAt(0).toUpperCase()}${styleName.slice(1)}`;
      
          return `
            struct ${modifierName}: ViewModifier {
                func body(content: Content) -> some View {
                    content
                        .font(Font.custom("PublicSans-${token.value.fontWeight}", size: CGFloat(${token.value.fontSize})))
                        .fontWeight(.${iosFontWeights[toLowerCase(token.value.fontWeight)]})
                        .lineSpacing(CGFloat(${token.value.lineHeight}))
                        .kerning(CGFloat(${setLetterSpacingFloat(token.value.letterSpacing)}))
                        .monospacedDigit()
                        // Apply other token properties as needed
                }
            }
      
            extension View {
                func ${styleName}() -> some View {
                    self.modifier(${modifierName}())
                }
            }
          `;
        });
      
        return `
          import SwiftUI
      
          ${modifiers.join("\n")}
        `;
      }
      
})

/*
    .font(Font.custom("${token.path[0]}", size: CGFloat(${token.value.fontSize})))
    .fontWeight(.${iosFontWeights[toLowerCase(token.value.fontWeight)]})
    .lineSpacing(CGFloat(${token.value.lineHeight}))
    .kerning(CGFloat(${setLetterSpacingFloat(token.value.letterSpacing)}))
    .monospacedDigit()
    // Apply other token properties as needed
*/


// WHEN USING REFERENCES
// export const swiftTypographyFormat = ({
//     name: "swiftTypographyFormat",
//     formatter: (dictionary) => {

//         const typographyTokens = dictionary.allTokens.filter(
//             (token) => token.type === "typography"
//         );

//         const modifiers = typographyTokens.map((token) => {
//             const styleName = toCamelCase(token.path[0]);
//             const modifierName = `${styleName.charAt(0).toUpperCase()}${styleName.slice(1)}Style`;

//             console.log(token)

//             return `
//                     struct ${modifierName}: ViewModifier {
//                         func body(content: Content) -> some View {
//                             content
//                                 .font(Font.custom(StyleDictionary.${token.path.join(".")}.fontFamily, size: CGFloat(StyleDictionary.${token.path.join(".")}.fontSize)))
//                                 .fontWeight(StyleDictionary.${token.path.join(".")}.fontWeight)
//                                 .lineSpacing(CGFloat(StyleDictionary.${token.path.join(".")}.lineHeight))
//                                 .kerning(CGFloat(StyleDictionary.${token.path.join(".")}.letterSpacing))
//                                 .monospacedDigit()
//                                 // Apply other token properties as needed
//                         }
//                     }
              
//                     extension View {
//                         func ${styleName}Style() -> some View {
//                             self.modifier(${modifierName}())
//                         }
//                     }
//                   `;
//         });

//         return `
//                   import SwiftUI
              
//                   ${modifiers.join("\n")}
//                 `;

//     }
// })
