import { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

import HomeHeader from "../components/home/HomeHeader";
import CategoryCard from "../components/home/CategoryCard";
import SectionHeader from "../components/common/SectionHeader";
import ProfessionalCard from "../components/professional/ProfessionalCard";

const categorias = [
  { id: "1", name: "Beleza", icon: "cut-outline" },
  { id: "2", name: "Bem-estar", icon: "sparkles-outline" },
  { id: "3", name: "Fitness", icon: "fitness-outline" },
  { id: "4", name: "Reparos", icon: "construct-outline" },
];

const profissionais = [
  {
    id: 1,
    nome: "Camila Duarte",
    especialidade: "Cabeleireira · Studio Lumi",
    avaliacao: 4.9,
    totalAvaliacoes: 128,
    distancia: "1,2 km",
    preco: "90",
    imagem:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
    descricao:
      "Especialista em cortes, escovas e tratamentos capilares. Oferece atendimento personalizado.",
    servicos: [
      { id: 1, nome: "Corte feminino", preco: 90, duracao: "45 min" },
      { id: 2, nome: "Escova", preco: 70, duracao: "40 min" },
      { id: 3, nome: "Hidratação", preco: 110, duracao: "60 min" },
    ],
  },
  {
    id: 2,
    nome: "Lucas Almeida",
    especialidade: "Massoterapeuta · Bio Estética",
    avaliacao: 4.8,
    totalAvaliacoes: 94,
    distancia: "2,5 km",
    preco: "120",
    imagem: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
    descricao:
      "Profissional especializado em massagens terapêuticas, relaxamento muscular e bem-estar.",
    servicos: [
      { id: 1, nome: "Massagem relaxante", preco: 120, duracao: "60 min" },
      { id: 2, nome: "Massagem terapêutica", preco: 150, duracao: "60 min" },
      { id: 3, nome: "Massagem expressa", preco: 80, duracao: "30 min" },
    ],
  },
];

export default function HomeScreen({
  irParaPerfil,
  irParaDetalhes,
  irParaAgendamentos,
}) {
  const [busca, setBusca] = useState("");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <HomeHeader
        nome="Maria Souza"
        busca={busca}
        setBusca={setBusca}
        irParaPerfil={irParaPerfil}
      />

      <View style={styles.bodyContainer}>
        <SectionHeader
          title="Meus agendamentos"
          actionText="Ver todos"
          onAction={irParaAgendamentos}
        />

        <SectionHeader title="Categorias" />

        <View style={styles.categoriesContainer}>
          {categorias.map((categoria) => (
            <CategoryCard
              key={categoria.id}
              categoria={categoria}
              onPress={(cat) =>
                Alert.alert("Categoria", `Selecionado: ${cat.name}`)
              }
            />
          ))}
        </View>

        <SectionHeader
          title="Profissionais perto de você"
          actionText="Ver lista"
          onAction={() => Alert.alert("Lista", "Ver todos os profissionais")}
        />

        {profissionais.map((profissional) => (
          <ProfessionalCard
            key={profissional.id}
            profissional={profissional}
            onPress={irParaDetalhes}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B3D37",
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#FAF9F6",
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
