import React, { Component } from 'react'
import { Input, CardSection } from './common'
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet, View } from 'react-native';
import { employeeUpdate } from '../store/actions/employeeActions';


class EmployeeForm extends Component {

  render() {
    const { name, phone, shift } = this.props;
    return (
      <View>
        <CardSection>
          <Input
            value={name}
            label="name"
            placeHolder="marouane"
            onChangeText={value => this.props.employeeUpdate({
              prop: 'name',
              value
            })}
          />
        </CardSection>
        <CardSection>
          <Input
            value={phone}
            label="Phone"
            keyboardType="phone-pad"
            placeHolder="0660 66 66 66"
            onChangeText={value => this.props.employeeUpdate({
              prop: 'phone',
              value
            })}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerLabel}>Shift Day :</Text>
          <Picker
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({
              prop: 'shift',
              value
            })}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuesday" value="Tuesday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 5,
    alignSelf: 'center'
  }
})

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
}



export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);