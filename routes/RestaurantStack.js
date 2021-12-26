import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import ResultShowScreen from "../screens/ResultShowScreen";

const screens = {
  foodZilla : {
    screen : HomeScreen
  },
  Restaurant : {
    screen : ResultShowScreen
  }
};

const RestaurantStack = createStackNavigator(screens,{
    defaultNavigationOptions : {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100 },
  }
});

export default createAppContainer(RestaurantStack);