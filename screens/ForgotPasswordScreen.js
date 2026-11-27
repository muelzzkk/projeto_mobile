import { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import AppHeader from '../components/common/AppHeader';
import CustomInput from '../components/common/CustomInput';

export default function ForgotPasswordScreen({
  irParaLogin,
}) {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  function recuperarSenha() {
    if (!email.trim()) {
      Alert.alert(
        'Atenção',
        'Informe seu e-mail.'
      );
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email.trim())) {
      Alert.alert(
        'Atenção',
        'Informe um e-mail válido.'
      );
      return;
    }

    // Simulação da recuperação de senha.
    // Futuramente será integrada ao back-end.
    setEnviado(true);
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Recuperar senha"
        onBack={irParaLogin}
      />

      <ScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.iconContainer}>
          <Ionicons
            name={
              enviado
                ? 'mail-outline'
                : 'lock-closed-outline'
            }
            size={42}
            color="#0B3D37"
          />
        </View>

        <Text style={styles.title}>
          {enviado
            ? 'Confira seu e-mail'
            : 'Esqueceu sua senha?'}
        </Text>

        <Text style={styles.description}>
          {enviado
            ? 'Solicitação simulada com sucesso. Nenhum e-mail real foi enviado.'
            : 'Não se preocupe! Informe seu e-mail para recuperar o acesso à sua conta.'}
        </Text>

        {!enviado ? (
          <View style={styles.form}>
            <CustomInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              icon="mail-outline"
              onSubmitEditing={recuperarSenha}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={recuperarSenha}
            >
              <Text style={styles.buttonText}>
                Enviar instruções
              </Text>

              <Ionicons
                name="arrow-forward"
                size={20}
                color="#FFFFFF"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.emailContainer}>
            <Ionicons
              name="mail-outline"
              size={22}
              color="#0B3D37"
            />

            <Text style={styles.emailText}>
              {email.trim()}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.backButton}
          onPress={irParaLogin}
        >
          <Ionicons
            name="arrow-back"
            size={18}
            color="#0B3D37"
          />

          <Text style={styles.backButtonText}>
            Voltar ao login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  body: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 30,
    paddingBottom: 80,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E1EDE8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0B3D37',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#657773',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  form: {
    gap: 15,
  },
  button: {
    backgroundColor: '#0B3D37',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  emailContainer: {
    backgroundColor: '#E1EDE8',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  emailText: {
    flexShrink: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#0B3D37',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 25,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0B3D37',
  },
});
