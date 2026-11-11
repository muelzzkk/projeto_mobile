
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type IconName = React.ComponentProps<
  typeof Ionicons
>['name'];

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: IconName;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export default function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  icon,
  secureTextEntry = false,
  keyboardType = 'default',
}: CustomInputProps) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>

        {icon && (
          <Ionicons
            name={icon}
            size={19}
            color="#657773"
            style={styles.leftIcon}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#71817F"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={
            secureTextEntry && !mostrarSenha
          }
          keyboardType={keyboardType}
          autoCapitalize="none"
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
            style={styles.eyeButton}
            accessibilityRole="button"
            accessibilityLabel={
              mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'
            }
          >
            <Ionicons
              name={
                mostrarSenha
                  ? 'eye-off-outline'
                  : 'eye-outline'
              }
              size={20}
              color="#657773"
            />
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#142522',
    marginBottom: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E1E6E3',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    height: 44,
  },

  leftIcon: {
    marginLeft: 12,
    marginRight: 8,
  },

  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#142522',
  },

  eyeButton: {
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
