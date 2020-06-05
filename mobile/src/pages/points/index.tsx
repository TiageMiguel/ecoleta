import { useNavigation, useRoute } from '@react-navigation/native';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { SvgUri } from 'react-native-svg';

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
  ItemTitle,
  MapMarker,
  MapMarkerContainer,
  MapMarkerImage,
  MapMarkerTitle,
} from './styles';

import api from '~/services';

interface ItemProps {
  id: number;
  title: string;
  image_url: string;
}

interface PointProps {
  id: number;
  name: string;
  image: string;
  image_url: string;
  longitude: number;
  latitude: number;
}

interface Params {
  uf: string;
  city: string;
}

const Points: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  const [points, setPoints] = useState<PointProps[]>([]);

  const [items, setItems] = useState<ItemProps[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelectItem = (id: number) => {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const loadItems = async () => {
    const { data } = await api.get('/items');

    setItems(data);
  };

  const loadPosition = async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Oooops...',
        'Precisamos da sua permissão para obter a localização'
      );

      return;
    }

    const location = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    setInitialPosition([latitude, longitude]);
  };

  const loadPoints = async () => {
    const { data } = await api.get('points', {
      params: {
        city: routeParams.city || '',
        uf: routeParams.uf || '',
        items: selectedItems,
      },
    });

    setPoints(data);
  };

  useEffect(() => {
    loadPosition();
    loadItems();
    loadPoints();
  }, []);

  useEffect(() => {
    loadPoints();
  }, [selectedItems]);

  return (
    <>
      <Container>
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </BackButton>
        <Title>Bem vindo.</Title>
        <Description>Encontre no mapa um ponto de coleta.</Description>
        <MapContainer>
          {initialPosition[0] !== 0 && (
            <Map
              initialRegion={{
                latitude: initialPosition[0],
                longitude: initialPosition[1],
                latitudeDelta: 0.014,
                longitudeDelta: 0.014,
              }}
            >
              {points.map(point => (
                <MapMarker
                  key={String(point.id)}
                  onPress={() =>
                    navigation.navigate('details', { id: point.id })
                  }
                  coordinate={{
                    latitude: point.latitude,
                    longitude: point.longitude,
                  }}
                >
                  <MapMarkerContainer>
                    <MapMarkerImage
                      source={{
                        uri: point.image_url,
                      }}
                    />
                    <MapMarkerTitle>{point.name}</MapMarkerTitle>
                  </MapMarkerContainer>
                </MapMarker>
              ))}
            </Map>
          )}
        </MapContainer>
      </Container>
      <ItemsContainer>
        <ItemsScroller>
          {items.map(item => (
            <Item
              key={String(item.id)}
              onPress={() => handleSelectItem(item.id)}
              selected={selectedItems.includes(item.id)}
            >
              <SvgUri width={42} height={42} uri={item.image_url} />
              <ItemTitle>{item.title}</ItemTitle>
            </Item>
          ))}
        </ItemsScroller>
      </ItemsContainer>
    </>
  );
};

export default Points;
