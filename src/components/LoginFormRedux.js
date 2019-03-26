import React, { Component } from 'react';
import { Card, CardSection, Input, Spinner, Button } from './common';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { 
  emailChanged, 
  passwordChanged, 
  loginUser,
  signupUser
} from '../store/actions';

class LoginFormRedux extends Component {
	onLoginPress = () => {
		this.props.loginUser({
			email: this.props.email,
			password: this.props.password
		});
  };
  
  onSignupPress = () => {
		this.props.signupUser({
			email: this.props.email,
			password: this.props.password
		});
	};

	onEmailChanged = (email) => {
		this.props.emailChanged(email);
	};

	onPasswordChanged = (password) => {
		this.props.passwordChanged(password);
  };
  
  renderError = () => {
    if (this.props.error) {
      return (
        <Text style={styles.error}>{this.props.error}</Text>
      )
    }
  }

  renderButtons = () => {
    if(this.props.loading) {
      return (
        <CardSection>
          <Spinner size="small"/>
        </CardSection>
      )
    } else {
      return (
        <CardSection>
          <Button onPress={this.onLoginPress}>Log in</Button>
          <Button onPress={this.onSignupPress}>Sign Up</Button>
        </CardSection>
      )
    }
  }

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeHolder="user@gmail.com"
						label="Email"
						keyboardType="email-address"
						onChangeText={this.onEmailChanged}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeHolder="password"
						label="Password"
						secureTextEntry
						value={this.props.password}
						onChangeText={this.onPasswordChanged}
					/>
				</CardSection>
        {this.renderError()}
        {this.renderButtons()}
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	error: {
		alignSelf: 'center',
		color: 'red'
	}
});

const mapStateToProps = (state) => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
		user: state.auth.user
	};
};

export default connect(mapStateToProps, {
	emailChanged,
	passwordChanged,
  loginUser,
  signupUser
})(LoginFormRedux);
