import { theme, Theme } from './theme-configurator';

type ColorKeys = keyof typeof theme.colors;
type FontKeys = keyof typeof theme.fonts;
type ViewPortKeys = keyof typeof theme.deviceViewPorts;

export const getColor =
  (color: ColorKeys) =>
  (props: { theme: Theme }): string =>
    props.theme.colors[color];

export const getFont =
  (font: FontKeys) =>
  (props: { theme: Theme }): string =>
    props.theme.fonts[font];

export const getViewPort =
  (viewPort: ViewPortKeys) =>
  (props: { theme: Theme }): string =>
    props.theme.deviceViewPorts[viewPort];
