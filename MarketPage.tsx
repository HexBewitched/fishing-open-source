import * as React from "react";
import Background from './assets/shopart.png';
import { Image, StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";

interface MarketProps {
    money: number,
    exp: number,
    setPage: (num: number) => void,
    setMoney: (num:number) => void,
    setRCount: (num:number) => void,
    setRPerc: (num:number) => void,
    rPerc: number,
    setWBuy: (num:number) => void,
    wBuy: number,
    setRHBuy: (num:number) => void,
    rHBuy: number,
    setSBBuy: (num:number) => void,
    sBBuy: number
    setSHBuy: (num:number) => void,
    sHBuy: number,
    setRWBuy: (num:number) => void,
    rWBuy: number,
    setASBuy: (num:number) => void,
    aSBuy: number,
    rCount: number
}

export default function MarketPage(props: MarketProps)
{
    
    
    const backOnPress = () => {
        props.setPage(0)
    }
    const rustyOnPress = () => {
        if (props.money >= 1000) {
            props.setMoney(props.money - 1000)
            props.setRCount(props.rCount + 1)
            props.setRHBuy(1)
            Alert.alert("you got the rusty hook", "its definantly a health hazard but anything is better than what you have now")
        } else {
            Alert.alert("you dont have enough money", "you need " + (1000-props.money) + " more dollars")
        }
    }
    const wormOnPress = () => {
        if (props.money >= 2000) {
            props.setMoney(props.money - 2000)
            props.setRPerc(props.rPerc +  0.05)
            Alert.alert("You got the worms", "they are slimy and shriveled up its good that you putting them out of their misery")
            props.setWBuy(1)
            console.log(props.rPerc)
        } else {
            Alert.alert("you dont have enough money", "you need " + (2000-props.money) + " more dollars")
        }
    }
    const sBOnPress = () => {
        if (props.money >= 3000) {
            props.setMoney(props.money - 3000)
            props.setRPerc(props.rPerc + 0.05)
            Alert.alert("You got the sail boat", "your uncle charged a pretty penny for this Ol' Betsy better be worth it")
            props.setSBBuy(1)
        } else {
            Alert.alert("you dont have enough money", "you need " + (3000-props.money) + " more dollars")
        }
    }
    const steelOnPress = () => {
        if(props.money >= 5000) {
            props.setMoney(props.money - 5000)
            props.setRCount(props.rCount + 1)
            props.setSHBuy(1)
            Alert.alert("you got the steel hook", "a nice upgrade to your hook this surely will get more fishes attention")
        } else {
            Alert.alert("you dont have enough money", "you need " + (5000 - props.money) + " more dollars")
        }
    }
    const rWOnPress = () => {
        if(props.money >= 10000) {
            props.setMoney(props.money - 10000)
            props.setRPerc(props.rPerc + 0.05)
            props.setRWBuy(1)
            Alert.alert("you got the rainbow worms", "looking healthier and prettier")
        } else {
            Alert.alert("you dont have enough money", "you need " + (10000 - props.money) + " more dollars")
        }
    }
    const aSOnPress = () => {
        if(props.money >= 20000) {
            props.setMoney(props.money - 20000)
            props.setRPerc(props.rPerc + 0.05)
            props.setASBuy(1)
            Alert.alert("you got the attack ship", "this cost a fortune for your humble self but you now truely can get those to those hot spots of fish")
        } else {
            Alert.alert("you dont have enough money", "you need " + (20000 - props.money) + " more dollars")
        }
    }

    return (
        <View style={styles.container}>
         <Image source={Background} style={styles.background} width={500} height={800} />
         <TouchableOpacity style={styles.backButton} onPress={backOnPress}>
           <Text style={styles.backText}>leave the market</Text>  
         </TouchableOpacity>  
         {props.rHBuy === 0 ? <TouchableOpacity style={styles.rustyButton} onPress={rustyOnPress}>
             <Text style={styles.rustyText}>purchase the rusty hook for $1000</Text>
         </TouchableOpacity> : null}
         {props.wBuy === 0 ?<TouchableOpacity style={styles.wormButton} onPress={wormOnPress}>
             <Text style={styles.wormText}>purchase the worms for $2000</Text>
         </TouchableOpacity> : null}
         {props.sBBuy === 0 ?<TouchableOpacity style={styles.sBButton} onPress={sBOnPress}>
             <Text style={styles.sBText}>purchase the sail boat for $3000</Text>
         </TouchableOpacity> : null}
         {props.sHBuy === 0 ?<TouchableOpacity style={styles.steelButton} onPress={steelOnPress}>
            <Text style={styles.steelText}>purchase the steel hook for $5000</Text>    
         </TouchableOpacity> : null}
         {props.rWBuy === 0 ?<TouchableOpacity style={styles.rWButton} onPress={rWOnPress}>
             <Text style={styles.rWText}>purchase the rainbow worms for $10000</Text>
         </TouchableOpacity> : null}
         {props.aSBuy === 0 ?<TouchableOpacity style={styles.aSButton} onPress={aSOnPress}>
             <Text style={styles.aSText}>purchase the attack ship for $20000</Text>
         </TouchableOpacity> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        backgroundColor: '#7a7a7a',
        margin: 5,
        padding: 10,
        borderRadius: 1000000,
        position: "absolute",
        top: 180,
        alignSelf: "center",
    },
    backText: {
        fontSize: 20,
        color: '#fff',
    }, 
    rustyText: {
        fontSize: 10,
        color: "#fff",
    },
    rustyButton: {
        margin: 5,
        padding: 10,
        backgroundColor: "#7a7a7a",
        borderRadius: 10000000,
        position: "absolute",
        bottom: 240,
    },
    wormText: {
        fontSize: 10,
        color: "#fff",
    },
    wormButton: {
        margin: 5,
        padding: 10,
        backgroundColor: "#7a7a7a",
        borderRadius: 10000000,
        position: "absolute",
        bottom: 240,
        right: 0,
    },
    sBButton: {
        margin: 5,
        padding: 10,
        backgroundColor: '#7a7a7a',
        borderRadius: 10000,
        position: "absolute",
        bottom: 205,
    },
    sBText: {
        fontSize: 10,
        color: '#fff',
    },
    steelButton: {
        margin: 5,
        padding: 10,
        backgroundColor: '#7a7a7a',
        borderRadius: 10000,
        position: "absolute",
        right: 0,
        bottom: 205,
    },
    steelText: {
        fontSize: 10,
        color: '#fff',
    },
    rWButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 170,
    },
    rWText: {
        fontSize: 10,
        color: '#fff',
    },
    aSButton: {
        margin: 5,
        padding: 10,
        borderRadius: 10000,
        backgroundColor: '#7a7a7a',
        position: "absolute",
        bottom: 135,
    },
    aSText: {
        fontSize: 10,
        color: '#fff',
    }
});