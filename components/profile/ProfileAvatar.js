import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileAvatar({
  imagem,
  tamanho = 85,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: tamanho,
          height: tamanho,
          borderRadius: tamanho / 2,
        },
      ]}
    >
      {imagem ? (
        <Image
          source={{ uri: imagem }}
          style={{
            width: tamanho,
            height: tamanho,
            borderRadius: tamanho / 2,
          }}
        />
      ) : (
        <Ionicons
          name="person-outline"
          size={tamanho * 0.5}
          color="#0B3D37"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a2ebcd',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 20,
    marginBottom: 4,
    marginTop: -20
  },
});
