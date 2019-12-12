import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import RestaurantDetail from '../components/RestaurantDetail'

const RestaurantList = ({ restaurants, title, navigation: { navigate } }) => {
    if (!restaurants.length) return null
    else return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            {/* <Text>Restaurants: {restaurants.length}</Text> */}
            <FlatList 
                data={restaurants} 
                keyExtractor={({id}) => id} 
                showsHorizontalScrollIndicator={false} 
                horizontal 
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigate("Restaurant", { id: item.id })}>
                        <RestaurantDetail restaurant={item}/>
                    </TouchableOpacity>
                )} 
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

export default withNavigation(RestaurantList)
