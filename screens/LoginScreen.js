import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({irParaCadastro, irParaHome}) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (!email.trim() || !senha) {
      Alert.alert("Atenção", "Informe seu e-mail e sua senha.");
      return;
    }

    Alert.alert(
      "Formulário válido",
      "Login pronto para integração com o backend.",
    );

    irParaHome();

  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Text style={styles.logo}>AgendaFácil</Text>

        <Text style={styles.headerText}>Organize seu tempo com facilidade</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Bem-vindo de volta!</Text>

          <Text style={styles.subtitle}>
            Entre com seus dados para continuar.
          </Text>

          <CustomInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomInput
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() =>
              Alert.alert(
                "Em desenvolvimento",
                "A recuperação de senha será implementada posteriormente.",
              )
            }
          >
            <Text style={styles.link}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <CustomButton title="Entrar" onPress={entrar} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma conta? </Text>

          <TouchableOpacity onPress={irParaCadastro}>
            <Text style={styles.link}>Cadastre-se</Text>
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
  formContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 20,
    paddingBottom: 198,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#FAF9F6",
  },
  header: {
    backgroundColor: "#0B3D37",
    paddingTop: 45,
    paddingBottom: 35,
    alignItems: "center",
    },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerText: {
    fontSize: 14,
    color: "#DCE8E5",
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
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  link: {
    color: "#0B3D37",
    fontWeight: "bold",
    fontSize: 14,
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
});
