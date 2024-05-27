import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import SelectCity from './src/screens/SelectCity';
import Movies from './src/screens/Movies';
import ShowDetails from './src/screens/ShowDetails';
import { Wrapper } from './src/components/Context/Wrapper';
import Theaters from './src/screens/Theaters';
import Ticket from './src/screens/Ticket';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Wrapper>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SelectCity" component={SelectCity} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name='ShowDetails' component={ShowDetails} />
        <Stack.Screen name='Theaters' component={Theaters}/>
        <Stack.Screen name='Ticket' component={Ticket} />
      </Stack.Navigator>
    </NavigationContainer>
    </Wrapper> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
