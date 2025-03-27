import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './app/navigation/app/AppNav';
// import AuthNav from './app/navigation/auth/AuthNav';



const App = () => {
    return (
        <NavigationContainer>
           <AppNav />
           {/* <AuthNav/> */}
        </NavigationContainer>
    );
};

export default App;
