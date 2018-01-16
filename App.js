import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

// var typeAmount = new Object();
// typeAmount['Fruit'];
// typeAmount['Meat'];
// typeAmount['Dairy'];

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
      <Button
        onPress={() => {
          this.addOne();
        }}
        title = {this.state.number.toString() + " " + this.props.type}
      />
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
    marginBottom: '50'
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 15,
    marginBottom: '5%'
  }
});
