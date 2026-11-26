import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function TimeSlot({
  horario,
  selecionado = false,
  disponivel = true,
  onPress,
}) {
  return (
    <TouchableOpacity
      disabled={!disponivel}
      style={[
        styles.card,
        selecionado && styles.selectedCard,
        !disponivel && styles.disabledCard,
      ]}
      onPress={() => onPress(horario)}
    >
      <Text
        style={[
          styles.text,
          selecionado && styles.selectedText,
          !disponivel && styles.disabledText,
        ]}
      >
        {horario}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E6E3',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  selectedCard: {
    backgroundColor: '#0B3D37',
    borderColor: '#0B3D37',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#142522',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  disabledCard: {
    backgroundColor: '#E9E9E9',
  },
  disabledText: {
    color: '#A0A0A0',
    textDecorationLine: 'line-through',
  },
});
