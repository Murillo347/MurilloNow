import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela1 from './src/Tela1';
import Saudacao from './src/Saudacao';
import Acesso from './src/Acesso';
import Cadastro from './src/Cadastro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Tela1}/>
        <Stack.Screen name="Greeting" component={Saudacao}/>
        <Stack.Screen name="Access" component={Acesso}/>
        <Stack.Screen name="Login" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}