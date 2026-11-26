import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookingInfo({ data, horario }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Ionicons
          name="calendar-outline"
          size={24}
          color="#0B3D37"
        />

        <View style={styles.info}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.value}>{data}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Ionicons
          name="time-outline"
          size={24}
          color="#0B3D37"
        />

        <View style={styles.info}>
          <Text style={styles.label}>Horário</Text>
          <Text style={styles.value}>{horario}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E6E3',
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  label: {
    fontSize: 12,
    color: '#657773',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#142522',
  },
  divider: {
    height: 1,
    backgroundColor: '#E1E6E3',
    marginVertical: 15,
  },
});