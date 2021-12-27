import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/SearchScreen";
import ResultShowScreen from "../screens/ResultShowScreen";
import LocationScreen from "../screens/LocationScreen";

const screens = {
  LocationScreen : {
    screen : LocationScreen
  },
  Restaurants : {
    screen : HomeScreen
  },
  Restaurant : {
    screen : ResultShowScreen
  }
};

const RestaurantStack = createStackNavigator(screens,{
    defaultNavigationOptions : {
        headerTintColor: '#111',
        headerStyle: { backgroundColor: '#eee', height: 80 }
  }
});

export default createAppContainer(RestaurantStack);