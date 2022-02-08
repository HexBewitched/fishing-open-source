import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import shark from './assets/sharkscaryyyyyy.png';

interface GamePropsOne{
    caught: number,
    setCaught: (num:number) => void,
    money: number,
    setMoney: (num:number) => void,
    setPage: (num:number) => void,
    setGameEnd: (num:number) => void
}
export default function RiskGameOne(props: GamePropsOne) {
    const[taps, setTaps] = React.useState(0)
    const[timeUp, setTimeUp] = React.useState(0)

    React.useEffect (() => {
        props.setGameEnd(0)
        if(taps >= 20){
            props.setCaught(0)
            props.setGameEnd(1)
            props.setPage(0)
        }
    }, [taps]);
    
    React.useEffect(() => {
        console.log("Time:" + timeUp);
        if(timeUp === 1) {
            console.log("Taps:" + taps);
            if(taps >= 20) {
                props.setCaught(0)
                props.setGameEnd(1)
                props.setPage(0)
            } else if (taps < 20) {
                props.setGameEnd(1)
                props.setCaught(Math.floor(Math.pow(Math.random() * 2, 3)) / 4 + 1)
                props.setPage(0)
            }
        }
    }, [timeUp]);
    setTimeout(() => {
        setTimeUp(1)
    }, 5000)
    const tapperOnPress = () => {
        setTaps(taps + 1);
    }
    
    return (
        <View style={styles.container}>
            <Image source={shark} style={styles.image} />
            <Text style={styles.text}> Quick tap 20 time in five seconds or you will fail to catch the fish</Text>
            <TouchableOpacity style={styles.tapperButton} onPress={tapperOnPress}>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 40,
        color: '#000',
        position: "absolute",
        top: 100,
        alignSelf: "auto",
    },
    tapperButton: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    image: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: -65,
    }
});