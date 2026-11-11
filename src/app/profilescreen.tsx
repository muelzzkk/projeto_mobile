import {
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

const services = [
  {
    id: "1",
    name: "Corte e escova",
    professional: "Camila Duarte",
    date: "08 nov 2026",
    price: "R$ 90,00",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
  },
  {
    id: "2",
    name: "Massagem relaxante",
    professional: "Lucas Almeida",
    date: "02 nov 2026",
    price: "R$ 120,00",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
  },
];

const comments = [
  {
    id: "1",
    author: "Camila Duarte",
    service: "Corte e escova · 08 nov",
    body: "Amei o resultado! A Camila foi superatenciosa. Vou voltar com certeza.",
  },
  {
    id: "2",
    author: "Lucas Almeida",
    service: "Massagem relaxante · 02 nov",
    body: "Ótima experiência! Saí renovada e recomendo o atendimento.",
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0B3D37" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Meu perfil</Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Editar perfil"
          >
            <Text style={styles.headerAction}>Editar perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoRow}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
            }}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Maria Souza</Text>
            <Text style={styles.userLocation}>Belo Horizonte, MG</Text>
            <Text style={styles.userMemberSince}>
              Membro desde setembro de 2026
            </Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Serviços pagos</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Comentários</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Minhas informações</Text>
        <View style={styles.infoCard}>
          <Ionicons name="mail-outline" size={18} color="#657773" />
          <View style={styles.infoDetails}>
            <Text style={styles.infoLabel}>E-mail</Text>
            <Text style={styles.infoValue}>maria.souza@email.com</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus posts</Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Criar novo post"
          >
            <Text style={styles.actionText}>Novo post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.postCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
            }}
            style={styles.postImage}
          />
          <View style={styles.postContent}>
            <Text style={styles.postTitle}>Um dia de autocuidado ✨</Text>
            <Text style={styles.postDescription}>
              Adorei o resultado com a Camila! Atendimento cuidadoso do início
              ao fim.
            </Text>
            <Text style={styles.postMeta}>
              08 nov · 12 curtidas · 2 comentários
            </Text>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel="Ver todos os posts"
            >
              <Text style={styles.linkText}>Ver todos os posts (2)</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Serviços pagos</Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Ver todos os serviços"
          >
            <Text style={styles.actionText}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        {services.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <View style={styles.serviceDetails}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.serviceMeta}>
                {service.professional} · {service.date}
              </Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Pago</Text>
              </View>
            </View>
            <Text style={styles.servicePrice}>{service.price}</Text>
          </View>
        ))}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Meus comentários</Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Ver todos os comentários"
          >
            <Text style={styles.actionText}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        {comments.map((comment) => (
          <View key={comment.id} style={styles.commentCard}>
            <View style={styles.commentHeader}>
              <Text style={styles.commentAuthor}>{comment.author}</Text>
              <View style={styles.starsRow}>
                {Array.from({ length: 5 }, (_, index) => (
                  <Ionicons
                    key={index}
                    name="star"
                    size={14}
                    color="#F59E0B"
                  />
                ))}
              </View>
            </View>
            <Text style={styles.commentMeta}>{comment.service}</Text>
            <Text style={styles.commentBody}>"{comment.body}"</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} accessibilityRole="button">
          <Ionicons name="home-outline" size={22} color="#657773" />
          <Text style={styles.navText}>Início</Text>
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
          <Ionicons name="person-outline" size={22} color="#0B3D37" />
          <Text style={[styles.navText, styles.navTextActive]}>Perfil</Text>
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
    paddingTop: 16,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerAction: {
    color: "#DCE8E5",
    fontSize: 14,
    fontWeight: "bold",
  },
  userInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E1E6E3",
  },
  userDetails: {
    flex: 1,
    marginLeft: 14,
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  userLocation: {
    color: "#DCE8E5",
    fontSize: 13,
    marginBottom: 3,
  },
  userMemberSince: {
    color: "#DCE8E5",
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: "row",
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#387067",
  },
  statBox: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    color: "#DCE8E5",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
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
  infoCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 24,
    elevation: 3,
  },
  infoDetails: {
    marginLeft: 12,
  },
  infoLabel: {
    color: "#657773",
    fontSize: 12,
    marginBottom: 3,
  },
  infoValue: {
    color: "#142522",
    fontSize: 14,
    fontWeight: "600",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  actionText: {
    color: "#0B3D37",
    fontSize: 14,
    fontWeight: "bold",
  },
  postCard: {
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 24,
    elevation: 3,
  },
  postImage: {
    width: "100%",
    height: 160,
    backgroundColor: "#E1E6E3",
  },
  postContent: {
    padding: 16,
  },
  postTitle: {
    color: "#142522",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  postDescription: {
    color: "#657773",
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 10,
  },
  postMeta: {
    color: "#657773",
    fontSize: 12,
    marginBottom: 10,
  },
  linkText: {
    color: "#0B3D37",
    fontSize: 13,
    fontWeight: "bold",
  },
  serviceCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
  },
  serviceImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#E1E6E3",
  },
  serviceDetails: {
    flex: 1,
    marginLeft: 12,
  },
  serviceName: {
    color: "#142522",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  serviceMeta: {
    color: "#657773",
    fontSize: 11,
    marginBottom: 7,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#E8F0ED",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    color: "#0B3D37",
    fontSize: 11,
    fontWeight: "bold",
  },
  servicePrice: {
    color: "#0B3D37",
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 8,
  },
  commentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
  },
  commentHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  commentAuthor: {
    color: "#142522",
    fontSize: 14,
    fontWeight: "bold",
  },
  starsRow: {
    flexDirection: "row",
    gap: 2,
  },
  commentMeta: {
    color: "#657773",
    fontSize: 12,
    marginBottom: 8,
  },
  commentBody: {
    color: "#657773",
    fontSize: 13,
    lineHeight: 19,
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
