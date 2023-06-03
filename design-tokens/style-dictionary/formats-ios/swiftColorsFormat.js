export const swiftColorsFormat = ({
    name: 'swiftColorsFormat',
    formatter: (dictionary) => {
        const lightColors = dictionary.allProperties.filter(
            (prop) => prop.path[0] === 'light'
        );

        const darkColors = dictionary.allProperties.filter(
            (prop) => prop.path[0] === 'dark'
        );

        const colorFunctions = lightColors.map((lightProp, index) => {
            const darkProp = darkColors[index];
            const name = lightProp.name.replace('light', '');

            return `
  static func ${name}(for mode: ColorScheme) -> Color {
    switch mode {
    case .light:
      return Color(red: ${lightProp.value.r}, green: ${lightProp.value.g}, blue: ${lightProp.value.b}, opacity: ${lightProp.value.a})
    case .dark:
      return Color(red: ${darkProp.value.r}, green: ${darkProp.value.g}, blue: ${darkProp.value.b}, opacity: ${darkProp.value.a})
    @unknown default:
      return Color.gray
    }
  }`;
        });

        return `
  import SwiftUI
  
  extension Color {
    ${colorFunctions.join('\n  ')}
  }
  `;
    },
})