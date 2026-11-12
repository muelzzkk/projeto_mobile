import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen({ irParaHome }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Cabeçalho do Perfil */}
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={irParaHome}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Meu perfil</Text>
          </View>

          <TouchableOpacity
            onPress={() => Alert.alert("Editar", "Editar perfil")}
          >
            <Text style={styles.editText}>Editar perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfoContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300",
            }}
            style={styles.profileAvatar}
          />
          <View style={styles.profileTextInfo}>
            <Text style={styles.profileName}>Maria Souza</Text>
            <Text style={styles.profileLocation}>Belo Horizonte, MG</Text>
            <Text style={styles.profileMemberSince}>
              Membro desde setembro de 2024
            </Text>
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Serviços pagos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Comentários</Text>
          </View>
        </View>
      </View>

      {/* Corpo da Tela */}
      <View style={styles.bodyContainer}>
        {/* Minhas Informações */}
        <Text style={styles.sectionTitle}>Minhas informações</Text>
        <View style={styles.infoCard}>
          <Ionicons
            name="mail-outline"
            size={20}
            color="#657773"
            style={styles.infoIcon}
          />
          <View>
            <Text style={styles.infoLabel}>E-mail</Text>
            <Text style={styles.infoValue}>maria.souza@email.com</Text>
          </View>
        </View>

        {/* Meus Posts */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus posts</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Novo post", "Criar nova postagem")}
          >
            <Text style={styles.linkText}>Novo post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.postCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500",
            }}
            style={styles.postImage}
          />
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>Um dia de autocuidado ✨</Text>
            <Text style={styles.postDescription} numberOfLines={2}>
              Adorei o resultado com a Camila! Atendimento cuidadoso do início
              ao fim.
            </Text>
            <Text style={styles.postFooterText}>
              08 nov · 12 curtidas · 2 comentários
            </Text>

            <TouchableOpacity
              onPress={() => Alert.alert("Posts", "Abrir lista de posts")}
            >
              <Text style={styles.postLink}>Ver todos os posts (2)</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Serviços Pagos */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Serviços pagos</Text>
          <TouchableOpacity
            onPress={() => Alert.alert("Serviços", "Ver todos os serviços")}
          >
            <Text style={styles.linkText}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {/* Item de Serviço 1 */}
        <View style={styles.serviceCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
            }}
            style={styles.serviceAvatar}
          />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>Corte e escova</Text>
            <Text style={styles.serviceSub}>Camila Duarte · 08 nov 2026</Text>
            <View style={styles.badgePaid}>
              <Text style={styles.badgeText}>Pago</Text>
            </View>
          </View>
          <Text style={styles.servicePrice}>R$ 90,00</Text>
        </View>

        {/* Item de Serviço 2 */}
        <View style={styles.serviceCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
            }}
            style={styles.serviceAvatar}
          />
          <View style={styles.serviceInfo}>
            <Text style={styles.serviceName}>Massagem relaxante</Text>
            <Text style={styles.serviceSub}>Lucas Almeida · 02 nov 2026</Text>
            <View style={styles.badgePaid}>
              <Text style={styles.badgeText}>Pago</Text>
            </View>
          </View>
          <Text style={styles.servicePrice}>R$ 120,00</Text>
        </View>

        {/* Meus Comentários */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus comentários</Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert("Comentários", "Ver todos os comentários")
            }
          >
            <Text style={styles.linkText}>Ver todos</Text>
          </TouchableOpacity>
        </View>

        {/* Comentário 1 */}
        <View style={styles.commentCard}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentAuthor}>Camila Duarte</Text>
            <View style={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Ionicons key={i} name="star" size={14} color="#F4B400" />
              ))}
            </View>
          </View>
          <Text style={styles.commentSub}>Corte e escova · 08 nov</Text>
          <Text style={styles.commentBody}>
            "Amei o resultado! A Camila foi super atenciosa. Vou voltar com
            certeza."
          </Text>
        </View>

        {/* Comentário 2 */}
        <View style={styles.commentCard}>
          <View style={styles.commentHeader}>
            <Text style={styles.commentAuthor}>Lucas Almeida</Text>
            <View style={styles.starsRow}>
              {[...Array(5)].map((_, i) => (
                <Ionicons key={i} name="star" size={14} color="#F4B400" />
              ))}
            </View>
          </View>
          <Text style={styles.commentSub}>Massagem relaxante · 02 nov</Text>
          <Text style={styles.commentBody}>
            "Ótima experiência! Saí renovada e recomendo o atendimento."
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B3D37",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#FAF9F6",
  },
  header: {
    backgroundColor: "#0B3D37",
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  editText: {
    fontSize: 14,
    color: "#DCE8E5",
    fontWeight: "600",
  },
  profileInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  profileTextInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 2,
  },
  profileLocation: {
    fontSize: 13,
    color: "#DCE8E5",
    marginBottom: 2,
  },
  profileMemberSince: {
    fontSize: 11,
    color: "#A9C1BC",
  },
  statsRow: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 12,
    paddingVertical: 12,
    justifyContent: "space-around",
    alignItems: "center",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  statLabel: {
    fontSize: 11,
    color: "#DCE8E5",
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 25,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#142522",
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  linkText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0B3D37",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1E6E3",
    marginBottom: 10,
  },
  infoIcon: {
    marginRight: 12,
  },
  infoLabel: {
    fontSize: 11,
    color: "#657773",
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#142522",
  },
  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E1E6E3",
    marginBottom: 10,
    elevation: 2,
  },
  postImage: {
    width: "100%",
    height: 160,
  },
  postContent: {
    padding: 12,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#142522",
    marginBottom: 4,
  },
  postDescription: {
    fontSize: 13,
    color: "#657773",
    marginBottom: 8,
  },
  postFooterText: {
    fontSize: 11,
    color: "#8C9E9A",
    marginBottom: 8,
  },
  postLink: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0B3D37",
  },
  serviceCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1E6E3",
    marginBottom: 10,
  },
  serviceAvatar: {
    width: 45,
    height: 45,
    borderRadius: 10,
    marginRight: 10,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#142522",
    marginBottom: 2,
  },
  serviceSub: {
    fontSize: 11,
    color: "#657773",
    marginBottom: 4,
  },
  badgePaid: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  servicePrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0B3D37",
  },
  commentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E1E6E3",
    marginBottom: 10,
  },
  commentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#142522",
  },
  starsRow: {
    flexDirection: "row",
  },
  commentSub: {
    fontSize: 11,
    color: "#657773",
    marginBottom: 6,
  },
  commentBody: {
    fontSize: 13,
    color: "#142522",
    fontStyle: "italic",
  },
});
