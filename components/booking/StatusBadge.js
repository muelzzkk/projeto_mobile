import { View, Text, StyleSheet } from 'react-native';

const statusColors = {
  Confirmado: {
    background: '#DCFCE7',
    text: '#166534',
  },
  Concluído: {
    background: '#DBEAFE',
    text: '#1D4ED8',
  },
  Cancelado: {
    background: '#FEE2E2',
    text: '#991B1B',
  },
  Pendente: {
    background: '#FEF3C7',
    text: '#92400E',
  },
};

export default function StatusBadge({ status }) {
  const colors = statusColors[status] || {
    background: '#E1E6E3',
    text: '#657773',
  };

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors.background },
      ]}
    >
      <Text style={[styles.text, { color: colors.text }]}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 11,
    fontWeight: '600',
  },
});
