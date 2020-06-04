import { Feather } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.ubuntuBold};
  margin-top: 24px;
`;

export const Description = styled.Text`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 16px;
  margin-top: 4px;
  font-family: ${props => props.theme.fonts.robotoRegular};
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

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
`;

export const Map = styled(MapView).attrs({})`
  width: 100%;
  height: 100%;
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ItemsScroller = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})``;

interface ItemProps {
  selected?: boolean;
}

export const Item = styled(RectButton).attrs({})<ItemProps>`
  background-color: ${props => props.theme.colors.white};
  border: 2px solid
    ${props => (props.selected ? props.theme.colors.green : '#eee')};
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding: 20px 16px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const ItemTitle = styled.Text`
  font-family: ${props => props.theme.fonts.robotoRegular};
  text-align: center;
  font-size: 13px;
`;

export const MapMarker = styled(Marker)`
  width: 90px;
  height: 80px;
`;

export const MapMarkerContainer = styled.View`
  background: ${props => props.theme.colors.green};
  width: 90px;
  height: 70px;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MapMarkerImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 90px;
  height: 45px;
`;

export const MapMarkerTitle = styled.Text`
  font-family: ${props => props.theme.fonts.robotoRegular};
  flex: 1;
  color: ${props => props.theme.colors.white};
  font-size: 13px;
  line-height: 23px;
`;
