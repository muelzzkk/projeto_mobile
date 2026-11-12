
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');

  return (
    <View style={styles.container}>
      {telaAtual === 'login' && (
        <LoginScreen
          irParaCadastro={() => setTelaAtual('cadastro')}
          irParaHome={() => setTelaAtual('home')}
        />
      )}

      {telaAtual === 'cadastro' && (
        <RegisterScreen
          irParaLogin={() => setTelaAtual('login')}
        />
      )}8081

      {telaAtual === 'home' && (
        <HomeScreen
          irParaPerfil={() => setTelaAtual('perfil')}
        />
      )}

      {telaAtual === 'perfil' && (
        <ProfileScreen
          irParaHome={() => setTelaAtual('home')}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
});
