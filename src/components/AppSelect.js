import React from 'react';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';

export default function AppSelect() {
  return (
    <Card>
      <CardSection>
        <Button onPress={()=>Actions.employeeManager()}>Employee Manager</Button>
      </CardSection>
      <CardSection>
        <Button onPress={()=>Actions.libraryManager()}>Lisbrary List</Button>
      </CardSection>
      <CardSection>
        <Button onPress={()=>Actions.productsManager()}>Products List</Button>
      </CardSection>
      
    </Card>
  )
}