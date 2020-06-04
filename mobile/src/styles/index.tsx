import * as styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      green: string;
      purple: string;
      white: string;
      lightGrey: string;
      background: string;
    };
    fonts: {
      robotoRegular: string;
      robotoMedium: string;
      ubuntuBold: string;
    };
  }
}

export const Theme: styled.DefaultTheme = {
  colors: {
    green: '#34CB79',
    purple: '#322153',
    white: '#FFFFFF',
    lightGrey: '#6C6C80',
    background: '#f0f0f5',
  },
  fonts: {
    robotoRegular: 'Roboto_400Regular',
    robotoMedium: 'Roboto_500Medium',
    ubuntuBold: 'Ubuntu_700Bold',
  },
};
