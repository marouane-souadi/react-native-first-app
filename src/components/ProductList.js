import React, { Component} from 'react';
import { View, ScrollView} from 'react-native';
import { SSQLite } from 'expo';
import {getAllProducts} from '../helpers/api';
import ProductDetail from './ProductDetail';
import { Spinner } from './common';


class ProductList extends Component {

  state = {
    products : []
  }

  componentDidMount() {
    getAllProducts().then(data => this.setState({products : data}));
  }

  createDB = () => {
    const db = SSQLite.openDatabase('baby.db');
    console.log('DB created');
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(255))');
    })
  }

  renderProducts = () => {
    return this.state.products.map(p => 
      <ProductDetail key={p.id} product={p}/>);
  }

  render() {
    const { products } = this.state;
    if (!products.length) {
      return <Spinner/>;
    }
    return (
      <ScrollView>
        {this.renderProducts()}
      </ScrollView>
    );
  }
}

const styles = {
  container : {
    flex: 1
  },
}

export default ProductList;