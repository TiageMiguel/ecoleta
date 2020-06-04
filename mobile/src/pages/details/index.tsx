import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Page,
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

const Details: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon />
        </BackButton>
        <PointImage
          source={{
            uri:
              'https://gitlab.com/Tiage/next-level-week/-/raw/master/assets/1920x1080.jpg',
          }}
        />
        <PointName>Mercadao do joao</PointName>
        <PointItems>Lampadas, oleo de cozinhas, outros</PointItems>
        <Address>
          <AddressTitle>Endereço</AddressTitle>
          <AddressContent>Rio do Sul, SC</AddressContent>
        </Address>
      </Container>
      <Footer>
        <Button>
          <WhatsappIcon />
          <ButtonText>Whatsapp</ButtonText>
        </Button>
        <Button>
          <MailIcon />
          <ButtonText>E-mail</ButtonText>
        </Button>
      </Footer>
    </>
  );
};

export default Details;
