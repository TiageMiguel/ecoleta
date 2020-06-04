import { LeafletMouseEvent } from 'leaflet';
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { TileLayer, Marker } from 'react-leaflet';
import { useHistory } from 'react-router-dom';

import api from '../../services';
import {
  Container,
  Header,
  LogoImage,
  BackButton,
  Form,
  FormTitle,
  FormItem,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormFieldGroup,
  FormFieldSelect,
  ItemsContainer,
  ItemContainer,
  ItemText,
  ItemImage,
  MapContainer,
  SubmitButton,
} from './styles';

interface ItemsProps {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint: React.FC = () => {
  const history = useHistory();

  const [items, setItems] = useState<ItemsProps[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

  const [selectedUF, setSelectedUF] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const handleSelectUF = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUF(event.target.value);
  };

  const handleSelectCity = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  const handleMapClick = (event: LeafletMouseEvent) => {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectItem = (id: number) => {
    const alreadySelected = selectedItems.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItems = selectedItems.filter(item => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { name, email, whatsapp } = formData;
    const uf = selectedUF;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const items = selectedItems;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    };

    await api.post('/points', data);

    alert('Ponto de coleta criado');
    history.push('/');
  };

  const loadItems = async () => {
    const { data } = await api.get('/items');

    console.log(data);

    setItems(data);
  };

  const loadStates = async () => {
    const { data } = await api.get<IBGEUFResponse[]>(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
    );

    const ufInitials = data.map(uf => uf.sigla);

    setStates(ufInitials);
  };

  const loadCounties = async (uf: string) => {
    const { data } = await api.get<IBGECityResponse[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    );

    const citiesInitials = data.map(city => city.nome);

    setCities(citiesInitials);
  };

  useEffect(() => {
    if (selectedUF === '0') {
      setCities([]);

      return;
    }

    loadCounties(selectedUF);
  }, [selectedUF]);

  useEffect(() => {
    loadItems();
    loadStates();

    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <Container>
      <Header>
        <LogoImage />
        <BackButton to='/'>
          <FiArrowLeft />
          Voltar para home
        </BackButton>
      </Header>
      <Form onSubmit={handleSubmit}>
        <FormTitle>
          Cadastro do
          <br /> ponto de coleta
        </FormTitle>
        <FormItem>
          <legend>
            <h2>Dados</h2>
          </legend>
          <FormField>
            <FormFieldLabel htmlFor='name'>Nome da entidade</FormFieldLabel>
            <FormFieldInput type='text' name='name' id='name' onChange={handleInputChange} />
          </FormField>
          <FormFieldGroup>
            <FormField>
              <FormFieldLabel htmlFor='email'>Email</FormFieldLabel>
              <FormFieldInput type='email' name='email' id='email' onChange={handleInputChange} />
            </FormField>
            <FormField>
              <FormFieldLabel htmlFor='whatsapp'>Whatsapp</FormFieldLabel>
              <FormFieldInput
                type='text'
                name='whatsapp'
                id='whatsapp'
                onChange={handleInputChange}
              />
            </FormField>
          </FormFieldGroup>
        </FormItem>
        <FormItem>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
          <MapContainer center={initialPosition} zoom={15} onclick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={selectedPosition} />
          </MapContainer>
          <FormFieldGroup>
            <FormField>
              <FormFieldLabel htmlFor='uf'>Estado (UF)</FormFieldLabel>
              <FormFieldSelect name='uf' id='uf' value={selectedUF} onChange={handleSelectUF}>
                <option value='0'> Selecione uma UF </option>
                {states.map(uf => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </FormFieldSelect>
            </FormField>
            <FormField>
              <FormFieldLabel htmlFor='city'>Cidade</FormFieldLabel>
              <FormFieldSelect
                name='city'
                id='city'
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value='0'> Selecione uma cidade </option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </FormFieldSelect>
            </FormField>
          </FormFieldGroup>
        </FormItem>
        <FormItem>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais items abaixo</span>
          </legend>
          <ItemsContainer>
            {items.map(item => (
              <ItemContainer
                key={item.id}
                selected={selectedItems.includes(item.id)}
                onClick={() => handleSelectItem(item.id)}
              >
                <ItemImage src={item.image_url} alt={item.title} />
                <ItemText>{item.title}</ItemText>
              </ItemContainer>
            ))}
          </ItemsContainer>
        </FormItem>
        <SubmitButton>Cadastrar ponto de coleta</SubmitButton>
      </Form>
    </Container>
  );
};

export default CreatePoint;
