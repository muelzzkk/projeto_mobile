import { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";

interface Professional {
  id: string;
  name: string;
  role: string;
  rating: number;
  reviewsCount: number;
  distance: string;
  price: string;
  avatarUrl: string;
}

const professionals: Professional[] = [
  {
    id: "1",
    name: "Camila Duarte",
    role: "Cabeleireira · Studio Lumi",
    rating: 4.9,
    reviewsCount: 128,
    distance: "1,2 km",
    price: "R$ 90",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "2",
    name: "Lucas Almeida",
    role: "Massoterapeuta · Bio Estética",
    rating: 4.8,
    reviewsCount: 94,
    distance: "2,5 km",
    price: "R$ 120",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
  },
];

const categories = [
  { label: "Beleza", icon: "cut-outline" },
  { label: "Bem-estar", icon: "heart-outline" },
  { label: "Fitness", icon: "barbell-outline" },
  { label: "Reparos", icon: "construct-outline" },
] as const;

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const normalizedSearch = search.trim().toLowerCase();
  const filteredProfessionals = professionals.filter((professional) =>
    `${professional.name} ${professional.role}`
      .toLowerCase()
      .includes(normalizedSearch),
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B3D37" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greetingText}>Olá, Maria Souza</Text>
            <Text style={styles.headerTitle}>Encontre um serviço</Text>
          </View>
          <TouchableOpacity
            style={styles.headerIconButton}
            accessibilityRole="button"
            accessibilityLabel="Formas de pagamento"
          >
            <Ionicons name="card-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <CustomInput
          label="Buscar profissionais"
          placeholder="Nome ou especialidade"
          value={search}
          onChangeText={setSearch}
          icon="search-outline"
        />

        <Text style={styles.sectionTitle}>Categorias</Text>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.label}
              style={styles.categoryCard}
              accessibilityRole="button"
              accessibilityLabel={category.label}
            >
              <View style={styles.categoryIconCircle}>
                <Ionicons
                  name={category.icon}
                  size={22}
                  color="#0B3D37"
                />
              </View>
              <Text style={styles.categoryLabel}>{category.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Profissionais perto de você</Text>
        </View>

        {filteredProfessionals.length > 0 ? (
          filteredProfessionals.map((professional) => (
            <TouchableOpacity
              key={professional.id}
              style={styles.card}
              accessibilityRole="button"
              accessibilityLabel={`${professional.name}, ${professional.role}`}
            >
              <Image
                source={{ uri: professional.avatarUrl }}
                style={styles.cardImage}
              />
              <View style={styles.cardInfo}>
                <Text style={styles.cardName}>{professional.name}</Text>
                <Text style={styles.cardRole}>{professional.role}</Text>
                <View style={styles.ratingRow}>
                  <Ionicons
                    name="star"
                    size={14}
                    color="#F59E0B"
                    style={styles.ratingIcon}
                  />
                  <Text style={styles.ratingText}>
                    {professional.rating}{" "}
                    <Text style={styles.subText}>
                      ({professional.reviewsCount}) · {professional.distance}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.priceLabel}>a partir de</Text>
                <Text style={styles.priceValue}>{professional.price}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.emptyState}>
            Nenhum profissional encontrado.
          </Text>
        )}

        <CustomButton
          title="Ver todos os profissionais"
          onPress={() =>
            Alert.alert(
              "Em desenvolvimento",
              "A lista completa de profissionais será disponibilizada em breve.",
            )
          }
        />
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} accessibilityRole="button">
          <Ionicons name="home-outline" size={22} color="#0B3D37" />
          <Text style={[styles.navText, styles.navTextActive]}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} accessibilityRole="button">
          <Ionicons name="search-outline" size={22} color="#657773" />
          <Text style={styles.navText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} accessibilityRole="button">
          <Ionicons name="calendar-outline" size={22} color="#657773" />
          <Text style={styles.navText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} accessibilityRole="button">
          <Ionicons name="person-outline" size={22} color="#657773" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
  },
  header: {
    backgroundColor: "#0B3D37",
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingText: {
    color: "#DCE8E5",
    fontSize: 14,
    marginBottom: 6,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerIconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#225B52",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 28,
  },
  sectionTitle: {
    color: "#0B3D37",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  categoryCard: {
    width: "23%",
    alignItems: "center",
    marginBottom: 12,
  },
  categoryIconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F0ED",
    marginBottom: 8,
  },
  categoryLabel: {
    color: "#657773",
    fontSize: 12,
    textAlign: "center",
  },
  sectionHeader: {
    marginBottom: 14,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
  },
  cardImage: {
    width: 58,
    height: 58,
    borderRadius: 12,
    backgroundColor: "#E1E6E3",
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cardName: {
    color: "#142522",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  cardRole: {
    color: "#657773",
    fontSize: 12,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIcon: {
    marginRight: 4,
  },
  ratingText: {
    color: "#142522",
    fontSize: 12,
    fontWeight: "600",
  },
  subText: {
    color: "#657773",
    fontWeight: "normal",
  },
  priceContainer: {
    alignItems: "flex-end",
    marginLeft: 8,
  },
  priceLabel: {
    color: "#657773",
    fontSize: 10,
    marginBottom: 3,
  },
  priceValue: {
    color: "#0B3D37",
    fontSize: 14,
    fontWeight: "bold",
  },
  emptyState: {
    color: "#657773",
    textAlign: "center",
    paddingVertical: 24,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E1E6E3",
    paddingVertical: 10,
    paddingBottom: 14,
  },
  navItem: {
    alignItems: "center",
    minWidth: 56,
  },
  navText: {
    color: "#657773",
    fontSize: 11,
    marginTop: 4,
  },
  navTextActive: {
    color: "#0B3D37",
    fontWeight: "bold",
  },
});
