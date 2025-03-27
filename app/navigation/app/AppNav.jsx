import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../../screens/SplashScreen';
import HomeScreen from '../../screens/app/HomeScreen';
import SearchHomeScreen from '../../screens/app/SearchHomeScreen';
import TapfilterButton from '../../screens/app/TapfilterButton';
import ExploreScreen from '../../screens/app/ExploreScreen';
import SalonProfileScreen from '../../screens/app/SalonProfileScreen';
import HairServicesScreen from '../../screens/app/HairServicesScreen';
import ServiceScreenDetails from '../../screens/app/ServiceScreenDetails';
import CheckoutScreen from '../../screens/app/CheckoutScreen';
import ConfirmScreen from '../../screens/app/ConfirmScreen';
import SalonServicesScreen from '../../screens/app/SalonServicesScreen';
import NotificationScreen from '../../screens/app/NotificationScreen';
import FavoritesScreen from '../../screens/app/FavoritesScreen';
import AddCartScreen from '../../screens/app/AddCartScreen';
import BookingScreen from '../../screens/app/BookingScreen';
import BookingDetailsScreen from '../../screens/app/BookingDetailsScreen';
import { ChangeLanguage, DeleteAccount, MainAccount } from '../../screens/app/AccountScreenPages';
import EndSplashScreen from '../../screens/app/EndSplashScreen';

const Stack = createNativeStackNavigator();


const AppNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SearchHomeScreen"
                component={SearchHomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TapfilterButton"
                component={TapfilterButton}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ExploreScreen"
                component={ExploreScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SalonProfile"
                component={SalonProfileScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HairServicesScreen"
                component={HairServicesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ServiceScreenDetails"
                component={ServiceScreenDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddCartScreen"
                component={AddCartScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CheckoutScreen"
                component={CheckoutScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmScreen"
                component={ConfirmScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SalonServicesScreen"
                component={SalonServicesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FavoritesScreen"
                component={FavoritesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BookingScreen"
                component={BookingScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BookingDetailsScreen"
                component={BookingDetailsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainAccount"
                component={MainAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DeleteAccount"
                component={DeleteAccount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChangeLanguage"
                component={ChangeLanguage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CheckoutScreen"
                component={CheckoutScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EndSplashScreen"
                component={EndSplashScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppNav;