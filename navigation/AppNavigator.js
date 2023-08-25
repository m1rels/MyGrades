import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import SubjectScreen from "../screens/SubjectScreen";
import SettingsScreen from "../screens/SettingsScreen";


const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Einstellungen" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Fächer" component={SubjectScreen} />
    </Tab.Navigator>
)

export default AppNavigator;
