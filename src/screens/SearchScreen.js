import React, { useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator } from 'react-native'
import useRestaurants from '../hooks/useRestaurants'
import SearchBar from '../components/SearchBar'
import RestaurantList from '../components/RestaurantList'

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    const [onTermSubmit, restaurants, error] = useRestaurants()

    const filterByPrice = price => restaurants.filter(r => r.price === price)

    // console.log(restaurants)
    
    return (
        <>
            <SearchBar term={term} setTerm={setTerm} onTermSubmit={onTermSubmit} />
            {error ? <Text>{error}</Text> : null}
            {restaurants.length ?
                <ScrollView>
                    <RestaurantList restaurants={filterByPrice("€")} title="Cost Effective" />
                    <RestaurantList restaurants={filterByPrice("€€")} title="Bit Pricier" />
                    <RestaurantList restaurants={filterByPrice("€€€")} title="Big Spender" />
                </ScrollView>
                : <ActivityIndicator style={{ justifyContent: "center", flex: 1 }} size="large" color="#0000ff" />
            }
        </>
    )
}

export default SearchScreen