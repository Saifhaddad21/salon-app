import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const EndSplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SigninScreen'); // Change 'Home' to your next screen
        }, 2000); // Adjust timing as needed
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/EndSplashScreen.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', // White background
    },
    logo: {
        width: 200, // Adjust according to your design
        height: 200,
        resizeMode: 'contain',
    },
});

export default EndSplashScreen;
