import DefaultButton from '@/components/DefaultButton';
import { StyleSheet, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';


export default function Minigame1() {
  const width = useSharedValue(100);

  const handePressGrow = () => {
    width.value = withSpring(width.value + 50);
  }

  const handePressShrink = () => {
    width.value = withSpring(width.value - 50);
  }

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[styles.game_screen, {width}]}
      />
      <DefaultButton props={{marginVertical: 5}} onPress={handePressGrow} title='Click To Grow' bgColor={'black'} textColor={'white'} textSize={12}/>
      <DefaultButton props={{marginVertical: 5}} onPress={handePressShrink} title='Click To Shrink' bgColor={'black'} textColor={'white'} textSize={12}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(245, 215, 200)'
  },
  game_screen: {
    height: 100,
    backgroundColor: 'blue',
    marginBottom: 10
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
