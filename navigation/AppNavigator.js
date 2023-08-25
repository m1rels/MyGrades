import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import SubjectNavigator from "./SubjectNavigator";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Einstellungen" component={SettingsNavigator} />
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen name="Fächer" component={SubjectNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;
