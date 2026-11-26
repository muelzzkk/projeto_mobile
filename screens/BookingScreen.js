import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppHeader from '../components/common/AppHeader';
import SectionHeader from '../components/common/SectionHeader';
import DateSelector from '../components/booking/DateSelector';
import TimeSlot from '../components/booking/TimeSlot';
import BookingSummary from '../components/booking/BookingSummary';

const horarios = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];

export default function BookingScreen({
  profissional,
  servico,
  irParaDetalhes,
  irParaConfirmacao,
}) {
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);

  function selecionarData(data) {
    setDataSelecionada(data);
    setHorarioSelecionado(null);
  }

  function continuar() {
    if (!dataSelecionada || !horarioSelecionado) {
      Alert.alert(
        'Atenção',
        'Selecione uma data e um horário.'
      );
      return;
    }

    const agendamento = {
      profissional,
      servico,
      data: dataSelecionada.toLocaleDateString('pt-BR'),
      horario: horarioSelecionado,
      valor: servico.preco,
    };

    if (irParaConfirmacao) {
      irParaConfirmacao(agendamento);
    } else {
      Alert.alert(
        'Agendamento selecionado',
        `${agendamento.data} às ${agendamento.horario}`
      );
    }
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title="Agendamento"
        onBack={irParaDetalhes}
      />

      <ScrollView contentContainerStyle={styles.body}>
        <SectionHeader title="Serviço selecionado" />

        <BookingSummary
          profissional={profissional}
          servico={servico}
        />

        <SectionHeader title="Selecione uma data" />

        <DateSelector
          dataSelecionada={dataSelecionada}
          onSelect={selecionarData}
        />

        <SectionHeader title="Horários disponíveis" />

        <View style={styles.horariosContainer}>
          {horarios.map((horario) => (
            <TimeSlot
              key={horario}
              horario={horario}
              selecionado={horarioSelecionado === horario}
              disponivel={dataSelecionada !== null}
              onPress={setHorarioSelecionado}
            />
          ))}
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>
            Valor total
          </Text>

          <Text style={styles.totalPrice}>
            R$ {Number(servico.preco).toFixed(2).replace('.', ',')}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={continuar}
        >
          <Text style={styles.buttonText}>
            Continuar
          </Text>

          <Ionicons
            name="arrow-forward"
            size={20}
            color="#FFFFFF"
          />
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
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  horariosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
