import { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

import AppHeader from '../components/common/AppHeader';
import FilterChip from '../components/common/FilterChip';
import EmptyState from '../components/common/EmptyState';
import AppointmentCard from '../components/booking/AppointmentCard';

const filtros = [
  { label: 'Todos', valor: 'Todos' },
  { label: 'Confirmados', valor: 'Confirmado' },
  { label: 'Concluídos', valor: 'Concluído' },
  { label: 'Cancelados', valor: 'Cancelado' },
];

export default function AppointmentsScreen({
  agendamentos = [],
  irParaHome,
  irParaDetalhesAgendamento,
}) {
  const [filtro, setFiltro] = useState('Todos');

  const agendamentosFiltrados = agendamentos.filter(
    (agendamento) =>
      filtro === 'Todos' || agendamento.status === filtro
  );

  function abrirDetalhes(agendamento) {
    if (irParaDetalhesAgendamento) {
      irParaDetalhesAgendamento(agendamento);
    } else {
      Alert.alert(
        'Detalhes do agendamento',
        'Esta tela será adicionada em breve.'
      );
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Meus agendamentos"
        onBack={irParaHome}
      />

      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.title}>
          Seus agendamentos
        </Text>

        <Text style={styles.description}>
          Acompanhe e gerencie seus serviços.
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {filtros.map((item) => (
            <FilterChip
              key={item.valor}
              label={item.label}
              selecionado={filtro === item.valor}
              onPress={() => setFiltro(item.valor)}
            />
          ))}
        </ScrollView>

        {agendamentosFiltrados.length === 0 ? (
          <EmptyState
            icon="calendar-outline"
            title="Nenhum agendamento"
            description="Seus agendamentos aparecerão aqui."
          />
        ) : (
          agendamentosFiltrados.map((agendamento) => (
            <AppointmentCard
              key={agendamento.id}
              agendamento={agendamento}
              onPress={abrirDetalhes}
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
  description: {
    fontSize: 14,
    color: '#657773',
    marginTop: 5,
  },
  filters: {
    gap: 8,
    paddingVertical: 20,
  },
});
