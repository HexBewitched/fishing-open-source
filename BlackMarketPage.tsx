import * as React from "react";
import Background from './assets/bshopart.png';
import { StyleSheet, View, Image, TouchableOpacity, Text, Alert } from "react-native";

interface BMarketProps {
    money: number,
    setPage: (num:number) => void,
    setMoney: (num:number) => void,
    setRPerc: (num:number) => void,
    setRCount: (num:number) => void,
    rPerc: number,
    setKHBuy: (num:number) => void,
    kHBuy: number
    rGWBuy: number,
    setRGWBuy: (num:number) => void,
    tSBuy: number,
    setTSBuy: (num:number) => void,
    bHBuy: number,
    setBHBuy: (num:number) => void,
    mBuy: number,
    setMBuy: (num:number) => void,
    aBBuy: number,
    setABBuy: (num:number) => void,
    rCount: number
}

export default function BlackMarketPage(props: BMarketProps)
{
    //button events
    const backOnPress = () => {
        props.setPage(0)
    }
    const kHOnPress = () => {
        if(props.money >= 50000) {
            props.setMoney(props.money - 50000)
            props.setRCount(props.rCount + 1)
            props.setKHBuy(1)
            Alert.alert("you got the kirby hook", "MMMmm this is very good I want more, -a random fish")
        } else {
            Alert.alert("you dont have enough money", "you need " + (50000 - props.money) + " more dollars")
        }
    }
    const rGWOnPress = () => {
        if(props.money >= 100000) {
            props.setMoney(props.money - 100000)
            props.setRPerc(props.rPerc + 0.05)
            props.setRGWBuy(1)
            Alert.alert("you got the red gummy worms", "they are sticky and chewy but expired... somehow")
        } else {
            Alert.alert("you dont have enough money", "you need " + (100000 - props.money) + " more dollars")
        }
    }
    const tSOnPress = () => {
        if(props.money >= 250000) {
            props.setMoney(props.money - 250000)
            props.setRPerc(props.rPerc + 0.05)
            props.setTSBuy(1)
            Alert.alert("you got the trade ship", "its more mobile and has more capacity for even more fishing")
        } else {
            Alert.alert("you dont have enough money", "you need " + (250000 - props.money) + " more dollars")
        }
    }
    const bHOnPress = () => {
        if(props.money >= 500000) {
            props.setMoney(props.money - 500000)
            props.setRCount(props.rCount + 1)
            props.setBHBuy(1)
            Alert.alert("you got the bloodied hook", "its bloody your not sure what type of blood it is... you shouldnt ask questioins")
        } else {
            Alert.alert("you dont have enough money", "you need " + (500000 - props.money) + " more dollars")
        }
    }
    const mOnPress = () => {
        if(props.money >= 1000000) {
            props.setMoney(props.money - 1000000)
            props.setRPerc(props.rPerc + 0.05)
            props.setMBuy(1)
            Alert.alert("you got the maggots", "they are gross but effective")
        } else {
            Alert.alert("you dont have enough money", "you need " + (1000000 - props.money) + " more dollars")
        }
    }
    const aBOnPress = () => {
        if(props.money >= 5000000) {
            props.setMoney(props.money - 5000000)
            props.setRPerc(props.rPerc + 0.05)
            props.setABBuy(1)
            Alert.alert("you got the amazon box", "its a box a really big box its light easy to transport and big")
        } else {
            Alert.alert("you dont have enough money", "you need " + (5000000 - props.money) + " more dollars")
        }
    }
    
    return (
        <View style={styles.container}>
            <Image source={Background} style={styles.background} width={500} height={800} />
            <TouchableOpacity style={styles.backButton} onPress={backOnPress}>
                <Text style={styles.backText}>press to go back</Text>
            </TouchableOpacity>
            {props.kHBuy === 0 ? <TouchableOpacity style={styles.kHButton} onPress={kHOnPress}>
                <Text style={styles.kHText}>purchase the kirby hook for $50000</Text>
            </TouchableOpacity> : null}
            {props.rGWBuy === 0 ? <TouchableOpacity style={styles.rGWButton} onPress={rGWOnPress}>
                <Text style={styles.rGWText}>purchase the red gummy worms for $100000</Text>
            </TouchableOpacity> : null}
            {props.tSBuy === 0 ? <TouchableOpacity style={styles.tSButton} onPress={tSOnPress}>
                <Text style={styles.tSText}>purchase the Trade ship for $250000</Text>
            </TouchableOpacity> : null}
            {props.bHBuy === 0 ? <TouchableOpacity style={styles.bHButton} onPress={bHOnPress}>
                <Text style={styles.bHText}>purchase the bloodied hook for $500000</Text>
            </TouchableOpacity> : null}
            {props.mBuy === 0 ? <TouchableOpacity style={styles.mButton} onPress={mOnPress}>
                <Text style={styles.mText}>purchase the maggots for $1000000</Text>
            </TouchableOpacity> : null}
            {props.aBBuy === 0 ? <TouchableOpacity style={styles.aBButton} onPress={aBOnPress}>
                <Text style={styles.aBText}>purchase the amazon box for $5000000</Text>
            </TouchableOpacity> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: -60,
        right: 0,
        width: 500,
        height: 800,
    },
    backButton: {
        margin: 5,
        padding: 10,
        borderRadius: 1000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        alignSelf: "center",
        top: 100,
    },
    backText: {
        fontSize: 20,
        color: '#fff',
    },
    kHButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 200,
    },
    kHText: {
        fontSize: 10,
        color: '#fff',
    },
    rGWButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 200,
        right: 0,
    },
    rGWText: {
        fontSize: 7,
        color: '#fff',
    },
    tSButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 170,
    },
    tSText: {
        fontSize: 10,
        color: '#fff',
    },
    bHButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 170,
        right: 0,
    },
    bHText: {
        fontSize: 7,
        color: '#fff',
    },
    mButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 137,
    },
    mText: {
        fontSize: 10,
        color: '#fff',
    },
    aBButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 137,
        right: 0,
    },
    aBText: {
        fontSize: 7,
        color: '#fff',
    }
    
    
});