import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ServiceCard({
  servico,
  selecionado = false,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        selecionado && styles.selectedCard,
      ]}
      onPress={() => onPress?.(servico)}
    >
      <View style={styles.info}>
        <Text style={styles.name}>
          {servico.nome}
        </Text>

        <Text style={styles.duration}>
          Duração: {servico.duracao}
        </Text>
      </View>

      <Text style={styles.price}>
        R$ {Number(servico.preco)
          .toFixed(2)
          .replace('.', ',')}
      </Text>

      <Ionicons
        name={
          selecionado
            ? 'radio-button-on'
            : 'radio-button-off'
        }
        size={22}
        color="#0B3D37"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E6E3',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    gap: 10,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#0B3D37',
    backgroundColor: '#F0F4F3',
  },
  info: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#142522',
  },
  duration: {
    fontSize: 12,
    color: '#657773',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
});
