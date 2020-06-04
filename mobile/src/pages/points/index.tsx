import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import {
  Container,
  BackButton,
  ArrowLeftIcon,
  Title,
  Description,
  MapContainer,
  Map,
  ItemsContainer,
  ItemsScroller,
  Item,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
} from './styles';

const Points: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </BackButton>
        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>
        <MapContainer>
          <Map
            initialRegion={{
              latitude: -27.2,
              longitude: -49.2,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <MapMarker
              onPress={() => navigation.navigate('details')}
              coordinate={{
                latitude: -27.2,
                longitude: -49.2,
              }}
            >
              <MapMarkerContainer>
                <MapMarkerImage
                  source={{
                    uri:
                      'https://gitlab.com/Tiage/next-level-week/-/raw/master/assets/1920x1080.jpg',
                  }}
                />
                <MapMarkerTitle>Mercado</MapMarkerTitle>
              </MapMarkerContainer>
            </MapMarker>
          </Map>
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ItemsScroller>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ItemsScroller>
      </ItemsContainer>
    </>
  );
};

export default Points;
