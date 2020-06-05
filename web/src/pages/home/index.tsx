import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import {
  PageHome,
  Content,
  Header,
  LogoImage,
  Main,
  Title,
  Subtitle,
  ActionButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <PageHome>
      <Content>
        <Header>
          <LogoImage />
        </Header>
        <Main>
          <Title>Seu marketplace de coleta de resíduos.</Title>
          <Subtitle>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
          </Subtitle>
          <ActionButton to='/create-point'>
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </ActionButton>
        </Main>
      </Content>
    </PageHome>
  );
};

export default Home;
