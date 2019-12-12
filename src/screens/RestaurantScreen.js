import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Linking, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Image } from 'react-native-elements'
import useRestaurantDetail from '../hooks/useRestaurantDetail.js'

const RestaurantScreen = ({ navigation: { getParam } }) => {
    const [loading, setLoading] = useState(true)
    const [restaurant, error] = useRestaurantDetail(getParam("id"))
    const {name, photos, phone, rating, review_count, location} = restaurant

    console.log(restaurant)
    return (
        <View style={styles.container}>
            <Text style={styles.nameStyle}>{name}</Text>
            {photos && <Carousel 
                data={photos}
                sliderWidth={380}
                itemWidth={300}
                lockScrollWhileSnapping
                autoplay
                loop
                renderItem={({ item }) => <Image style={styles.imageStyle} source={{ uri: item }} PlaceholderContent={<ActivityIndicator />} />}
            />}
            {rating && <Text style={styles.ratingStyle}>{rating} Stars, {review_count} Reviews</Text>}
            {location && <Text style={styles.addressStyle}>Address: {location.display_address[0]}, {location.display_address[1]}, {location.display_address[2]}</Text>}
            {phone && <Text style={styles.phoneStyle}>
                Phone: <Text style={styles.phoneNumStyle} onPress={() => Linking.openURL(`tel:${phone}`)}>{phone.split("+34")[1]}</Text>
            </Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 10
    },
    nameStyle: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10
    },
    ratingStyle: {
        marginTop: 15,
        marginBottom: 10
    },
    imageStyle: {
        width: "100%",
        height: 300
    },
    addressStyle: {
        fontSize: 22,
        marginVertical: 10
    },
    phoneStyle: {
        fontSize: 32
    },
    phoneNumStyle: {
        color: "#0000ff"
    }
})


export default RestaurantScreen
