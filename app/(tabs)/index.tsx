import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
const product = require('../../assets/images/product1.jpg')



export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headWrapper}>
          <View>
            <Text style={styles.welcome}>welcome to ecommerce</Text>
            <Text style={styles.name}>Hola</Text>
          </View>

          <View>
            <Image source={require('../../assets/images/profile.jpg')}
              style={{ width: 100, height: 100, borderRadius: 50 }} />
          </View>
        </View>

        <View style={styles.productsWrapper}>
          <View>
            <Text style={styles.productTitle}>Product List</Text>
          </View>
          <View>
            <Button title='View all' />
          </View>
        </View>

        <View style={styles.wrapper}>
          <View style={styles.productBox}>
            <Image source={product}
              style={styles.productImage} />
            <View>
              <Text style={styles.productName}>Head Phones</Text>
              <Text style={styles.productPrice}>$120</Text>
            </View>
            <View style={styles.btn}>
              <Button title='Details' />
            </View>
          </View>

          <View style={styles.productBox}>
            <Image source={product}
              style={styles.productImage} />
            <View>
              <Text style={styles.productName}>Head Phones</Text>
              <Text style={styles.productPrice}>$120</Text>
            </View>
            <View style={styles.btn}>
              <Button title='Details' />
            </View>
          </View>
        </View>

        <View style={styles.wrapper}>
          <View style={styles.productBox}>
            <Image source={product}
              style={styles.productImage} />
            <View>
              <Text style={styles.productName}>Head Phones</Text>
              <Text style={styles.productPrice}>$120</Text>
            </View>
            <View style={styles.btn}>
              <Button title='Details' />
            </View>
          </View>

          <View style={styles.productBox}>
            <Image source={product}
              style={styles.productImage} />
            <View>
              <Text style={styles.productName}>Head Phones</Text>
              <Text style={styles.productPrice}>$120</Text>
            </View>
            <View style={styles.btn}>
              <Button title='Details' />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold"
  },
  name: {
    fontSize: 25,
    fontWeight: "semibold"
  },
  headWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  productBox: {
    backgroundColor: "white",
    width: 150,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 5,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 500
  },
  productsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 30
  },
  productImage: {
    width: 120,
    height: 120,

  },
  productName: {
    fontWeight: "bold",
  },
  productPrice: {
    fontWeight: 500
  },
  btn: {
    width: 120,
    paddingTop: 10
  }
})