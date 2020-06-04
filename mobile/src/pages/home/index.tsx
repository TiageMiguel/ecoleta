import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Page,
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
  Input,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [uf, setUF] = useState('');
  const [city, setCity] = useState('');

  return (
    <Page>
      <Container>
        <Main>
          <LogoImage />
          <View>
            <Title>Seu marketplace de coleta de resíduos</Title>
            <Description>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente
            </Description>
          </View>
        </Main>
        <Footer>
          <Input
            maxLength={2}
            autoCapitalize="characters"
            placeholder="Digite a UF"
            value={uf}
            autoCorrect={false}
            onChangeText={setUF}
          />
          <Input
            placeholder="Digite a cidade"
            value={city}
            autoCorrect={false}
            onChangeText={setCity}
          />
          <Button
            onPress={() =>
              navigation.navigate('points', {
                uf,
                city,
              })
            }
          >
            <ButtonIcon>
              <ArrowRightIcon />
            </ButtonIcon>
            <ButtonText>Entrar</ButtonText>
          </Button>
        </Footer>
      </Container>
    </Page>
  );
};

export default Home;
