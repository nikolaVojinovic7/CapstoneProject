import React, {useState, useEffect} from 'react';
import styles from '../styles/StartRecipesStyles.js';
import IdleTimerManager from 'react-native-idle-timer';
import {Alert, Modal, Pressable} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { min } from 'react-native-reanimated';


const StartRecipeScreen = ({route, navigation}) => {
  let [recipeItem, setRecipeItem] = useState(route.params.item);
  let [ingredients, setIngredients] = useState(recipeItem.recipeToIngredients);
  let [displayIngredients, setDisplayIngredients] = useState(
    recipeItem.recipeToIngredients,
  );
  let [input, setInput] = useState(0);
  let [lock, setLock] = useState(false);
  let [iconName, setIconName] = useState('lock-open-sharp');
  let [lockColour, setLockColour] = useState('black');
  const [modalVisible, setModalVisible] = useState(false);
  const [cooktime, setCooktime] = useState(0)
  const [running, setRunning] = useState(false);
  const [unitType, setUnitType] = useState('usCustomary');
  let details = [
    'PREP TIME: \n' + recipeItem.prepTime,
    'COOK TIME: \n' + recipeItem.cookTime,
    'TOTAL TIME: \n' + recipeItem.totalTime,
  ];

  const cooktimeToSeconds = () =>{
    let time = recipeItem.cookTime;
    let hours = 0;
    let mins = 0;
    
    if(time.includes("hr")){
    hours = parseInt(time.match(/([\d.]+) *hr/)[1]);
    }
    if(time.includes("min")){
    mins = parseInt(time.match(/([\d.]+) *min/)[1]);
    }

    let hoursInSec = hours * 3600;
    let minInSec = mins * 60
    let totalSec = hoursInSec + minInSec;

    setCooktime(totalSec);

  }

  useEffect(() => {
    cooktimeToSeconds();
  })

  const calculateWeight = () => {
    let serv = parseFloat(recipeItem.servings);
    let multiplyBy = parseFloat(input);
    const copy = ingredients.map((item) => ({...item}));
    copy.forEach((element) => {
      let usCustomaryWeight = (element.usCustomaryWeight / serv) * multiplyBy;
      let metricWeight = (element.metricWeight / serv) * multiplyBy;
      if(usCustomaryWeight > 1 && element.usCustomaryUnitType == "cup"){
        element.usCustomaryUnitType = "cups";
      }
      if(metricWeight >= 1000){
        metricWeight = metricWeight * 0.001;
        element.metricUnitType = "kg"
      }
      if((usCustomaryWeight - Math.floor(usCustomaryWeight)) !== 0){
      usCustomaryWeight = usCustomaryWeight.toFixed(2);
      }

      if((metricWeight - Math.floor(metricWeight)) !== 0){
      metricWeight = metricWeight.toFixed(2);
      }

      element.metricWeight = metricWeight;
      element.usCustomaryWeight = usCustomaryWeight;
    });
    setDisplayIngredients(copy);
  };

  const setScreenLock = () => {
    IdleTimerManager.setIdleTimerDisabled(true);
  };

  const disableScreenLock = () => {
    IdleTimerManager.setIdleTimerDisabled(false);
  };

  const lockScreen = () => {
    if (lock == false) {
      setScreenLock;
      setLock(true);
      setIconName('lock-closed-sharp');
      setLockColour('red');
    } else {
      disableScreenLock;
      setLock(false);
      setIconName('lock-open-sharp');
      setLockColour('black');
    }
  };

  const pause = () => {
    setRunning(false);
  }

  const play =() => {
    setRunning(true);
  }

  const convertUSCustomary = () =>{
    setUnitType('usCustomary');
  }

  const convertMetric =() => {
    setUnitType('metric')
  }


  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {
            <ImageBackground
              source={{uri: recipeItem.imageUrl}}
              style={styles.image}></ImageBackground>
          }
        </View>
        <View style={styles.RectangleShapeView}>
          {<Text style={styles.recipeTitleText}>{recipeItem.name}</Text>}
        </View>
        <TouchableOpacity style={styles.favBtn}>
          <Icon name="heart" size={40} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.lockBtn}>
        <TouchableOpacity style={styles.lock} onPress={() => lockScreen()}>
          <Ionicon name={iconName} size={35} color={lockColour} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.clock}>
          <Ionicon
            name="alarm-sharp"
            size={35}
            color="black"
            onPress={() => setModalVisible(true)}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.infoContainer}>
        <View style={{padding: 10, paddingTop: 0, paddingBottom: 3}}>
          <Table borderStyle={{borderWidth: 1.5, borderColor: '#C0C0C0'}}>
            <Row
              data={details}
              style={{height: 50}}
              textStyle={{textAlign: 'center'}}
            />
          </Table>
        </View>
        <View style={styles.lvlServings}>
          <Text style={styles.h2Text}>
            Level:
            {<Text style={styles.infoText}> {recipeItem.level}</Text>}
          </Text>
          <View style={styles.servings}>
            <Text style={styles.h2Text}>Servings:</Text>
            <TextInput
              style={styles.inputText}
              maxLength={2}
              keyboardType="numeric"
              numeric
              placeholder={recipeItem.servings.toString()}
              placeholderTextColor="black"
              onChangeText={(num) => {
                setInput(num);
              }}
              onSubmitEditing={() => {
                calculateWeight();
              }}
            />
          </View>
        </View>
        <View style={styles.unitStyle}>
          <TouchableOpacity style={styles.customaryBtn} onPress={() => convertUSCustomary()}>
            <Text style={styles.units}>US Customary</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => convertMetric()}>
            <Text style={styles.units}>Metric</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.h2Text}>Ingredients:</Text>
        <Text style={{flexDirection: 'column'}}>
          {displayIngredients.map((item) => {
            if(unitType == 'usCustomary'){
            return (
              <Text key={item.id} style={styles.infoText}>
                {item.usCustomaryWeight} {item.usCustomaryUnitType} {item.ingredient.name}
                {'\n'}
              </Text>
            );
            }
            else{
              return (
                <Text key={item.id} style={styles.infoText}>
                  {item.metricWeight} {item.metricUnitType} {item.ingredient.name}
                  {'\n'}
                </Text>
              );
            }
          })}
        </Text>
        <Text style={styles.h2Text}>Directions:</Text>
        <Text style={styles.infoText}>
          {recipeItem.directions.replace(/([^:]\/)\/+/g, '$1')}
        </Text>
      </ScrollView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.closeBtn}
                onPress={() => setModalVisible(!modalVisible)}>
                <Ionicon name="close-circle-outline" size={35} color="red" />
              </TouchableOpacity>
              <CountDown
                size={30}
                until={cooktime}
                onFinish={() => alert('Your meal is ready! Enjoy!')}
                digitStyle={{
                  backgroundColor: 'black',
                  borderWidth: 4,
                  borderColor: '#1CC625',
                }}
                digitTxtStyle={{color: '#1CC625'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: '#1CC625'}}
                timeToShow={['H', 'M', 'S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                running={running}
              />
              <View style={styles.playStop}>
                <TouchableOpacity
                  style={styles.playBtn}
                  onPress={() => play()}>
                  <Ionicon name="play-circle" size={45} color="#1CC625" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.pauseBtn}
                  onPress={() => pause()}>
                  <Ionicon name="pause-circle" size={45} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default StartRecipeScreen;
