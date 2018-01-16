import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

var image = new Object();
image['Fruit'] = 'http://icons.iconarchive.com/icons/gcds/chinese-new-year/512/orange-icon.png';
image['Meat'] = 'http://icons.iconarchive.com/icons/fixicon/market/128/cutlet-icon.png';
image['Dairy'] = 'http://icons.iconarchive.com/icons/iconsmind/outline/256/Milk-Bottle-icon.png';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number : 0
    }
  }

  addOne() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    return (
      <View style = {styles.foodItem}>
        <Image
         style={{width: 50, height: 50}}
         source={{uri: image[this.props.type]}}
       />
        <Text> {this.props.type} </Text>
        <Button style= {styles.button}
          onPress={() => {
            this.addOne();
          }}
          title = {this.state.number.toString()}
        />
      </View>
    );
  }
}

export default class App extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  render() {
    return (
      <View style={styles.container}>
        <Food style = {styles.item} type = 'Fruit'/>
        <Food style = {styles.item} type = 'Meat'/>
        <Food style = {styles.item} type ='Dairy'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    paddingTop: '10%',
    paddingBottom: '10%',
    marginTop: '50',
    marginBottom: '50',

  },
  foodItem: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: 50
  },
  button: {
    height: 50,
    width: 50
  }
});
