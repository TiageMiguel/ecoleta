import { Link } from 'react-router-dom';
import styled from 'styled-components';

import backgroundSource from '../../assets/home-background.svg';
import logoSource from '../../assets/logo.svg';

export const PageHome = styled.div`
  height: 100vh;
  background: url(${backgroundSource}) no-repeat 700px bottom;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.header`
  margin: 48px 0 0;

  @media (max-width: 900px) {
    margin: 48px auto 0;
  }
`;

export const LogoImage = styled.img.attrs({
  src: logoSource,
  alt: 'Ecoleta',
})``;

export const Main = styled.main`
  flex: 1;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 54px;
  color: var(--title-color);

  @media (max-width: 900px) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin-top: 24px;
  line-height: 38px;
`;

export const ActionButton = styled(Link)`
  width: 100%;
  max-width: 360px;
  height: 72px;
  background: var(--primary-color);
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 40px;

  &:hover {
    background: #2fb86e;
  }

  strong {
    flex: 1;
    text-align: center;
    color: #fff;
  }

  span {
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;
