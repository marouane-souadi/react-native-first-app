import _ from 'lodash'
import React, { Component } from 'react'
import { Card, CardSection, Button, Confirm} from './common'
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeSave, employeeUpdate, employeeDelete } from '../store/actions/employeeActions';
import Communications from 'react-native-communications';
import { SMS } from 'expo';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  }
  componentDidMount = () => {
    _.each(this.props.employee, (value, prop) => this.props.employeeUpdate({ prop, value}));
  }

  onSavePress = () => {
    const { name, phone, shift} = this.props;
    this.props.employeeSave({ uid: this.props.employee.uid, name, phone, shift: (shift || 'Monday')});
  }

  onDeletePress = () => {
    this.setState({ showModal: !this.state.showModal})
  }

  onDeleteConfirm = () => {
    this.props.employeeDelete(this.props.employee.uid);
    this.setState({ showModal: !this.state.showModal});
  }
  onDeleteDecline = () => {
    this.setState({ showModal: !this.state.showModal});
  }
  onTextPress = () => {
    const { phone, shift, name } = this.props;
    // Communications.textWithoutEncoding(phone, `Your upcoming shift is ${shift}`);
    SMS.sendSMSAsync(phone, `Hi ${name}, your upcoming shift is ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onSavePress}>Save</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onDeletePress}>Delete</Button>
        </CardSection>
        <Confirm 
          visible={this.state.showModal}
          onAccept={this.onDeleteConfirm}
          onDecline={this.onDeleteDecline}
        >
          Are you sure you want to delete this ?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
}

export default connect(mapStateToProps, { 
  employeeDelete, employeeSave, employeeUpdate 
})(EmployeeEdit);