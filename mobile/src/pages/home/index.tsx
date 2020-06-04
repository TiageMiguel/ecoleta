import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  Container,
  Main,
  LogoImage,
  Title,
  Description,
  Footer,
  Button,
  ButtonIcon,
  ButtonText,
  ArrowRightIcon,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Main>
        <LogoImage />
        <Title>Seu marketplace de coleta de resíduos</Title>
        <Description>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
        </Description>
      </Main>
      <Footer>
        <Button onPress={() => navigation.navigate('points')}>
          <ButtonIcon>
            <ArrowRightIcon />
          </ButtonIcon>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Footer>
    </Container>
  );
};

export default Home;
