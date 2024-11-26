import axios from 'axios';

const API_URL = 'https://foodish-api.com/api';

export const getFoodImage = async (): Promise<string | null> => {
  try {
    const response = await axios.get(`${API_URL}/food`);
    return response.data.image; 
  } catch (error) {
    console.error('Erro ao buscar a imagem de comida:', error);
    return null;
  }
};




