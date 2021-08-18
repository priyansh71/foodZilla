/** @format */

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";

const screens = {
  HomeScreen : {
    screen : Home
  },
};

const RestaurantStack = createStackNavigator(screens,{
    defaultNavigationOptions : {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 100 },
  }
});

export default createAppContainer(RestaurantStack);