import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    const [restaurants, setRestaurants] = useState([])

    const onTermSubmit = async () => {
        const res = await yelp.get('/search', {
            params: {
                term,
                limit: 50,
                location: "san jose"
            }
        })
        setRestaurants(res.data.businesses)
    }

    console.log(restaurants)

    return (
        <View>
            <SearchBar term={term} setTerm={setTerm} onTermSubmit={onTermSubmit} />
            <Text>
                We have found {restaurants.length} results
            </Text>
        </View>
    )
}

export default SearchScreen