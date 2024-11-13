import { styles } from './style';
import React from "react";
import imagem01 from '../../assets/logo.png';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

import * as Animatable from 'react-native-animatable'

export default function Welcome() {

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}> 
                <Animatable.Image
                animation="flipInY"
                source={imagem01}
                style={{ width: '100%' }}
                resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore, organize seus gastos de qualquer lugar!</Text>
                <Text style={styles.text}>Faça login para começar</Text>

                <TouchableOpacity 
                style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}