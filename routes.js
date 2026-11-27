import { useState } from "react";
import { Alert } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

// Importação das telas
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import ProfessionalDetailsScreen from "./screens/ProfessionalDetailsScreen";
import BookingScreen from "./screens/BookingScreen";
import BookingConfirmationScreen from "./screens/BookingConfirmationScreen";
import AppointmentsScreen from "./screens/AppointmentsScreen";
import AppointmentDetailsScreen from "./screens/AppointmentDetailsScreen";
import EditProfileScreen from "./screens/EditProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Ícones do menu inferior
const icons = {
  Home: "home",
  Search: "search",
  Appointments: "calendar",
  Profile: "person",
};

// Navegação inferior
function BottomTabs({ usuario, agendamentos }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#0B3D37",
        tabBarInactiveTintColor: "#8C9E9A",

        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E1E6E3",
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },

        tabBarIcon: ({ focused, color, size }) => {
          const icon = icons[route.name];

          return (
            <Ionicons
              name={focused ? icon : `${icon}-outline`}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" options={{ title: "Início" }}>
        {({ navigation }) => (
          <HomeScreen
            usuario={usuario}
            irParaPerfil={() => navigation.navigate("Profile")}
            irParaAgendamentos={() => navigation.navigate("Appointments")}
            irParaBusca={(busca = "", categoria = "Todos") =>
              navigation.navigate("Search", {
                busca,
                categoria,
              })
            }
            irParaDetalhes={(profissional) =>
              navigation.navigate("ProfessionalDetails", {
                profissional,
              })
            }
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Search" options={{ title: "Buscar" }}>
        {({ navigation, route }) => (
          <SearchScreen
            key={JSON.stringify(route.params || {})}
            buscaInicial={route.params?.busca || ""}
            categoriaInicial={route.params?.categoria || "Todos"}
            irParaHome={() => navigation.navigate("Home")}
            irParaDetalhes={(profissional) =>
              navigation.navigate("ProfessionalDetails", {
                profissional,
              })
            }
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Appointments" options={{ title: "Agendamentos" }}>
        {({ navigation }) => (
          <AppointmentsScreen
            agendamentos={agendamentos}
            irParaHome={() => navigation.navigate("Home")}
            irParaDetalhesAgendamento={(agendamento) =>
              navigation.navigate("AppointmentDetails", {
                id: agendamento.id,
              })
            }
          />
        )}
      </Tab.Screen>

      <Tab.Screen name="Profile" options={{ title: "Perfil" }}>
        {({ navigation }) => (
          <ProfileScreen
            usuario={usuario}
            irParaHome={() => navigation.navigate("Home")}
            irParaEditarPerfil={() => navigation.navigate("EditProfile")}
            sair={() =>
              navigation.getParent().reset({
                index: 0,
                routes: [{ name: "Login" }],
              })
            }
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

// Rotas principais
export default function Routes() {
  const [usuario, setUsuario] = useState({
    id: 1,
    nome: "Maria Souza",
    email: "maria@email.com",
    telefone: "",
    cidade: "Belo Horizonte",
    membroDesde: "Setembro de 2024",
    imagem: null,
  });

  const [agendamentos, setAgendamentos] = useState([]);

  function cancelarAgendamento(id) {
    setAgendamentos((anteriores) =>
      anteriores.map((agendamento) =>
        agendamento.id === id
          ? { ...agendamento, status: "Cancelado" }
          : agendamento,
      ),
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#FAF9F6",
          },
        }}
      >
        {/* Login */}
        <Stack.Screen name="Login">
          {({ navigation }) => (
            <LoginScreen
              irParaCadastro={() => navigation.navigate("Register")}
              irParaRecuperarSenha={() => navigation.navigate("ForgotPassword")}
              irParaHome={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Main" }],
                })
              }
            />
          )}
        </Stack.Screen>

        {/* Cadastro */}
        <Stack.Screen name="Register">
          {({ navigation }) => (
            <RegisterScreen irParaLogin={() => navigation.goBack()} />
          )}
        </Stack.Screen>

        {/* Recuperação de senha */}
        <Stack.Screen name="ForgotPassword">
          {({ navigation }) => (
            <ForgotPasswordScreen irParaLogin={() => navigation.goBack()} />
          )}
        </Stack.Screen>

        {/* Menu inferior */}
        <Stack.Screen name="Main">
          {() => <BottomTabs usuario={usuario} agendamentos={agendamentos} />}
        </Stack.Screen>

        {/* Detalhes do profissional */}
        <Stack.Screen name="ProfessionalDetails">
          {({ navigation, route }) => (
            <ProfessionalDetailsScreen
              profissional={route.params.profissional}
              irParaHome={() => navigation.goBack()}
              irParaAgendamento={(servico) =>
                navigation.navigate("Booking", {
                  profissional: route.params.profissional,
                  servico,
                })
              }
            />
          )}
        </Stack.Screen>

        {/* Agendamento */}
        <Stack.Screen name="Booking">
          {({ navigation, route }) => (
            <BookingScreen
              profissional={route.params.profissional}
              servico={route.params.servico}
              irParaDetalhes={() => navigation.goBack()}
              irParaConfirmacao={(agendamento) =>
                navigation.navigate("BookingConfirmation", {
                  agendamento,
                })
              }
            />
          )}
        </Stack.Screen>

        {/* Confirmação do agendamento */}
        <Stack.Screen name="BookingConfirmation">
          {({ navigation, route }) => (
            <BookingConfirmationScreen
              agendamento={route.params.agendamento}
              irParaAgendamento={() => navigation.goBack()}
              confirmarAgendamento={(agendamento) => {
                const novoAgendamento = {
                  ...agendamento,
                  id: Date.now().toString(),
                  status: "Confirmado",
                };

                setAgendamentos((anteriores) => [
                  ...anteriores,
                  novoAgendamento,
                ]);

                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "Main",
                      params: {
                        screen: "Appointments",
                      },
                    },
                  ],
                });

                Alert.alert("Sucesso!", "Agendamento realizado com sucesso.");
              }}
            />
          )}
        </Stack.Screen>

        {/* Detalhes do agendamento */}
        <Stack.Screen name="AppointmentDetails">
          {({ navigation, route }) => {
            const agendamento = agendamentos.find(
              (item) => item.id === route.params.id,
            );

            if (!agendamento) {
              return null;
            }

            return (
              <AppointmentDetailsScreen
                agendamento={agendamento}
                irParaAgendamentos={() => navigation.goBack()}
                cancelarAgendamento={cancelarAgendamento}
              />
            );
          }}
        </Stack.Screen>

        {/* Edição de perfil */}
        <Stack.Screen name="EditProfile">
          {({ navigation }) => (
            <EditProfileScreen
              usuario={usuario}
              irParaPerfil={() => navigation.goBack()}
              salvarPerfil={(usuarioAtualizado) => {
                setUsuario(usuarioAtualizado);

                navigation.goBack();

                Alert.alert("Sucesso!", "Perfil atualizado com sucesso.");
              }}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
