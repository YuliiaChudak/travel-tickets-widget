import { Theme } from "./shared/theme/theme-configurator";

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
