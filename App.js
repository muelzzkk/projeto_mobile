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

  function cancelarAgendamento(id) {
    setAgendamentos((anteriores) =>
      anteriores.map((agendamento) =>
        agendamento.id === id
          ? { ...agendamento, status: "Cancelado" }
          : agendamento,
      ),
    );
  }

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
          irParaAgendamentos={() => setTelaAtual("meusAgendamentos")}
        />
      )}
      {telaAtual === "perfil" && (
        <ProfileScreen irParaHome={() => setTelaAtual("home")} />
      )}
      {telaAtual === "detalhes" && profissionalSelecionado && (
        <ProfessionalDetailsScreen
          profissional={profissionalSelecionado}
          irParaHome={() => setTelaAtual("home")}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
});
