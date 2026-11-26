import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function RatingStars({
  rating,
  total,
  showTotal = true,
}) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="star"
        size={16}
        color="#F4B400"
      />

      <Text style={styles.rating}>
        {Number(rating).toFixed(1).replace('.', ',')}
      </Text>

      {showTotal && total != null && (
        <Text style={styles.total}>
          ({total} avaliações)
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#142522',
  },
  total: {
    fontSize: 12,
    color: '#657773',
  },
});
