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

export default function BookingConfirmationScreen({
  agendamento,
  irParaAgendamento,
  confirmarAgendamento,
}) {
  function confirmar() {
    Alert.alert(
      'Confirmar agendamento',
      'Deseja confirmar este serviço?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => confirmarAgendamento(agendamento),
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Confirmação"
        onBack={irParaAgendamento}
      />

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.introduction}>
          <View style={styles.iconCircle}>
            <Ionicons
              name="calendar-outline"
              size={34}
              color="#0B3D37"
            />
          </View>

          <Text style={styles.title}>
            Revise seu agendamento
          </Text>

          <Text style={styles.description}>
            Confira as informações antes de confirmar
            seu serviço.
          </Text>
        </View>

        <SectionHeader title="Resumo do serviço" />

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
            Valor total
          </Text>

          <Text style={styles.totalPrice}>
            R$ {Number(agendamento.valor)
              .toFixed(2)
              .replace('.', ',')}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={confirmar}
        >
          <Ionicons
            name="checkmark-circle-outline"
            size={22}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            Confirmar agendamento
          </Text>
        </TouchableOpacity>
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
  introduction: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  iconCircle: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#E1EDE8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D37',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#657773',
    textAlign: 'center',
    lineHeight: 21,
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
  button: {
    backgroundColor: '#0B3D37',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
