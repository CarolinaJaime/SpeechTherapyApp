import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';


export default function Minigame1() {
  return (
    <Animated.View 
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(245, 215, 200)'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
