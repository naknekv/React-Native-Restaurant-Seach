import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, setTerm, onTermSubmit }) => {
    
    return (
        <View style={styles.viewStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle} 
                autoCorrect={false}
                autoCapitalize="none"
                value={term} 
                onChangeText={setTerm} 
                onEndEditing={() => onTermSubmit(term)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginVertical: 15
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})


export default SearchBar
