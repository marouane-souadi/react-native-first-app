import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import * as actions from '../store/actions';
import ListItem from './ListItem';

class LibraryList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLibraryId: props.selectedLibraryId
    };
  }
  
  renderItem = ({ item }) => {
    return (
      <ListItem 
        expanded={item.id === this.state.selectedLibraryId}  
        library={item} 
        onPressItem={this.onPressItem}
      />
    )
  }

  keyExtractor = (item) => {
    return item.id.toString();
  }
  onPressItem = (id) => {
    this.props.selectLibrary(id);
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      ...prevState,
      selectedLibraryId: nextProps.selectedLibraryId
    }
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        extraData={this.state.selectedLibraryId}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    libraries : state.libraries,
    selectedLibraryId : state.selectedLibraryId
  }
}

export default connect(mapStateToProps, actions)(LibraryList);