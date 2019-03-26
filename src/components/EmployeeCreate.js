import React, { Component } from 'react'
import { Card, CardSection, Button} from './common'
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { createEmployee } from '../store/actions/employeeActions';


class EmployeeCreate extends Component {
  
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.createEmployee({name, phone, shift: (shift || 'Monday')});
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
        
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift }
}



export default connect(mapStateToProps, { createEmployee })(EmployeeCreate);