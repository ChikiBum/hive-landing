import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key: string]: string };
    fonts: { [key: string]: string };
    fontWeights: { [key: string]: string };
    fontFamilies: { [key: string]: string };
    spaces: { [key: string]: string };
    percents: { [key: string]: string };
    fontWeight: { [key: string]: string };
    weight: { [key: string]: string };
  }
}
