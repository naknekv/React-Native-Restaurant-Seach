import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    const [error, setError] = useState("")
    const [restaurants, setRestaurants] = useState([])

    const onTermSubmit = async term => {
        try {
            const res = await yelp.get("/search", {
                params: {
                    term,
                    limit: 50,
                    location: "barcelona"
                }
            })
            setRestaurants(res.data.businesses)
        } catch (err) {
            setError("Something went wrong. Please try again.")
        }
    }

    useEffect(() => {
        onTermSubmit("pizza")
    }, [])

    console.log(restaurants)

    return (
        <View>
            <SearchBar term={term} setTerm={setTerm} onTermSubmit={onTermSubmit} />
            <Text>
                We have found {restaurants.length} results
            </Text>
            {error ? <Text>{error}</Text> : null}
        </View>
    )
}

export default SearchScreen