import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from '../../components/GradientButton';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isNameValid, setNameValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isPasswordMatch, setPasswordMatch] = useState(true);

  const [focusedInput, setFocusedInput] = useState(null);

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setEmailValid(emailPattern.test(email));
    setEmail(email);
  };

  const validateName = (name) => {
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    setNameValid(
      firstName.length >= 3 && nameParts.every((part) => part.length >= 2),
    );
    setName(name);
  };

  const validatePassword = (password) => {
    setPasswordValid(password.length >= 6);
    setPassword(password);
  };

  const validatePasswordMatch = (confirmPassword) => {
    setPasswordMatch(confirmPassword === password);
    setConfirmPassword(confirmPassword);
  };

  const handleRegister = async () => {
    if (isEmailValid && isNameValid && isPasswordValid && isPasswordMatch) {
      const userData = {
        email,
        name,
        password,
      };

      await AsyncStorage.setItem('registeredUser', JSON.stringify(userData));
      await AsyncStorage.setItem('registeredPassword', password);

      navigation.navigate('Connect');
    }
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.overlayContent}>
              <View style={styles.viewTitle}>
                <Text style={styles.title}>Cadastro</Text>
                <Text style={styles.subTitle}>
                  Preencha as informações abaixo e crie a sua conta
                </Text>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.labelEmail}>E-mail</Text>
                    <LinearGradient
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={[
                        styles.labelContainer,
                        {
                          borderColor:
                            focusedInput === 'email'
                              ? '#4F4F4F'
                              : isEmailValid
                              ? '#4F4F4F'
                              : '#ED1D2F',
                        },
                      ]}
                    >
                      <View style={styles.inputContainer}>
                        <Feather
                          name="at-sign"
                          size={20}
                          style={[
                            styles.icon,
                            focusedInput === 'email' && { color: '#04D361' },
                            !isEmailValid && { color: '#ED1D2F' },
                          ]}
                        />
                        <TextInput
                          style={styles.input}
                          placeholderTextColor="#A4A4A4"
                          placeholder="tecnologia@pontua.com.br"
                          onChangeText={validateEmail}
                          onFocus={() => handleInputFocus('email')}
                          onBlur={handleInputBlur}
                          value={email}
                        />
                        {!isEmailValid && focusedInput === 'email' && (
                          <Text style={styles.invalidMessage}>
                            E-mail inválido
                          </Text>
                        )}
                      </View>
                    </LinearGradient>

                    <Text style={styles.label}>Nome Completo</Text>
                    <LinearGradient
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={[
                        styles.labelContainer,
                        {
                          borderColor:
                            focusedInput === 'name'
                              ? '#4F4F4F'
                              : isNameValid
                              ? '#4F4F4F'
                              : '#ED1D2F',
                        },
                      ]}
                    >
                      <View style={styles.inputContainer}>
                        <AntDesign
                          name="user"
                          size={20}
                          style={[
                            styles.icon,
                            focusedInput === 'name' && { color: '#04D361' },
                            !isNameValid && { color: '#ED1D2F' },
                          ]}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="Pontua Tecnologia"
                          placeholderTextColor="#A4A4A4"
                          onChangeText={validateName}
                          onFocus={() => handleInputFocus('name')}
                          onBlur={handleInputBlur}
                          value={name}
                        />
                        {!isNameValid && focusedInput === 'name' && (
                          <Text style={styles.invalidMessage}>
                            Nome inválido
                          </Text>
                        )}
                      </View>
                    </LinearGradient>

                    <Text style={styles.label}>Senha</Text>
                    <LinearGradient
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={[
                        styles.labelContainer,
                        {
                          borderColor:
                            focusedInput === 'password'
                              ? '#4F4F4F'
                              : isPasswordValid
                              ? '#4F4F4F'
                              : '#ED1D2F',
                        },
                      ]}
                    >
                      <View style={styles.inputContainer}>
                        <Feather
                          name="key"
                          size={20}
                          style={[
                            styles.icon,
                            focusedInput === 'password' && { color: '#04D361' },
                            !isPasswordValid && { color: '#ED1D2F' },
                          ]}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="senha"
                          placeholderTextColor="#A4A4A4"
                          onChangeText={validatePassword}
                          onFocus={() => handleInputFocus('password')}
                          onBlur={handleInputBlur}
                          value={password}
                          secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity
                          onPress={() => setPasswordVisible(!passwordVisible)}
                          style={styles.passwordToggleIcon}
                        >
                          <Ionicons
                            name={
                              passwordVisible
                                ? 'md-eye-outline'
                                : 'md-eye-off-outline'
                            }
                            size={24}
                            style={styles.icon}
                          />
                        </TouchableOpacity>
                        {!isPasswordValid && focusedInput === 'password' && (
                          <Text style={styles.invalidMessage}>
                            Senha inválida
                          </Text>
                        )}
                      </View>
                    </LinearGradient>

                    <Text style={styles.label}>Confirmação da Senha</Text>
                    <LinearGradient
                      colors={['#4F4F4F', 'rgba(255, 255, 255, 0.0)']}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={[
                        styles.labelContainer,
                        {
                          borderColor:
                            focusedInput === 'confirmPassword'
                              ? '#4F4F4F'
                              : isPasswordMatch
                              ? '#4F4F4F'
                              : '#ED1D2F',
                        },
                      ]}
                    >
                      <View style={styles.inputContainer}>
                        <Feather
                          name="key"
                          size={20}
                          style={[
                            styles.icon,
                            focusedInput === 'confirmPassword' && {
                              color: '#04D361',
                            },
                            !isPasswordMatch && { color: '#ED1D2F' },
                          ]}
                        />
                        <TextInput
                          style={styles.input}
                          placeholder="confirmação da Senha"
                          placeholderTextColor="#A4A4A4"
                          onChangeText={validatePasswordMatch}
                          onFocus={() => handleInputFocus('confirmPassword')}
                          onBlur={handleInputBlur}
                          value={confirmPassword}
                          secureTextEntry={!passwordVisible}
                        />
                        <TouchableOpacity
                          onPress={() => setPasswordVisible(!passwordVisible)}
                          style={styles.passwordToggleIcon}
                        >
                          <Ionicons
                            name={
                              passwordVisible
                                ? 'md-eye-outline'
                                : 'md-eye-off-outline'
                            }
                            size={24}
                            style={styles.icon}
                          />
                        </TouchableOpacity>
                        {!isPasswordMatch &&
                          focusedInput === 'confirmPassword' && (
                            <Text style={styles.invalidMessage}>
                              Senhas não coincidem
                            </Text>
                          )}
                      </View>
                    </LinearGradient>
                  </View>
                </View>
                <GradientButton
                  title="cadastrar"
                  colors={['#ED1D2F', '#BF2EB9']}
                  onPress={handleRegister}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
