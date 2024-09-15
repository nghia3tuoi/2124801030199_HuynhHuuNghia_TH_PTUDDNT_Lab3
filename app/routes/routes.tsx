import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "../screens/Contacts";
import Profile from "../screens/Profile";
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Contacts">
      <Stack.Screen name="Contacts" component={Contact}/>
      <Stack.Screen name="Profile" component={Profile} options={{title: "Profile"}}/>
    </Stack.Navigator>
  </NavigationContainer>;
};
