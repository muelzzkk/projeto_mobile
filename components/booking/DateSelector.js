import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function DateSelector({
  dataSelecionada,
  onSelect,
}) {
  const diasSemana = [
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb',
  ];

  const datas = Array.from({ length: 7 }, (_, index) => {
    const data = new Date();
    data.setDate(data.getDate() + index);
    return data;
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {datas.map((data) => {
        const selecionado =
          dataSelecionada?.toDateString() === data.toDateString();

        return (
          <TouchableOpacity
            key={data.toDateString()}
            style={[
              styles.card,
              selecionado && styles.selectedCard,
            ]}
            onPress={() => onSelect(data)}
          >
            <Text
              style={[
                styles.dayName,
                selecionado && styles.selectedText,
              ]}
            >
              {diasSemana[data.getDay()]}
            </Text>

            <Text
              style={[
                styles.dayNumber,
                selecionado && styles.selectedText,
              ]}
            >
              {data.getDate()}
            </Text>

            <Text
              style={[
                styles.month,
                selecionado && styles.selectedText,
              ]}
            >
              {data.toLocaleDateString('pt-BR', {
                month: 'short',
              })}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingVertical: 5,
  },
  card: {
    width: 65,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E6E3',
    alignItems: 'center',
    gap: 5,
  },
  selectedCard: {
    backgroundColor: '#0B3D37',
    borderColor: '#0B3D37',
  },
  dayName: {
    fontSize: 12,
    color: '#657773',
  },
  dayNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#142522',
  },
  month: {
    fontSize: 12,
    color: '#657773',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});
