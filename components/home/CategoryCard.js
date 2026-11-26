import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CategoryCard({
  categoria,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(categoria)}
    >
      <View style={styles.iconCircle}>
        <Ionicons
          name={categoria.icon}
          size={22}
          color="#0B3D37"
        />
      </View>

      <Text style={styles.text}>
        {categoria.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: '23%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E6E3',
    elevation: 1,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F4F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
    color: '#142522',
  },
});
