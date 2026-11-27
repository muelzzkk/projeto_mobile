import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../common/CustomInput";

export default function HomeHeader({
  nome = "Maria Souza",
  busca,
  setBusca,
  irParaPerfil,
  onSearch,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View>
          <Text style={styles.greeting}>Olá, {nome}</Text>

          <Text style={styles.headerTitle}>Encontre um serviço</Text>
        </View>

        <TouchableOpacity
          style={styles.headerIconButton}
          onPress={irParaPerfil}
        >
          <Ionicons name="person-outline" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <CustomInput
        placeholder="O que você está procurando hoje?"
        value={busca}
        onChangeText={setBusca}
        icon="search-outline"
        onSubmitEditing={onSearch}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0B3D37",
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  greeting: {
    fontSize: 14,
    color: "#DCE8E5",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 2,
  },
  headerIconButton: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    borderRadius: 10,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
