import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack'; 
import styles from '../styles/Screen1.styles';

type RootStackParamList = {
  Screen1: undefined;
  Screen2: { name: string };
};

type Screen1NavigationProp = StackNavigationProp<RootStackParamList, 'Screen1'>;

const Screen1 = () => {
  const [name, setName] = useState<string>('');
  const navigation = useNavigation<Screen1NavigationProp>();

  useEffect(() => {
    const loadName = async () => {
      const savedName = await AsyncStorage.getItem('userName');
      if (savedName) setName(savedName);
    };
    loadName();
  }, []);

  const handleSaveAndNavigate = async () => {
    await AsyncStorage.setItem('userName', name); 
    navigation.navigate('Screen2', { name });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Tela1.png')} 
        style={styles.image} 
      />
      
      <Text style={styles.label}>Escreva seu nome</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Seu nome" 
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSaveAndNavigate}>
        <Text style={styles.buttonText}>Salve e receba uma receita</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;






