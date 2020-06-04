import { Feather, FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const ArrowLeftIcon = styled(Feather).attrs({
  name: 'arrow-left',
})`
  color: ${props => props.theme.colors.green};
  font-size: 20px;
`;

export const PointImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 120px;
  border-radius: 10px;
  margin-top: 32px;
`;

export const PointName = styled.Text`
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.ubuntuBold};
  font-size: 28px;
  margin-top: 24px;
`;

export const PointItems = styled.Text`
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.robotoRegular};
  font-size: 16px;
  margin-top: 8px;
  line-height: 24px;
`;

export const Address = styled.View`
  margin-top: 32px;
`;

export const AddressTitle = styled.Text`
  color: ${props => props.theme.colors.purple};
  font-family: ${props => props.theme.fonts.robotoMedium};
  font-size: 16px;
`;

export const AddressContent = styled.Text`
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.robotoRegular};
  margin-top: 8px;
  line-height: 24px;
`;

export const Footer = styled.View`
  border-top-color: #999;
  border-top-width: 1px;
  padding: 20px 32px;
  padding-bottom: ${Platform.OS === 'ios' ? 32 : 20}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  background: ${props => props.theme.colors.green};
  width: 48%;
  height: 50px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${props => props.theme.fonts.robotoMedium};
  color: ${props => props.theme.colors.white};
  margin-left: 8px;
  font-size: 16px;
`;

export const WhatsappIcon = styled(FontAwesome).attrs({
  name: 'whatsapp',
})`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;

export const MailIcon = styled(Feather).attrs({
  name: 'mail',
})`
  color: ${props => props.theme.colors.white};
  font-size: 20px;
`;
