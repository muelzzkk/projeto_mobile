import { ScrollView, StyleSheet } from 'react-native';

import FilterChip from '../common/FilterChip';

const opcoes = [
  { label: 'Relevância', valor: 'relevancia' },
  { label: 'Menor preço', valor: 'preco' },
  { label: 'Melhor avaliação', valor: 'avaliacao' },
];

export default function SortSelector({
  selecionado,
  onSelect,
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {opcoes.map((opcao) => (
        <FilterChip
          key={opcao.valor}
          label={opcao.label}
          selecionado={selecionado === opcao.valor}
          onPress={() => onSelect(opcao.valor)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: 5,
  },
});
