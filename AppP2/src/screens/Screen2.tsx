import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios'; 
import styles from '../styles/Screen2.styles'; 

const Screen2 = ({ route }: any) => {
  const { name } = route.params; 
  const [recipe, setRecipe] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get('https://foodish-api.com/api'); 
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <View style={styles.container}>

            
            <Text style={styles.greeting}> {name}, hoje você vai comer:</Text>

      <Image 
        source={require('../assets/Tela2.png')}
        style={styles.image}
      />
  
    </View>
  );
};

export default Screen2;









