import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';

export default function productDetails() {
    const { id } = useLocalSearchParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                setProduct(data, 'dcddcd')
                setLoading(false)
            })
    }, [])

    console.log(product)
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: "white", paddingTop: 20, alignItems: 'center' }}>
                <Image
                    source={{ uri: product?.image }}
                    style={{ width: 300, height: 300, resizeMode: 'contain' }} />
            </View>

            <View >
                {/* title */}
                <View><Text className="font-bold text-2xl">{product?.title}</Text></View>
                {/* price */}
                <View><Text style={styles.prodPrice}>${product?.price}</Text></View>
                {/* description */}
                <View><Text>{product?.description}</Text></View>
                {/* rating */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 16 }}>
                        ⭐ {product?.rating?.rate} ({product?.rating?.count} reviews)
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    loadingText: {
        fontSize: 18,
        color: '#666'
    },
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f5f5f5'
    },
    productName: {
        fontSize: 27,
        fontWeight: 700
    },
    prodPrice: {
        fontSize: 20,
        fontWeight: 500,

    }
})