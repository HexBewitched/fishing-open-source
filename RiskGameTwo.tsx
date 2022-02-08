import * as React from "react";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import scaryseamine from './assets/seaminescaryyyyyy.png';

interface GamePropsTwo{
    caught: number,
    setCaught: (num:number) => void,
    money: number,
    setMoney: (num:number) => void,
    setPage: (num:number) => void,
    setGameEnd: (num:number) => void
}

export default function RiskGameTwo(props: GamePropsTwo)
{
    const[code, setCode] = React.useState("1234")
    const[current, setCurrent] = React.useState("")
    const[timeUp, setTimeUp] = React.useState(0)



    React.useEffect(() => {
        setCode(Math.floor(Math.random() * 8999 + 1000).toString())
        props.setGameEnd(0)
    }, []);

    React.useEffect(() => {
        if(current == code) {
            props.setCaught(0)
            props.setGameEnd(1)
            props.setPage(0)
        }
    }, [current]);

    React.useEffect(() => {
        console.log("Time:" + timeUp);
        if(timeUp === 1) {
            if(current == code) {
                props.setCaught(0)
                props.setGameEnd(1)
                props.setPage(0)
            } else if (current != code) {
                props.setGameEnd(1)
                props.setCaught(Math.floor(Math.pow(Math.random() * 2, 3)) / 4 + 1)
                props.setPage(0)
            }
        }
    }, [timeUp]);
    setTimeout(() => {
        setTimeUp(1)
    }, 6000)


    return (
        <View style={styles.container}>
            <Image source={scaryseamine} style={styles.image}/>
            <Text style={styles.text}>Quick type the numbers displayed on your screen in the text box (tap the numbers to start entering the code)</Text>
            <TextInput style={styles.input} onChangeText={setCurrent} placeholder={code} placeholderTextColor={"#777"} maxLength={4} keyboardType="number-pad" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: -60,
    },
    input: {
    margin: 15,
    borderColor: '#000',
    borderWidth: 1,
        
    width: 400,
    height: 200,

    fontSize: 40,
    textAlign: "center",
    color: "#000"
        
    },
    text: {
        margin: 5,
        padding: 10,
        color: '#000',
        fontSize: 30,
        position: "absolute",
        top: 10,
    }
});