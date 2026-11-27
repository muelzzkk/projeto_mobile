import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProfessionalDetailsScreen from "./screens/ProfessionalDetailsScreen";
import BookingScreen from "./screens/BookingScreen";
import BookingConfirmationScreen from "./screens/BookingConfirmationScreen";
import AppointmentsScreen from "./screens/AppointmentsScreen";
import AppointmentDetailsScreen from "./screens/AppointmentDetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

export default function App() {
  const [telaAtual, setTelaAtual] = useState("login");
  const [profissionalSelecionado, setProfissionalSelecionado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);
  const [agendamentoAtual, setAgendamentoAtual] = useState(null);
  const [agendamentos, setAgendamentos] = useState([]);
  const [agendamentoSelecionadoId, setAgendamentoSelecionadoId] =
    useState(null);
  const agendamentoSelecionado = agendamentos.find(
    (item) => item.id === agendamentoSelecionadoId,
  );
  const [buscaInicial, setBuscaInicial] = useState("");
  const [categoriaInicial, setCategoriaInicial] = useState("Todos");
  const [origemDetalhes, setOrigemDetalhes] = useState("home");

  const [usuario, setUsuario] = useState({
    id: 1,
    nome: "Maria Souza",
    email: "maria@email.com",
    telefone: "",
    cidade: "Belo Horizonte",
    membroDesde: "Setembro de 2024",
    imagem: null,
  });

  function cancelarAgendamento(id) {
    setAgendamentos((anteriores) =>
      anteriores.map((agendamento) =>
        agendamento.id === id
          ? { ...agendamento, status: "Cancelado" }
          : agendamento,
      ),
    );
  }

  function abrirBusca(busca = "", categoria = "Todos") {
    setBuscaInicial(busca);
    setCategoriaInicial(categoria);
    setTelaAtual("busca");
  }

  function abrirDetalhes(profissional, origem = "home") {
    setProfissionalSelecionado(profissional);
    setOrigemDetalhes(origem);
    setTelaAtual("detalhes");
  }

  function salvarPerfil(usuarioAtualizado) {
    setUsuario(usuarioAtualizado);
    setTelaAtual("perfil");

    Alert.alert("Sucesso!", "Perfil atualizado com sucesso.");
  }

  return (
    <View style={styles.container}>
      {telaAtual === "login" && (
        <LoginScreen
          irParaCadastro={() => setTelaAtual("cadastro")}
          irParaHome={() => setTelaAtual("home")}
          irParaRecuperarSenha={() => setTelaAtual("recuperarSenha")}
        />
      )}
      {telaAtual === "cadastro" && (
        <RegisterScreen irParaLogin={() => setTelaAtual("login")} />
      )}
      8081
      {telaAtual === "home" && (
        <HomeScreen
          usuario={usuario}
          irParaPerfil={() => setTelaAtual("perfil")}
          irParaDetalhes={(profissional) => abrirDetalhes(profissional, "home")}
          irParaAgendamentos={() => setTelaAtual("meusAgendamentos")}
          irParaBusca={abrirBusca}
        />
      )}
      {telaAtual === "perfil" && (
        <ProfileScreen
          usuario={usuario}
          irParaHome={() => setTelaAtual("home")}
          irParaEditarPerfil={() => setTelaAtual("editarPerfil")}
          sair={() => setTelaAtual("login")}
        />
      )}
      {telaAtual === "detalhes" && profissionalSelecionado && (
        <ProfessionalDetailsScreen
          profissional={profissionalSelecionado}
          irParaHome={() => setTelaAtual(origemDetalhes)}
          irParaAgendamento={(servico) => {
            setServicoSelecionado(servico);
            setTelaAtual("agendamento");
          }}
        />
      )}
      {telaAtual === "agendamento" &&
        profissionalSelecionado &&
        servicoSelecionado && (
          <BookingScreen
            profissional={profissionalSelecionado}
            servico={servicoSelecionado}
            irParaDetalhes={() => setTelaAtual("detalhes")}
            irParaConfirmacao={(agendamento) => {
              setAgendamentoAtual(agendamento);
              setTelaAtual("confirmacao");
            }}
          />
        )}
      {telaAtual === "confirmacao" && agendamentoAtual && (
        <BookingConfirmationScreen
          agendamento={agendamentoAtual}
          irParaAgendamento={() => setTelaAtual("agendamento")}
          confirmarAgendamento={(agendamento) => {
            const novoAgendamento = {
              ...agendamento,
              id: Date.now().toString(),
              status: "Confirmado",
            };

            setAgendamentos((anteriores) => [...anteriores, novoAgendamento]);

            setAgendamentoAtual(null);
            setTelaAtual("meusAgendamentos");

            Alert.alert("Sucesso!", "Agendamento realizado com sucesso.");
          }}
        />
      )}
      {telaAtual === "meusAgendamentos" && (
        <AppointmentsScreen
          agendamentos={agendamentos}
          irParaHome={() => setTelaAtual("home")}
          irParaDetalhesAgendamento={(agendamento) => {
            setAgendamentoSelecionadoId(agendamento.id);
            setTelaAtual("detalhesAgendamento");
          }}
        />
      )}
      {telaAtual === "detalhesAgendamento" && agendamentoSelecionado && (
        <AppointmentDetailsScreen
          agendamento={agendamentoSelecionado}
          irParaAgendamentos={() => setTelaAtual("meusAgendamentos")}
          cancelarAgendamento={cancelarAgendamento}
        />
      )}
      {telaAtual === "busca" && (
        <SearchScreen
          buscaInicial={buscaInicial}
          categoriaInicial={categoriaInicial}
          irParaHome={() => setTelaAtual("home")}
          irParaDetalhes={(profissional) =>
            abrirDetalhes(profissional, "busca")
          }
        />
      )}
      {telaAtual === "editarPerfil" && (
        <EditProfileScreen
          usuario={usuario}
          irParaPerfil={() => setTelaAtual("perfil")}
          salvarPerfil={salvarPerfil}
        />
      )}
      {telaAtual === "recuperarSenha" && (
        <ForgotPasswordScreen irParaLogin={() => setTelaAtual("login")} />
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
