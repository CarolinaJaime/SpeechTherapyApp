import { GestureResponderEvent, StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { Text, StyleSheet } from 'react-native';


export default function DefaultButton({ props = {}, title, onPress, bgColor, textColor, textSize }: { 
    props?: StyleProp<ViewStyle>, 
    title: string, 
    onPress?: ((event: GestureResponderEvent) => void),
    bgColor: string,
    textColor: string,
    textSize: number }) {
    return (
        <TouchableOpacity style={[styles.ButtonStyle, props, {backgroundColor: bgColor}]} onPress={onPress}>
            <Text style={[styles.TextStyle, {color: textColor, fontSize: textSize}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ButtonStyle: {
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    TextStyle: {
        padding: 5,
        textAlignVertical: 'center',
    }
});