import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import RestaurantDetail from '../components/RestaurantDetail'

const RestaurantList = ({ restaurants, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Restaurants: {restaurants.length}</Text> */}
            <FlatList 
                data={restaurants} 
                keyExtractor={({id}) => id} 
                showsHorizontalScrollIndicator={false} 
                horizontal 
                renderItem={({ item }) => 
                    <RestaurantDetail restaurant={item}/>
                } 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
})

export default RestaurantList
