import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/screens/SearchScreen'

// Client ID
// 1v-Vkcl5y0_hRwS5hJvmwQ

// API Key
// E3OyzbZpHsEAkvFPUenBOYWfef6nUdk9K6MLqHIk5C-XIJEqRNjvk0GFA9kljBKVM86m-I_OasXgntaqy1rlot1JFX1mPvL5dIgin5y_8T1-wNdx31BUeMTYE_DwXXYx

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  }, 
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
})

export default createAppContainer(navigator)
