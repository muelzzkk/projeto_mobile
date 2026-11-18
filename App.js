import { useState } from "react";
import { View, StyleSheet } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfessionalDetailsScreen from "./screens/ProfessionalDetailsScreen";

export default function App() {
  const [telaAtual, setTelaAtual] = useState("login");
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);

  return (
    <View style={styles.container}>
      {telaAtual === "login" && (
        <LoginScreen
          irParaCadastro={() => setTelaAtual("cadastro")}
          irParaHome={() => setTelaAtual("home")}
        />
      )}
      {telaAtual === "cadastro" && (
        <RegisterScreen irParaLogin={() => setTelaAtual("login")} />
      )}
      8081
      {telaAtual === "home" && (
        <HomeScreen
          irParaPerfil={() => setTelaAtual("perfil")}
          irParaDetalhes={(profissional) => {
            setProfissionalSelecionado(profissional);
            setTelaAtual("detalhes");
          }}
        />
      )}
      {telaAtual === "perfil" && (
        <ProfileScreen irParaHome={() => setTelaAtual("home")} />
      )}
      {telaAtual === "detalhes" && profissionalSelecionado && (
        <ProfessionalDetailsScreen
          profissional={profissionalSelecionado}
          irParaHome={() => setTelaAtual("home")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
});
