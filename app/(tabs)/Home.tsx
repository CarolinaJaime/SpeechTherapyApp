import { StyleSheet, Text, View } from 'react-native';
import DefaultButton from '../../components/DefaultButton'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home Page</Text>
      </View>
      <View style={styles.separator}/>
      <View style={styles.body}>

        <View style={styles.buttonView}>
          <DefaultButton title='Button 1' bgColor='rgb(0, 0, 0)' textColor='white' textSize={16} />
          <DefaultButton title='Button 2' bgColor='rgb(0, 0, 0)' textColor='white' textSize={16} />
        </View>
      </View>
    </View>
  );
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
