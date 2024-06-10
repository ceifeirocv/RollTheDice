import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Vibration,
} from 'react-native';
import {PropsWithChildren, useState} from 'react';

import DiceOne from '../assets/dado-1.png';
import DiceTwo from '../assets/dado-2.png';
import DiceThree from '../assets/dado-3.png';
import DiceFour from '../assets/dado-4.png';
import DiceFive from '../assets/dado-5.png';
import DiceSix from '../assets/dado-6.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

function Dice({imageUrl}: DiceProps): JSX.Element {
  return (
    <View>
      <Image style={{width: 100, height: 100}} source={imageUrl} />
    </View>
  );
}

function App(): JSX.Element {
  const [diceNumber, setDiceNumber] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * 6);

    Vibration.vibrate();

    switch (roll) {
      case 0:
        setDiceNumber(DiceOne);
        break;
      case 1:
        setDiceNumber(DiceTwo);
        break;
      case 2:
        setDiceNumber(DiceThree);
        break;
      case 3:
        setDiceNumber(DiceFour);
        break;
      case 4:
        setDiceNumber(DiceFive);
        break;
      case 5:
        setDiceNumber(DiceSix);
        break;
    }
  };
  return (
    <View style={style.container}>
      <Text style={style.headerText}>Roll The Dice</Text>
      <Text style={style.descriptionText}>Tap in the dice to roll</Text>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 32,
        }}>
        <TouchableOpacity onPress={rollDice}>
          <Dice imageUrl={diceNumber} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#D1D8C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#615EFC',
  },
  descriptionText: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
    color: '#7E8EF1',
  },
});

export default App;
