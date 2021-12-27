import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RestaurantStack from "./routes/RestaurantStack";

const App = () => {
    let [fontsLoaded] = useFonts({
        ubuntu : require("./assets/fonts/ubuntu.ttf"),
        nunito: require("./assets/fonts/nunito.ttf"),
        shizuru : require("./assets/fonts/Shizuru-Regular.ttf"),
        headerBold : require("./assets/fonts/TheNautigal-Bold.ttf"),
        headerNormal : require("./assets/fonts/TheNautigal-Regular.ttf")
    });

      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return <RestaurantStack />;
      }
};

export default App;