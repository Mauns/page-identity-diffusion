import _ from "lodash";

export const swiftTypographyAttributesFormat = ({
    name: "swiftTypographyAttributesFormat",
    formatter: (dictionary) => {
        const typographyTokens = dictionary.allTokens.filter(
            (token) => token.type === "typography"
        );

        const flattenedTokens = typographyTokens.map((token) => {
            
            const flatToken = _.cloneDeep(token);
            flatToken.value = _.merge({}, ...Object.values(token.value));
            return flatToken;
        });
        
        const enumCases = typographyTokens.map((token) => {
            const styleName = _.camelCase(token.path[0]);
            const enumName = `${styleName}`;
            return `
            enum ${enumName}: String {
              case fontFamily = "${token.value.fontFamily}"
              case fontWeight = "${token.value.fontWeight}"
              case lineHeight = "${token.value.lineHeight}"
              case fontSize = "${token.value.fontSize}"
              case letterSpacing = "${token.value.letterSpacing}"
              // Add other token properties as needed
            }
          `;
        });

        return `
          import SwiftUI
      
          enum StyleDictionary {
            ${enumCases.join("\n")}
          }
        `;
    }
})