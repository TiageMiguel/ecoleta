import { Map } from 'react-leaflet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoSource from '../../assets/logo.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImage = styled.img.attrs({
  src: logoSource,
  alt: 'Ecoleta',
})``;

export const BackButton = styled(Link)`
  color: var(--title-color);
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
    color: var(--primary-color);
  }
`;

export const Form = styled.form`
  margin: 80px auto;
  padding: 64px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h1`
  font-size: 36px;
`;

export const FormItem = styled.fieldset`
  margin-top: 64px;
  min-inline-size: auto;
  border: 0;

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    span {
      font-size: 14px;
      font-weight: normal;
      color: var(--text-color);
    }

    h2 {
      font-size: 24px;
    }
  }
`;

export const FormField = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const FormFieldGroup = styled.div`
  flex: 1;
  display: flex;

  > div + div {
    margin-left: 24px;
  }
`;

export const FormFieldInput = styled.input`
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;

  &::placeholder {
    color: #a0a0b2;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const FormFieldLabel = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const FormFieldSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex: 1;
  background: #f0f0f5;
  border-radius: 8px;
  border: 0;
  padding: 16px 24px;
  font-size: 16px;
  color: #6c6c80;
`;

export const ItemsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  list-style: none;
`;

interface ItemContainerProps {
  selected?: boolean;
}

export const ItemContainer = styled.li<ItemContainerProps>`
  background: ${props => (props.selected ? '#e1faec' : '#f5f5f5')};
  border: ${props => (props.selected ? '2px solid #34cb79' : '2px solid #f5f5f5')};
  height: 180px;
  border-radius: 8px;
  padding: 32px 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const ItemText = styled.span`
  flex: 1;
  margin-top: 12px;
  display: flex;
  align-items: center;
  color: var(--title-color);
`;

export const ItemImage = styled.img``;

export const MapContainer = styled(Map)`
  width: 100%;
  height: 350px;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const SubmitButton = styled.button`
  width: 260px;
  height: 56px;
  background: var(--primary-color);
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  align-self: flex-end;
  margin-top: 40px;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: #2fb86e;
  }
`;
