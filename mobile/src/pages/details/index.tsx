import { useNavigation, useRoute } from '@react-navigation/native';
import { composeAsync } from 'expo-mail-composer';
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';

import {
  Container,
  BackButton,
  ArrowLeftIcon,
  PointImage,
  PointName,
  PointItems,
  Address,
  AddressContent,
  AddressTitle,
  Footer,
  Button,
  ButtonText,
  MailIcon,
  WhatsappIcon,
} from './styles';

import api from '~/services';

interface Params {
  id: number;
}

interface PointProps {
  point: {
    image: string;
    image_url: string;
    name: string;
    whatsapp: string;
    city: string;
    uf: string;
    email: string;
  };
  items: {
    title: string;
  }[];
}

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [point, setPoint] = useState<PointProps | null>(null);

  const routeParams = route.params as Params;

  const handleWhatsapp = () => {
    Linking.openURL(
      `whatsapp://send?phone=${point.point.whatsapp}&text=Tenho interesse sobre a coleta de resíduos`
    );
  };

  const sendMail = () => {
    composeAsync({
      subject: 'Interesse na coleta de resíduos',
      recipients: [point.point.email],
    });
  };

  const loadPoint = async () => {
    const { data } = await api.get(`points/${routeParams.id}`);

    console.log(data);

    setPoint(data);
  };

  useEffect(() => {
    loadPoint();
  }, []);

  return (
    <>
      <Container>
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </BackButton>
        {point !== null && (
          <>
            <PointImage
              source={{
                uri: point.point.image_url,
              }}
            />
            <PointName>{point.point.name}</PointName>
            <PointItems>
              {point.items.map(item => item.title).join(', ')}
            </PointItems>
            <Address>
              <AddressTitle>Endereço</AddressTitle>
              <AddressContent>
                {point.point.city}, {point.point.uf}
              </AddressContent>
            </Address>
          </>
        )}
      </Container>
      <Footer>
        <Button onPress={handleWhatsapp}>
          <WhatsappIcon />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button onPress={sendMail}>
          <MailIcon />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </>
  );
};

export default Details;
