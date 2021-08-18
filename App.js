/** @format */

import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RestaurantStack from "./routes/RestaurantStack";

const App = () => {
    let [fontsLoaded] = useFonts({
        regular: require("./assets/fonts/regular.ttf"),
    });

      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return <RestaurantStack />;
      }
};

export default App;