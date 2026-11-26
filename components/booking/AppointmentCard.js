import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import StatusBadge from './StatusBadge';

export default function AppointmentCard({
  agendamento,
  onPress,
}) {
  const { profissional, servico, data, horario, valor, status } =
    agendamento;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(agendamento)}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: profissional.imagem }}
          style={styles.avatar}
        />

        <View style={styles.info}>
          <Text style={styles.name}>
            {profissional.nome}
          </Text>

          <Text style={styles.secondary}>
            {servico.nome}
          </Text>
        </View>

        <StatusBadge status={status} />
      </View>

      <View style={styles.divider} />

      <View style={styles.dateContainer}>
        <View style={styles.row}>
          <Ionicons
            name="calendar-outline"
            size={18}
            color="#657773"
          />

          <Text style={styles.secondary}>{data}</Text>
        </View>

        <View style={styles.row}>
          <Ionicons
            name="time-outline"
            size={18}
            color="#657773"
          />

          <Text style={styles.secondary}>{horario}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.footer}>
        <Text style={styles.price}>
          R$ {Number(valor).toFixed(2).replace('.', ',')}
        </Text>

        <View style={styles.row}>
          <Text style={styles.details}>
            Ver detalhes
          </Text>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#0B3D37"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E6E3',
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
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
  secondary: {
    fontSize: 13,
    color: '#657773',
  },
  divider: {
    height: 1,
    backgroundColor: '#E1E6E3',
    marginVertical: 15,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
  details: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0B3D37',
  },
});
