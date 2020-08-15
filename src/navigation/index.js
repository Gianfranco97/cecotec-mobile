import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import Products from '../screens/Products'
import SingleProduct from '../screens/SingleProduct'

const ProductsStack = createStackNavigator({
  Products: Products,
  SingleProduct: SingleProduct,
})

const IndexApp = createBottomTabNavigator(
  {
    ProductsStack
  },
  {
    initialRouteName: 'ProductsStack',
  },
)

const AppNavigator = createAppContainer(IndexApp)

export default AppNavigator
