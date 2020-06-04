import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import backgroundSource from '~/../assets/home-background.png';
import logoSource from '~/../assets/logo.png';

export const Container = styled.ImageBackground.attrs({
  source: backgroundSource,
  imageStyle: {
    height: 368,
    width: 274,
  },
})`
  flex: 1;
  padding: 32px;
`;

export const Main = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.purple};
  font-size: 32px;
  font-family: ${props => props.theme.fonts.ubuntuBold};
  max-width: 260px;
  margin-top: 64px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 16px;
  margin-top: 16px;
  font-family: ${props => props.theme.fonts.robotoRegular};
  max-width: 260px;
  line-height: 24px;
`;

export const LogoImage = styled.Image.attrs({
  source: logoSource,
})``;

export const Footer = styled.View``;

export const Button = styled(RectButton).attrs({})`
  background-color: ${props => props.theme.colors.green};
  height: 60px;
  flex-direction: row;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-top: 8px;
`;

export const ButtonIcon = styled.View`
  height: 60px;
  width: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  flex: 1;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.robotoMedium};
  font-size: 16px;
`;

export const ArrowRightIcon = styled(Feather).attrs({
  name: 'arrow-right',
})`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
`;

//   select: {},
//   input: {
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     marginBottom: 8,
//     paddingHorizontal: 24,
//     fontSize: 16,
//   },
