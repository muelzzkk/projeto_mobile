
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import AppHeader from '../components/common/AppHeader';
import SectionHeader from '../components/common/SectionHeader';
import BookingSummary from '../components/booking/BookingSummary';
import BookingInfo from '../components/booking/BookingInfo';
import StatusBadge from '../components/booking/StatusBadge';

export default function AppointmentDetailsScreen({
  agendamento,
  irParaAgendamentos,
  cancelarAgendamento,
}) {
  const podeCancelar =
    agendamento.status === 'Confirmado' ||
    agendamento.status === 'Pendente';

  function cancelar() {
    Alert.alert(
      'Cancelar agendamento',
      'Deseja realmente cancelar este agendamento?',
      [
        {
          text: 'Voltar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          style: 'destructive',
          onPress: () =>
            cancelarAgendamento(agendamento.id),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Detalhes do agendamento"
        onBack={irParaAgendamentos}
      />

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.statusContainer}>
          <View style={styles.iconCircle}>
            <Ionicons
              name={
                agendamento.status === 'Cancelado'
                  ? 'close-circle-outline'
                  : 'calendar-outline'
              }
              size={36}
              color={
                agendamento.status === 'Cancelado'
                  ? '#B91C1C'
                  : '#0B3D37'
              }
            />
          </View>

          <Text style={styles.title}>
            Agendamento {agendamento.status.toLowerCase()}
          </Text>

          <StatusBadge status={agendamento.status} />
        </View>

        <SectionHeader title="Informações do serviço" />

        <BookingSummary
          profissional={agendamento.profissional}
          servico={agendamento.servico}
        />

        <SectionHeader title="Data e horário" />

        <BookingInfo
          data={agendamento.data}
          horario={agendamento.horario}
        />

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>
            Valor do serviço
          </Text>

          <Text style={styles.totalPrice}>
            R$ {Number(agendamento.valor)
              .toFixed(2)
              .replace('.', ',')}
          </Text>
        </View>

        {podeCancelar && (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={cancelar}
          >
            <Ionicons
              name="close-circle-outline"
              size={22}
              color="#B91C1C"
            />

            <Text style={styles.cancelButtonText}>
              Cancelar agendamento
            </Text>
          </TouchableOpacity>
        )}

        {agendamento.status === 'Cancelado' && (
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              Este agendamento foi cancelado.
            </Text>
          </View>
        )}

        {agendamento.status === 'Concluído' && (
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              Este serviço já foi realizado.
            </Text>
          </View>
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
  statusContainer: {
    alignItems: 'center',
    gap: 12,
    marginVertical: 10,
  },
  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#E1EDE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D37',
    textAlign: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E1E6E3',
    marginTop: 25,
    paddingVertical: 20,
  },
  totalLabel: {
    fontSize: 15,
    color: '#657773',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D37',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: '#B91C1C',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  cancelButtonText: {
    color: '#B91C1C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    backgroundColor: '#F0F4F3',
    padding: 15,
    borderRadius: 10,
  },
  message: {
    fontSize: 14,
    color: '#657773',
    textAlign: 'center',
  },
});
