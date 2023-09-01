import React, { useState, useRef, createRef } from 'react';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';
import GradientButton from '../../components/GradientButton';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function Verification() {
  const numFields = 4;
  const [verificationCodes, setVerificationCodes] = useState(
    Array(numFields).fill(''),
  );

  const inputRefs = useRef(verificationCodes.map(() => createRef()));
  const navigation = useNavigation();

  const handleCodeChange = (index, code) => {
    const updatedCodes = [...verificationCodes];
    updatedCodes[index] = code;
    setVerificationCodes(updatedCodes);
    if (!code && index > 0) {
      inputRefs.current[index - 1].current.focus();
    } else if (code && index < numFields - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleSendCode = () => {
    navigation.navigate('Connect');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/BlackPanther.png')}
        style={styles.image}
      />
      <View style={styles.loginBox}>
        <View style={styles.backgroundContainer}>
          <Image
            source={require('../../../assets/Background.png')}
            style={styles.backgroundColor}
          />
          <Image
            source={require('../../../assets/frontShapes1.png')}
            style={styles.frontShapes1}
          />
          <Image
            source={require('../../../assets/Saly.png')}
            style={styles.saly}
          />
          <Image
            source={require('../../../assets/frontShapes2.png')}
            style={styles.frontShapes2}
          />
        </View>
        <View style={styles.overlayContainer}>
          <ScrollView>
            <View style={styles.overlayContent}>
              <View style={styles.viewTitle}>
                <Text style={styles.title}>Verificação de identidade</Text>
                <Text style={styles.subTitle}>
                  Um e-mail contendo um código de verificação foi enviado para o
                  endereço de e-mail associado à sua conta. Insira o código
                  abaixo para continuar com a redefinição da sua senha.
                </Text>
                <Text style={styles.label}>Código</Text>
                <View style={styles.codeContainer}>
                  {verificationCodes.map((code, index) => (
                    <LinearGradient
                      key={index}
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={styles.codeGradient}
                    >
                      <TextInput
                        ref={inputRefs.current[index]}
                        style={styles.code}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={code}
                        onChangeText={(text) => handleCodeChange(index, text)}
                      />
                    </LinearGradient>
                  ))}
                </View>
                <GradientButton
                  title="Enviar código"
                  colors={['#ED1D2F', '#BF2EB9']}
                  style={styles.inputRegister}
                  onPress={handleSendCode}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
