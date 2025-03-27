import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen2"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthNav