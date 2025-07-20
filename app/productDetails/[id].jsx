import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

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
                <ActivityIndicator size="large" color="#3E5F44" />
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

                <View className="flex-1 p-4">
                    <View className="flex-row items-center justify-between mt-4 w-full">
                        <View className="bg-gray-400 py-[6px] px-3 rounded-md">+</View>
                        <View className="flex-1 mx-2 rounded-md bg-blue-500 py-[9px] cursor-pointer">
                            <Text className="text-center text-white font-semibold">Add to Cart</Text>
                        </View>
                        <View className="bg-gray-400 py-[6px] px-3 rounded-md">-</View>
                    </View>
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