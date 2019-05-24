import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

import AuthScreen from "./src/screens/Auth/Auth";
import InputKaryawanScreen from "./src/screens/InputKaryawan/InputKaryawan";
import ListKaryawanScreen from "./src/screens/ListParaKaryawan/ListParaKaryawan";
import DetailKaryawanScreen from "./src/screens/DetailKaryawan/DetailKaryawan";
import SideDrawerScreen from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "jc8reactnative.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.InputKaryawanScreen",
  () => InputKaryawanScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.ListKaryawanScreen",
  () => ListKaryawanScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.DetailKaryawanScreen",
  () => DetailKaryawanScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "jc8reactnative.SideDrawerScreen",
  () => SideDrawerScreen,
  store,
  Provider
);

// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: "jc8reactnative.AuthScreen",
    title: "Authentication"
  }
});
