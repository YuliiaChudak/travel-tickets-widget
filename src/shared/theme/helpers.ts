import { theme, Theme } from "./theme-configurator";

type ColorKeys = keyof typeof theme.colors;
type FontKeys = keyof typeof theme.fonts;

export const getColor = (color: ColorKeys) => (props: { theme: Theme }): string => {
    return props.theme.colors[color];
};

export const getFont = (font: FontKeys) => (props: { theme: Theme }): string => {
    return props.theme.fonts[font];
};