import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const RestaurantDetail = ({ restaurant }) => {
    const { name, rating, review_count, image_url } = restaurant
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: image_url }} />
            <Text style={styles.nameStyle}>{name}</Text>
            <Text>{rating} Stars, {review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: "bold"
    }
})

export default RestaurantDetail
