import React, { useState } from 'react'
import { View, Text } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState("")
    return (
        <View>
            <SearchBar term={term} setTerm={setTerm} onTermSubmit={onTermSubmit} />
            <Text>
                {term}
            </Text>
        </View>
    )
}

export default SearchScreen
