
import tinycolor from "tinycolor2";

export const swiftColors = ({
    name: 'swiftColors',
    type: 'value',
    // matcher: (token) => isColor(token.type),
    transformer: (token) => {
        // const rgba = StyleDictionary.util.hexToRgb(token.value);
        const rgba = tinycolor(token.value).toRgb();
        return {
            r: rgba.r / 255,
            g: rgba.g / 255,
            b: rgba.b / 255,
            a: rgba.a,
        };
    },
})