import { useEffect, useState } from 'react';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default function Shop() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  const renderProductItem = ({ item }) => (
    <View style={styles.productBox}>
      <Image 
        source={{ uri: item.image }} 
        style={styles.productImage} 
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <View style={styles.btn}>
        <Button title='Details' />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Products</Text>
      
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  listContainer: {
    paddingBottom: 20
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15
  },
  productBox: {
    backgroundColor: "white",
    width: '48%',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10
  },
  productInfo: {
    flex: 1,
    marginBottom: 10
  },
  productName: {
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 5
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    textTransform: 'capitalize'
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#007AFF'
  },
  btn: {
    marginTop: 'auto'
  }
});