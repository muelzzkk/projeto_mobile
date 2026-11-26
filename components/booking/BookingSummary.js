import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingSummary({
  profissional,
  servico,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.profile}>
        <Image
          source={{ uri: profissional.imagem }}
          style={styles.avatar}
        />

        <View style={styles.info}>
          <Text style={styles.name}>
            {profissional.nome}
          </Text>

          <Text style={styles.secondary}>
            {profissional.especialidade}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <Text style={styles.serviceName}>
        {servico.nome}
      </Text>

      <View style={styles.details}>
        <View style={styles.duration}>
          <Ionicons
            name="time-outline"
            size={18}
            color="#657773"
          />

          <Text style={styles.secondary}>
            {servico.duracao}
          </Text>
        </View>

        <Text style={styles.price}>
          R$ {Number(servico.preco).toFixed(2).replace('.', ',')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E6E3',
    borderRadius: 12,
    padding: 15,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#142522',
  },
  secondary: {
    fontSize: 13,
    color: '#657773',
  },
  divider: {
    height: 1,
    backgroundColor: '#E1E6E3',
    marginVertical: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#142522',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
});
