import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import CustomInput from '../components/CustomInput';

export default function HomeScreen({ mudarTela }) {
  const [busca, setBusca] = useState('');

  const categorias = [
    { id: '1', name: 'Beleza', icon: 'cut-outline' },
    { id: '2', name: 'Bem-estar', icon: 'sparkles-outline' },
    { id: '3', name: 'Fitness', icon: 'fitness-outline' },
    { id: '4', name: 'Reparos', icon: 'construct-outline' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      {/* Cabeçalho Verde */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Olá, Maria Souza</Text>
            <Text style={styles.headerTitle}>Encontre um serviço</Text>
          </View>
          <TouchableOpacity
            style={styles.headerIconButton}
            onPress={() => Alert.alert('Menu', 'Ações rápidas')}
          >
            <Ionicons name="card-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchWrapper}>
          <CustomInput
            placeholder="O que você está procurando hoje?"
            value={busca}
            onChangeText={setBusca}
            icon="search-outline"
          />
        </View>
      </View>

      {/* Conteúdo Branco / Abaixo */}
      <View style={styles.bodyContainer}>
        {/* Categorias */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categorias</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              style={styles.categoryCard}
              onPress={() => Alert.alert('Categoria', `Selecionado: ${cat.name}`)}
            >
              <View style={styles.categoryIconCircle}>
                <Ionicons name={cat.icon} size={22} color="#0B3D37" />
              </View>
              <Text style={styles.categoryText}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Profissionais perto de você */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Profissionais perto de você</Text>
          <TouchableOpacity onPress={() => Alert.alert('Lista', 'Ver todos os profissionais')}>
            <Text style={styles.linkText}>Ver lista</Text>
          </TouchableOpacity>
        </View>

        {/* Card Profissional 1 */}
        <View style={styles.professionalCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300' }}
            style={styles.avatar}
          />
          <View style={styles.professionalInfo}>
            <Text style={styles.professionalName}>Camila Duarte</Text>
            <Text style={styles.professionalSub}>Cabeleireira · Studio Lumi</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#F4B400" />
              <Text style={styles.ratingText}>4,9 <Text style={styles.ratingCount}>(128)</Text>  ·  1,2 km</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>a partir de</Text>
            <Text style={styles.priceValue}>R$ 90</Text>
          </View>
        </View>

        {/* Card Profissional 2 */}
        <View style={styles.professionalCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300' }}
            style={styles.avatar}
          />
          <View style={styles.professionalInfo}>
            <Text style={styles.professionalName}>Lucas Almeida</Text>
            <Text style={styles.professionalSub}>Massoterapeuta · Bio Estética</Text>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={14} color="#F4B400" />
              <Text style={styles.ratingText}>4,8 <Text style={styles.ratingCount}>(94)</Text>  ·  2,5 km</Text>
            </View>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>a partir de</Text>
            <Text style={styles.priceValue}>R$ 120</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B3D37',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#FAF9F6',
  },
  header: {
    backgroundColor: '#0B3D37',
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  greeting: {
    fontSize: 14,
    color: '#DCE8E5',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 2,
  },
  headerIconButton: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchWrapper: {
    marginTop: 5,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#142522',
  },
  linkText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    width: '23%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E6E3',
    elevation: 1,
  },
  categoryIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F4F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#142522',
  },
  professionalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E1E6E3',
    elevation: 2,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 12,
    marginRight: 12,
  },
  professionalInfo: {
    flex: 1,
  },
    professionalName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#142522',
    marginBottom: 2,
  },
  professionalSub: {
    fontSize: 12,
    color: '#657773',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#142522',
    marginLeft: 4,
  },
  ratingCount: {
    fontWeight: 'normal',
    color: '#657773',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 10,
    color: '#657773',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
});