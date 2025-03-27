import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../../screens/auth/SigninScreen';
import SignupScreen from '../../screens/auth/SignupScreen';
import VerifyOTPScreen from '../../screens/auth/VerifyOTPScreen';

const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SigninScreen"
                component={SigninScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyOTPScreen"
                component={VerifyOTPScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthNav