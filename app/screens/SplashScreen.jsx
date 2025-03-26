import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/SplashScreen.jpg')}
                style={styles.image}
            />
            <View style={styles.overlay}>
                
                <Text style={styles.subtitle}>
                    We're here to make scheduling your services quick and easy.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('first')} // Navigate to HomeScreen or any other screen
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: width,  // Set image width based on screen width
        height: height * 0.6, // Set image height as 60% of the screen height
        resizeMode: 'cover', // Make sure image covers the container proportionally
    },
    overlay: {
        position: 'absolute',
        bottom: 30, // Place the text and button at the bottom of the screen
        width: '90%',  // 90% of screen width for padding
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: width * 0.08, // Title size based on screen width
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: width * 0.05, // Subtitle size based on screen width
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF6F61',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 50,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
