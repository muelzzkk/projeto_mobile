import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RatingStars from '../common/RatingStars';

export default function ProfessionalCard({
  profissional,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(profissional)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: profissional.imagem }}
        style={styles.avatar}
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {profissional.nome}
        </Text>

        <Text style={styles.subtitle}>
          {profissional.especialidade}
        </Text>

        <RatingStars
          rating={profissional.avaliacao}
          total={profissional.totalAvaliacoes}
        />

        <Text style={styles.distance}>
          {profissional.distancia}
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>
          a partir de
        </Text>

        <Text style={styles.price}>
          R$ {profissional.preco}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  info: {
    flex: 1,
    gap: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#142522',
  },
  subtitle: {
    fontSize: 12,
    color: '#657773',
  },
  distance: {
    fontSize: 11,
    color: '#657773',
  },
  priceContainer: {
    alignItems: 'flex-end',
    marginLeft: 5,
  },
  priceLabel: {
    fontSize: 10,
    color: '#657773',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
});
