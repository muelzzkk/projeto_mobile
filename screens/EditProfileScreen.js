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
import ProfileAvatar from '../components/profile/ProfileAvatar';

export default function EditProfileScreen({
  usuario,
  irParaPerfil,
  salvarPerfil,
}) {
  const [nome, setNome] = useState(usuario.nome);
  const [email, setEmail] = useState(usuario.email);
  const [telefone, setTelefone] = useState(
    usuario.telefone || ''
  );
  const [cidade, setCidade] = useState(
    usuario.cidade || ''
  );

  function salvar() {
    if (!nome.trim() || !email.trim()) {
      Alert.alert(
        'Atenção',
        'Preencha o nome e o e-mail.'
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

    const usuarioAtualizado = {
      ...usuario,
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      cidade: cidade.trim(),
    };

    salvarPerfil(usuarioAtualizado);
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Editar perfil"
        onBack={irParaPerfil}
      />

      <ScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.profileContainer}>
          <ProfileAvatar
            imagem={usuario.imagem}
            tamanho={90}
          />

          <Text style={styles.name}>
            {nome || 'Seu nome'}
          </Text>

          <Text style={styles.description}>
            Atualize suas informações pessoais.
          </Text>
        </View>

        <View style={styles.form}>
          <CustomInput
            label="Nome completo"
            placeholder="Digite seu nome"
            value={nome}
            onChangeText={setNome}
            icon="person-outline"
          />

          <CustomInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            icon="mail-outline"
          />

          <CustomInput
            label="Telefone"
            placeholder="(00) 00000-0000"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
            icon="call-outline"
          />

          <CustomInput
            label="Cidade"
            placeholder="Digite sua cidade"
            value={cidade}
            onChangeText={setCidade}
            icon="location-outline"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={salvar}
        >
          <Ionicons
            name="checkmark-circle-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            Salvar alterações
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
    padding: 20,
    paddingBottom: 30,
  },
  profileContainer: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 15,
    marginBottom: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D37',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#657773',
    textAlign: 'center',
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
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
