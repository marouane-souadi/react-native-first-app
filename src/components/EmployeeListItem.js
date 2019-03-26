import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

export default class EmployeeListItem extends Component {

  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee});
  }
  render() {
    const { name, phone, shift } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>

      <CardSection>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
        
      </CardSection>
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5
  }
});