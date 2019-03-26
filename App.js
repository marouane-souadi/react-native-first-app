import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './src/components/common';
import ProductList from './src/components/ProductList';
import LoginForm from './src/components/LoginForm';
import LoginFormRedux from './src/components/LoginFormRedux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/store/reducers';
import LibraryList from './src/components/LibraryList';
import RouterComponent from './src/RouterComponent';

export default class App extends React.Component {
  
	state = {
		isLoggedIn: null
  };
  
  firebaseConfig = {
    apiKey: 'AIzaSyAHixD2otSd6WdW2QWnB2-6cKupjCNlCrA',
    authDomain: 'hawi-react-native-project.firebaseapp.com',
    databaseURL: 'https://hawi-react-native-project.firebaseio.com',
    projectId: 'hawi-react-native-project',
    storageBucket: 'hawi-react-native-project.appspot.com',
    messagingSenderId: '634514580759'
  }

	componentDidMount() {
		firebase.initializeApp(this.firebaseConfig);
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ isLoggedIn: true });
			} else {
				this.setState({ isLoggedIn: false });
			}
    });
  }

	logoutUser = () => {
		firebase.auth().signOut();
	}

	renderContent = () => {
		switch (this.state.isLoggedIn) {
			case null:
				return <Spinner />;
			case false:
				return <LoginFormRedux />;
			case true:
				return (
					<Card>
              <LibraryList />
              <CardSection>

							<Button onPress={this.logoutUser}>Logout</Button>
              </CardSection>
					</Card>
				);
      default: 
          return <Spinner/>
		}
  }

  store = createStore(reducers, {}, applyMiddleware(reduxThunk));
	render() {
		return (
			<Provider store={this.store}>
				<View style={styles.container}>
        <RouterComponent/>
                    {/* <StatusBar hidden />
                    <Header title="Authentication" />
                    {this.renderContent()} */}
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	textSize: {
		fontSize: 20
	},
	container: {
		flex: 1
	}
});
