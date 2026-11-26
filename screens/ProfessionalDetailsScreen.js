import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceCard from '../components/professional/ServiceCard';
import AppHeader from '../components/common/AppHeader';
import RatingStars from '../components/common/RatingStars';

export default function ProfessionalDetailsScreen({
  profissional,
  irParaHome,
  irParaAgendamento,
}) {
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  function agendar() {
    if (!servicoSelecionado) {
      Alert.alert("Atenção", "Selecione um serviço para continuar.");
      return;
    }

    if (irParaAgendamento) {
      irParaAgendamento(servicoSelecionado);
    } else {
      Alert.alert(
        "Serviço selecionado",
        "A tela de agendamento será adicionada em breve.",
      );
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader title="Detalhes do profissional" onBack={irParaHome} />

        <Image source={{ uri: profissional.imagem }} style={styles.cover} />

        <View style={styles.body}>
          <Text style={styles.name}>{profissional.nome}</Text>

          <Text style={styles.subtitle}>{profissional.especialidade}</Text>

          <View style={styles.ratingRow}>
            <RatingStars
              rating={profissional.avaliacao}
              total={profissional.totalAvaliacoes}
            />

            <Text style={styles.secondary}>· {profissional.distancia}</Text>
          </View>

          <Text style={styles.sectionTitle}>Sobre a profissional</Text>
          <Text style={styles.description}>
            Especialista em cortes, escovas e tratamentos capilares. Oferece
            atendimento personalizado e serviços de beleza com atenção aos
            detalhes.
          </Text>

          <Text style={styles.sectionTitle}>Serviços disponíveis</Text>

          {profissional.servicos.map((servico) => (
            <ServiceCard
              key={servico.id}
              servico={servico}
              selecionado={servicoSelecionado?.id === servico.id}
              onPress={setServicoSelecionado}
            />
          ))}

          <TouchableOpacity style={styles.button} onPress={agendar}>
            <Text style={styles.buttonText}>Agendar serviço</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  content: {
    flexGrow: 1,
  },
  cover: {
    width: "100%",
    height: 200,
  },
  body: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0B3D37",
  },
  subtitle: {
    fontSize: 14,
    color: "#657773",
    marginTop: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 12,
    marginBottom: 15,
  },
  rating: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#142522",
  },
  secondary: {
    fontSize: 12,
    color: "#657773",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#142522",
    marginTop: 20,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: "#657773",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#0B3D37",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
