import React, { PureComponent } from 'react';
import { CardSection } from './common';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback,
  UIManager,
  LayoutAnimation, 
  Platform
} from 'react-native';

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  componentWillUpdate = () => {
    LayoutAnimation.linear();
  }
  render() {
    const { expanded, onPressItem, library } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={()=> onPressItem(library.id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle} >{library.title}</Text>
          </CardSection>
          { (expanded) &&
            <CardSection>
              <Text style={styles.text}> {library.description}</Text>
            </CardSection>
          }
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    paddingLeft: 15
  },
  text: {
    flex: 1
  }
})

export default ListItem;