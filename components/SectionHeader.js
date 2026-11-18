
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function SectionHeader({
  title,
  actionText,
  onAction,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {actionText && (
        <TouchableOpacity onPress={onAction}>
          <Text style={styles.actionText}>
            {actionText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#142522',
    flexShrink: 1,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
});
