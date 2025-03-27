import React from 'react';
import ExploreScreen from '../../screens/app/Navbar/ExploreScreen';
import BookingScreen from '../../screens/app/Navbar/BookingScreen';
import NotificationsScreen from '../../screens/app/Navbar/NotificationsScreen';
import FavoritesScreen from '../../screens/app/Navbar/FavoritesScreen';
import AccountScreen from '../../screens/app/Navbar/AccountScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
                const icons = {
                    Explore: <Search color={color} size={size} />;
                    Booking: <Home color={color} size={size} />;
                    Notifications: <Bell color={color} size={size} />;
                    Favorites: <Heart color={color} size={size} />;
                    Account: <User color={color} size={size} />
                };
                return icons[route.name] || <Home color={color} size={size} />;
            },
            tabBarActiveTintColor: "#B88E2F",
            tabBarInactiveTintColor: "#9E9E9E",
            tabBarStyle: { backgroundColor: "#fff", height: 60 },
        })}
    >
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Booking" component={BookingScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
);


export default TabNavigator;