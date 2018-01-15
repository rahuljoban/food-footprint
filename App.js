import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

export default class App extends React.Component {
  handleSubmit = () => {
    const value = this._form.getValue(); 
    console.log('value: ', value);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style ={styles.top}>
          <Text style={styles.title}>What did you eat today?</Text>
        </View>
          <Text style={styles.subTitle}>Fruits:</Text>
         <Form type={Food}/>
          <Button title="Submit!" onPress={this.handleSubmit}/>
      </View>
    );
  }
}

const Food = t.struct({
  quantity: t.String,
  source: t.maybe(t.String),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    alignItems: 'center',
    marginVertical: '10%',
  },
  title: {
    fontSize: 20,
  },
  subTitle: {
    fontSize: 15,
    marginBottom: '5%'
  }
});
