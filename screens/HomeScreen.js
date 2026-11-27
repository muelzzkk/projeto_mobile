import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import HomeHeader from "../components/home/HomeHeader";
import CategoryCard from "../components/home/CategoryCard";
import SectionHeader from "../components/common/SectionHeader";
import ProfessionalCard from "../components/professional/ProfessionalCard";
import { profissionais } from "../data/profissionais";
import { categorias } from "../data/categorias";

export default function HomeScreen({
  irParaPerfil,
  irParaDetalhes,
  irParaAgendamentos,
  irParaBusca,
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
        onSearch={() => irParaBusca(busca, "Todos")}
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
              onPress={(cat) => irParaBusca("", cat.name)}
            />
          ))}
        </View>

        <SectionHeader
          title="Profissionais perto de você"
          actionText="Ver lista"
          onAction={() => irParaBusca("", "Todos")}
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
