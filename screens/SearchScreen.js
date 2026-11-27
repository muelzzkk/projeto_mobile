import { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import AppHeader from '../components/common/AppHeader';
import CustomInput from '../components/common/CustomInput';
import SectionHeader from '../components/common/SectionHeader';
import FilterChip from '../components/common/FilterChip';
import EmptyState from '../components/common/EmptyState';

import ProfessionalCard from '../components/professional/ProfessionalCard';
import SortSelector from '../components/search/SortSelector';

import { profissionais } from '../data/profissionais';
import { categorias } from '../data/categorias';

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

export default function SearchScreen({
  buscaInicial = '',
  categoriaInicial = 'Todos',
  irParaHome,
  irParaDetalhes,
}) {
  const [busca, setBusca] = useState(buscaInicial);

  const [categoria, setCategoria] = useState(
    categoriaInicial
  );

  const [ordenacao, setOrdenacao] = useState(
    'relevancia'
  );

  const profissionaisFiltrados = profissionais
    .filter((profissional) => {
      const termo = normalizarTexto(busca);

      const textoProfissional = normalizarTexto(
        `${profissional.nome} ${profissional.especialidade}`
      );

      const correspondeServico =
        profissional.servicos.some((servico) =>
          normalizarTexto(servico.nome).includes(termo)
        );

      const correspondeBusca =
        textoProfissional.includes(termo) ||
        correspondeServico;

      const correspondeCategoria =
        categoria === 'Todos' ||
        profissional.categoria === categoria;

      return correspondeBusca && correspondeCategoria;
    })
    .sort((a, b) => {
      if (ordenacao === 'preco') {
        return Number(a.preco) - Number(b.preco);
      }

      if (ordenacao === 'avaliacao') {
        return b.avaliacao - a.avaliacao;
      }

      return 0;
    });

  function limparFiltros() {
    setBusca('');
    setCategoria('Todos');
    setOrdenacao('relevancia');
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Buscar profissionais"
        onBack={irParaHome}
      />

      <ScrollView
        contentContainerStyle={styles.body}
        keyboardShouldPersistTaps="handled"
      >
        <CustomInput
          placeholder="Nome ou serviço..."
          value={busca}
          onChangeText={setBusca}
          icon="search-outline"
        />

        <SectionHeader
          title="Categorias"
          actionText="Limpar filtros"
          onAction={limparFiltros}
        />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          <FilterChip
            label="Todos"
            selecionado={categoria === 'Todos'}
            onPress={() => setCategoria('Todos')}
          />

          {categorias.map((item) => (
            <FilterChip
              key={item.id}
              label={item.name}
              selecionado={categoria === item.name}
              onPress={() => setCategoria(item.name)}
            />
          ))}
        </ScrollView>

        <SectionHeader title="Ordenar por" />

        <SortSelector
          selecionado={ordenacao}
          onSelect={setOrdenacao}
        />

        <View style={styles.resultsHeader}>
          <Text style={styles.resultsText}>
            {profissionaisFiltrados.length}{' '}
            {profissionaisFiltrados.length === 1
              ? 'profissional encontrado'
              : 'profissionais encontrados'}
          </Text>
        </View>

        {profissionaisFiltrados.length === 0 ? (
          <EmptyState
            icon="search-outline"
            title="Nenhum profissional encontrado"
            description="Tente pesquisar outro serviço ou selecionar uma categoria diferente."
          />
        ) : (
          profissionaisFiltrados.map((profissional) => (
            <ProfessionalCard
              key={profissional.id}
              profissional={profissional}
              onPress={irParaDetalhes}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  body: {
    padding: 20,
    paddingBottom: 30,
  },
  filters: {
    gap: 8,
    paddingVertical: 5,
  },
  resultsHeader: {
    borderTopWidth: 1,
    borderTopColor: '#E1E6E3',
    marginTop: 20,
    paddingVertical: 15,
  },
  resultsText: {
    fontSize: 13,
    color: '#657773',
  },
});
