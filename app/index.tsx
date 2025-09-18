import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import TabLayout from './(tabs)/_layout';
import LoadingScreen from './screens/Loading';

const Stack = createStackNavigator()

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tabs" component={TabLayout} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(255, 235, 215)'
  },
  header: {
    width: '100%',
    padding: 25,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: 'rgb(255, 235, 215)'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: "#000000ff"
  },
  body: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 235, 215)'
  },
  buttonView: { 
    width: '75%',
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  buttonStyle: {

  }
});
