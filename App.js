
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('login');

  return (
    <View style={styles.container}>
      {telaAtual === 'login' ? (
        <LoginScreen
          irParaCadastro={() => setTelaAtual('cadastro')}
        />
      ) : (
        <RegisterScreen
          irParaLogin={() => setTelaAtual('login')}
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
