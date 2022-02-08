import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, AsyncStorage, Alert, TextPropTypes, ProgressViewIOSComponent } from 'react-native';
import Background from './assets/titleart.png';
import BlackMarketPage from './BlackMarketPage';
import FishArray from './FishArrays';
import MarketPage from './MarketPage';
import RiskGameOne from './RiskGameOne';
import RiskGameTwo from './RiskGameTwo';


export default function MainPage() {
  const [page, setPage] = React.useState(0);
  const [money, setMoney] = React.useState(0);
  const [exp, setExp] = React.useState(0);
  const [rCount, setRCount] = React.useState(1);
  const [rPerc, setRPerc] = React.useState(0.25);
  const[rHBuy,setRHBuy] = React.useState(0);
  const[wBuy,setWBuy] = React.useState(0);
  const[sBBuy, setSBBuy] = React.useState(0);
  const[sHBuy, setSHBuy] = React.useState(0);
  const[rWBuy, setRWBuy] = React.useState(0);
  const [aSBuy, setASBuy] = React.useState(0);
  const[unlockedBM, setUnlockedBM] = React.useState(0);
  const[kHBuy, setKHBuy] = React.useState(0);
  const[rGWBuy, setRGWBuy] = React.useState(0);
  const[tSBuy, setTSBuy] = React.useState(0);
  const[bHBuy, setBHBuy] = React.useState(0);
  const[mBuy, setMBuy] = React.useState(0);
  const[aBBuy, setABBuy] = React.useState(0);
  const[caught, setCaught] = React.useState(0);
  const[gameEnd,setGameEnd] = React.useState(1);
  const[risk, setRisk] = React.useState(2);

  
  console.log("Page:" + page);
  
  //gets market save states
  const getRHBuy = async () => {
    const amount = await AsyncStorage.getItem("rHBought");
    if(amount) 
      setRHBuy(parseInt(amount))
  }
  const getWBuy = async () => {
    const amount = await AsyncStorage.getItem("wBought")
    if(amount)
      setWBuy(parseInt(amount))
  }
  const getSBBuy = async () => {
    const amount = await AsyncStorage.getItem("sBBought")
    if(amount)
      setSBBuy(parseInt(amount))
  }
  const getSHBuy = async () => {
    const amount = await AsyncStorage.getItem("sHBought")
    if(amount)
      setSHBuy(parseInt(amount))
  }
  const getRWBuy = async () => {
    const amount = await AsyncStorage.getItem("rWBought")
    if(amount)
      setRWBuy(parseInt(amount))
  }
  const getASBuy = async () => {
    const amount = await AsyncStorage.getItem("aSBoughgt")
    if(amount)
      setASBuy(parseInt(amount))
  }

  //checks if BM
  const getUnlockedBM = async () => {
    const amount = await AsyncStorage.getItem("ifBM")
    if(amount)
      setUnlockedBM(parseInt(amount))
  }
  
  //gets black market save states
  const getKHBuy = async () => {
    const amount = await AsyncStorage.getItem("kHBought")
    if(amount)
      setKHBuy(parseInt(amount))
  }
  const getRGWBuy = async () => {
    const amount = await AsyncStorage.getItem("rGWBought")
    if(amount)
      setRGWBuy(parseInt(amount))
  }
  const getTSBuy = async () => {
    const amount = await AsyncStorage.getItem("tSBought")
    if(amount)
      setTSBuy(parseInt(amount))
  }
  const getBHBuy = async () => {
    const amount = await AsyncStorage.getItem("bHBought")
    if(amount)
      setBHBuy(parseInt(amount))
  }
  const getMBuy = async () => {
    const amount = await AsyncStorage.getItem("mBought")
    if(amount)
      setMBuy(parseInt(amount))
  }
  const getABBuy = async () => {
    const amount = await AsyncStorage.getItem("aBBought")
    if(amount)
      setABBuy(parseInt(amount))
  }

  // Gets exp and money
  const getMoney = async () => {
    const amount = await AsyncStorage.getItem("money");
    if (amount)
      setMoney(parseFloat(amount));
  }
  const getExp = async () => {
    const amount = await AsyncStorage.getItem("exp");
    if(amount)
      setExp(parseInt(amount))
  }
  
  useEffect(() => {
    getMoney();
    getExp();
    getRHBuy();
    getWBuy();
    getSBBuy();
    getSHBuy();
    getRWBuy();
    getASBuy();
    getUnlockedBM();
    getKHBuy();
    getRGWBuy();
    getTSBuy();
    getBHBuy();
    getMBuy();
    getABBuy();
  }, []);
  useEffect(() => {
    AsyncStorage.setItem("money", money.toString());
  }, [money]);
  useEffect(() => {
    AsyncStorage.setItem("exp", exp.toString());
  }, [exp]);
  useEffect(() => {
    AsyncStorage.setItem("rHBought", rHBuy.toString());
  }, [rHBuy]);
  useEffect(() => {
    AsyncStorage.setItem("wBought", wBuy.toString());
  }, [wBuy]);
  useEffect(() => {
    AsyncStorage.setItem("sBBought", sBBuy.toString()); 
  }, [sBBuy]);
  useEffect(() => {
    AsyncStorage.setItem("sHBought", sHBuy.toString());
  }, [sHBuy]);
  useEffect(() => {
    AsyncStorage.setItem("rWBought",rWBuy.toString());
  }, [rWBuy]);
  useEffect(() => {
    AsyncStorage.setItem("aSBought", aSBuy.toString());
  }, [aSBuy]);
  useEffect(() => {
    AsyncStorage.setItem("ifBm", unlockedBM.toString());
  }, [unlockedBM]);
  useEffect(() => {
    AsyncStorage.setItem("kHBought", kHBuy.toString());
  }, [kHBuy]);
  useEffect(() => {
    AsyncStorage.setItem("rGWBought", rGWBuy.toString());
  }, [rGWBuy]);
  useEffect(() => {
    AsyncStorage.setItem("tSBought", tSBuy.toString());
  }, [tSBuy]);
  useEffect(() => {
    AsyncStorage.setItem("bHBought", bHBuy.toString());
  }, [bHBuy]);
  useEffect(() => {
    AsyncStorage.setItem("mBought", mBuy.toString());
  }, [mBuy]);
  useEffect(() => {
    AsyncStorage.setItem("aBBought", aBBuy.toString());
  }, [aBBuy]);

  const catchFish = () => {
    let rareNum = 1;
    while (rareNum < rCount) {
      if (Math.random() < rPerc)
        rareNum++;
      else
        break;
    }

    const newFishArray = FishArray.filter(fish => fish.rarity === rareNum);
    let pick = Math.floor(Math.random() * newFishArray.length);
    let fish = newFishArray[pick];
    Alert.alert("You caught a " + fish.name, "its worth $" + fish.price);
    setMoney(Math.round((money + fish.price)* 100) / 100)
    setExp(exp + fish.exp);
  }

  const titleOnPress = () => {
    const newRisk = Math.floor(Math.random() * 3);
    setRisk(newRisk);

    if (newRisk === 1){
      let riskPage = Math.floor(Math.random() * 2 + 1);
      setGameEnd(0)
      if(riskPage === 1) {
        setPage(3)
      } else if (riskPage === 2) {
        setPage(4)
      }
    } else {
      catchFish();
    }
  }

  useEffect(() => {
    if (gameEnd == 1) {
      if(caught === 0){
        catchFish();
      } else if (caught === 1){
        Alert.alert("you failed to catch the fish and lost half your money 😭", "you now have" + (money * 0.5) + "dollars")
        setMoney(money * 0.5)
      } else if (caught === 2) {
        Alert.alert("you failed to catch the fish and lost all your money 😭", "you now have 0 dollars")
        setMoney(0)
      }
    }
  }, [gameEnd, caught]);

  const bMarketOnPress = () => {
    if (exp >= 500) {
      setPage(1)
      if (unlockedBM === 0) {
        Alert.alert("welcome to the black market", "you can buy more things for better fish and you have unlocked more things to catch automatically")
        setUnlockedBM(1)
      }
    }
  }
  const marketOnPress = () => {
    setPage(2)
  }

  if (page === 0){
    return (
      <View style={styles.container}>
        <Image source={Background} style={styles.background} width={500} height={800} />
        <Text style={styles.text}>Welcome to fishing!</Text>
        <View style={styles.money}>
          <Text style={styles.moneyText}>You have ${money}</Text>
          </View>
        <TouchableOpacity style={styles.button} onPress={titleOnPress}> 
        <Text style={styles.buttonText}>press to fish</Text>
        </TouchableOpacity>
        {exp >= 500 ? <TouchableOpacity style={styles.bMarketButton} onPress={bMarketOnPress}>
          <Text style ={styles.bMarketText}>go to the black market</Text>
        </TouchableOpacity> : null}
        <TouchableOpacity style={styles.marketButton} onPress={marketOnPress}>
          <Text style={styles.marketText}>go to the market</Text>
        </TouchableOpacity>
        <Text style={styles.expButtonText}>You are level {Math.floor(exp/100)} and have {exp} exp</Text>
        <StatusBar style="auto" />
      </View>
    );
  }else if (page === 2) {
    return (<MarketPage money={money} exp={exp} setPage={setPage} setMoney={setMoney} setRPerc={setRPerc} setRCount={setRCount} rPerc={rPerc} wBuy={wBuy} setWBuy={setWBuy} sBBuy={sBBuy} setSBBuy={setSBBuy} rHBuy={rHBuy} setRHBuy={setRHBuy} setSHBuy={setSHBuy} sHBuy ={sHBuy} setRWBuy={setRWBuy} rWBuy ={rWBuy} setASBuy={setASBuy} aSBuy={aSBuy} rCount={rCount}/>)
  }else if (page === 1) {
    return (<BlackMarketPage money={money} setPage={setPage} setMoney={setMoney} setRPerc={setRPerc} setRCount={setRCount} rPerc={rPerc} kHBuy={kHBuy} setKHBuy={setKHBuy} rGWBuy={rGWBuy} setRGWBuy={setRGWBuy} tSBuy={tSBuy} setTSBuy={setTSBuy} bHBuy={bHBuy} setBHBuy={setBHBuy} mBuy={mBuy} setMBuy={setMBuy} aBBuy={aBBuy} setABBuy={setABBuy} rCount={rCount}/>)
  }else if (page === 3) {
    return (<RiskGameOne caught={caught} setCaught={setCaught} money={money} setMoney={setMoney} setPage={setPage} setGameEnd={setGameEnd}/>)
  }else if (page === 4) {
    return (<RiskGameTwo caught={caught} setCaught={setCaught} money={money} setMoney={setMoney} setPage={setPage} setGameEnd={setGameEnd}/>)
  } else {
    return (null);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#7a7a7a',
    borderRadius: 100000,
    padding: 10,
    margin: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    color: '#fff',
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 500,
    height: 800,
  },
  text: {
    margin: 5,
    fontSize: 25,
  },
  money: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    margin: 5,
    position: "absolute",
    top: 110,
    right: 21,
  },
  moneyText: {
    fontSize: 20,
  },
  expButtonText: {
    fontSize: 20,
  },
  bMarketButton: {
    backgroundColor: '#7a7a7a',
    borderRadius: 1000000000,
    padding: 10,
    margin: 5,
    position: "absolute",
    bottom: 200,
  },
  bMarketText: {
    fontSize: 20,
    color: "#fff",
  },
  marketText: {
    fontSize: 20,
    color: "#fff",
  },
  marketButton: {
    backgroundColor: "#7a7a7a",
    borderRadius: 1000000,
    padding: 10,
    margin: 5,
    position: "absolute",
    bottom: 250,
  }
});