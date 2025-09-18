import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen from './Home';
import Minigame1 from './Minigame1';
import Minigame2 from './Minigame2';

import { useColorScheme } from '@/components/useColorScheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="HomeMain"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="HomeMain" component={HomeScreen} />
  </Stack.Navigator>
)


const Minigame1Stack = () => (
  <Stack.Navigator
    initialRouteName="Minigame1"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Minigame1" component={Minigame1} />
  </Stack.Navigator>
)


const Minigame2Stack = () => (
  <Stack.Navigator
    initialRouteName="Minigame2"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Minigame2" component={Minigame2} />
  </Stack.Navigator>
)


const Minigame3Stack = () => (
  <Stack.Navigator
    initialRouteName="Minigame3"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Minigame3" component={Minigame2} />
  </Stack.Navigator>
)

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'rgb(150, 170, 255)',
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
      initialRouteName='Home'>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tab.Screen
        name="Minigame1"
        component={Minigame1Stack}
        options={{
          title: 'Minigame 1',
          tabBarIcon: ({ color }) => <TabBarIcon name="arrow-right" color={color} />,
        }}
      />
      <Tab.Screen
        name="Minigame2"
        component={Minigame2Stack}
        options={{
          title: 'Minigame 2',
          tabBarIcon: ({ color }) => <TabBarIcon name="arrow-right" color={color} />,
        }}
      />
      <Tab.Screen
        name="Minigame3"
        component={Minigame3Stack}
        options={{
          title: 'Minigame 3',
          tabBarIcon: ({ color }) => <TabBarIcon name="arrow-right" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
