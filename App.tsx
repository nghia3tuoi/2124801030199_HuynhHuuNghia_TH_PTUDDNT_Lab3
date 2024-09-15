import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contacts from "./app/screens/Contacts";
import Favorite from "./app/screens/Favorite";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./app/screens/Profile";
import User from "./app/screens/User";
import Colors from "./app/utils/color";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Options from "./app/shared/components/Options";
import { Provider } from "react-redux";
import store from "./app/store/CreateStore";
const Tab = createMaterialBottomTabNavigator();
// Define Stack Navigators
const Stack = createNativeStackNavigator();

function ContactsStack({ navigation }: any) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: "Contacts",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact }: any = route.params;
          const { name } = contact;
          return {
            title: name.split(" ")[0],
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: Colors.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}
function FavoritesStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorite}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
function UserStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: "Me",
          headerTintColor: "white",
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.blue,
          },
          headerRight: () => {
            return (
              <MaterialIcons
                size={26}
                name="settings"
                style={{ color: "white", marginRight: 10 }}
                onPress={() => navigation.navigate("Options")}
              />
            );
          },
        }}
      />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ContactsStack">
        <Drawer.Screen
          name="ContactsScreen"
          component={ContactsStack}
          options={{
            drawerIcon: (tintColor: any) => (
              <MaterialIcons
                size={26}
                name="list"
                style={{ color: tintColor }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="FavoritesScreen"
          component={FavoritesStack}
          options={{
            drawerIcon: (tintColor: any) => (
              <MaterialIcons
                size={26}
                name="star"
                style={{ color: tintColor }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="UserScreen"
          component={UserStack}
          options={{
            drawerIcon: (tintColor: any) => (
              <MaterialIcons
                size={26}
                name="person"
                style={{ color: tintColor }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Contacts"
//       labeled={false}
//       barStyle={{ backgroundColor: Colors.blue }}
//       activeColor={Colors.grey}
//       inactiveColor={Colors.greyDark}
//     >
//       <Tab.Screen
//         name="Contacts"
//         component={ContactsStack}
//         options={{
//           tabBarIcon: ({ tintColor }: any) => {
//             return (
//               <MaterialIcons
//                 size={26}
//                 name="list"
//                 style={{ color: tintColor }}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Favorites"
//         component={FavoritesStack}
//         options={{
//           tabBarIcon: ({ tintColor }: any) => {
//             return (
//               <MaterialIcons
//                 size={26}
//                 name="star"
//                 style={{ color: tintColor }}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="User"
//         component={UserStack}
//         options={{
//           tabBarIcon: ({ tintColor }: any) => {
//             return (
//               <MaterialIcons
//                 size={26}
//                 name="person"
//                 style={{ color: tintColor }}
//               />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
export default function App() {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
