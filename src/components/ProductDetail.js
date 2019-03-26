import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { Card, CardSection, Button} from './common';

const ProductDetail = ({product}) => {
  const { name, salePrice, images } = product;
  return (
  <Card>
    <CardSection>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: images }} 
          style={styles.thumbnail}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headetText}>{name}</Text>
        <Text>{salePrice} DA</Text>
      </View>
    </CardSection>
    <CardSection>
      <Image style={styles.image} source={{ uri: images}}/>
    </CardSection>
    <CardSection>
      <Button
        onPress={() => Linking.openURL(`http://www.hawi.ml/products/${product.id}`)}
      >
        Buy
      </Button>
    </CardSection>
  </Card>
  );  
};

const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-around',
  },
  headetText: {
    fontSize: 20,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 300,
    flex: 1,
    width: null,
  }
});

export default ProductDetail;