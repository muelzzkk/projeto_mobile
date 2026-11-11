import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function RegisterScreen() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function cadastrar() {
    if (
      !nome.trim() ||
      !email.trim() ||
      !documento.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Erro", "Informe um e-mail válido.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    Alert.alert(
      "Formulário válido",
      "Cadastro pronto para integração com o backend.",
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.logo}>AgendaFácil</Text>
        <Text style={styles.headerText}>Seus agendamentos em um só lugar</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Criar conta</Text>

        <Text style={styles.subtitle}>Preencha seus dados para começar.</Text>

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
          label="CPF/CNPJ"
          placeholder="Digite seu CPF ou CNPJ"
          value={documento}
          onChangeText={setDocumento}
          keyboardType="numeric"
          icon="card-outline"
        />

        <CustomInput
          label="Senha"
          placeholder="Crie uma senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          icon="lock-closed-outline"
        />

        <CustomInput
          label="Confirmar senha"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          icon="shield-checkmark-outline"
        />

        <CustomButton title="Criar conta" onPress={cadastrar} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta? </Text>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.link}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#FAF9F6',
  },
  header: {
    backgroundColor: "#0B3D37",
    paddingTop: 45,
    paddingBottom: 35,
    alignItems: "center",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  headerText: {
    color: "#DCE8E5",
    fontSize: 14,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    padding: 18,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B3D37",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#657773",
    marginBottom: 25,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  footerText: {
    color: "#657773",
    fontSize: 14,
  },
  link: {
    color: "#0B3D37",
    fontSize: 14,
    fontWeight: "bold",
  },
});
