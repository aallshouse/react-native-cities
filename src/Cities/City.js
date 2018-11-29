import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

export default class City extends React.Component {
  static navigationOptions = (props) => { // A
    const { city } = props.navigation.state.params;
    return {
      title: city.city,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
      }
    }
  }

  state = {
    name: '',
    info: ''
  };

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    });
  }

  addLocation = () => { // B
    if (this.state.name === '' || this.state.info === '') return
    const { city } = this.props.navigation.state.params;
    const location = {
      name: this.state.name,
      info: this.state.info
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({ name: '', info: '' });
  }

  render() {
    const { city } = this.props.navigation.state.params;
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
        <ScrollView contentContainerStyle={[!city.locations.length && { flex: 1 }]}>
          <View style={[styles.locationsContainer, !city.locations.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !city.locations.length && <CenterMessage message='No locations for this city!' />
            }
            { // D
              city.locations.map((location, index) => (
                <View key={index} style={styles.locationContainer}>
                  <Text style={styles.locationName}>{location.name}</Text>
                  <Text style={styles.locationInfo}>{location.info}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
        <TextInput // E
          onChangeText={val => this.onChangeText('name', val)}
          placeholder='Location name'
          value={this.state.name}
          style={styles.input}
          placeholderTextColor='white'
        />
        <TextInput
          onChangeText={val => this.onChangeText('info', val)}
          placeholder='Location info'
          value={this.state.info}
          style={[styles.input]}
          placeholderTextColor='white'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    backgroundColor: '#33c1ff',
    paddingHorizontal: 8,
    height: 50
  },
  input2: {},
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  locationName: {},
  locationInfo: {},
  locationsContainer: {}
});