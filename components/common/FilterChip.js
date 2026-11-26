import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function FilterChip({
  label,
  selecionado = false,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.chip,
        selecionado && styles.selectedChip,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          selecionado && styles.selectedText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E6E3',
  },
  selectedChip: {
    backgroundColor: '#0B3D37',
    borderColor: '#0B3D37',
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: '#657773',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
