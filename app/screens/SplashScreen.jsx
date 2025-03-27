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
            <View style={styles.darkOverlay} />
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome to On Time</Text>
                <Text style={styles.subtitle}>
                    we're here make scheduling your services,{'\n'}quick and easy
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('HomeScreen')}
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
    },
    image: {
        width: width,
        height: height,
        resizeMode: 'cover',
    },
    darkOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000',
        opacity: 0.4, // Adjust this value to make it darker or lighter
    },
    overlay: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#D4A574',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default SplashScreen;
