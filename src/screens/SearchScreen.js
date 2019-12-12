import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'
import useRestaurants from '../hooks/useRestaurants'

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    const [onTermSubmit, restaurants, error] = useRestaurants()

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