import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../store/actions';
import { connect } from 'react-redux';
import EmployeeListItem from './EmployeeListItem';
import _ from 'lodash';

class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: props.employees
    };
  }

  componentDidMount = () => {
    this.props.employeesFetch()
  }

  renderItem = ({ item }) => {
    return <EmployeeListItem employee={item}/>
  }

  keyExtractor = (item) => {
    return item.uid;
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      ...prevState,
      employees: nextProps.employees
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.employees}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          extraData={this.state.employees}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
      return { ...val, uid};
  })
  return {
    employees
  }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)