import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase'


export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }

  onButtonPress = () => {
    const {email, password} = this.state;
    this.setState({ error: '', loading: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)  
          .catch(this.onLoginFail);
      });
  }
  onLoginFail = () => {
    this.setState({
      error: 'Authentication Failed',
      loading: false,
    });
  }
  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            placeHolder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText= {email => this.setState({email})}
            keyboardType='email-address'
          />
        </CardSection>
        <CardSection>
          <Input
            placeHolder='password'
            label='Password'
            secureTextEntry
            value={this.state.password}
            onChangeText= {password => this.setState({password})}
          />
        </CardSection>
        <Text style={styles.error}>{this.state.error}</Text>
        
        <CardSection>
        { 
          this.state.loading ? 
            <Spinner size='small'/> : 
            <Button onPress={this.onButtonPress}>
              Log in
            </Button>
        }
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    alignSelf: 'center',
    color: 'red',
  }
})