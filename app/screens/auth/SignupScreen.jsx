import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SignupScreen = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/EndSplashScreen.png')} style={styles.logo} />
            <Text style={styles.title}>Phone Number</Text>
            <Text style={styles.subtitle}>Continue with phone number</Text>

            <TextInput
                style={styles.input}
                placeholder="+974"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <TextInput
                style={styles.input}
                placeholder="Type your First Name"
                value={name}
                onChangeText={setName}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('VerifyOTPScreen')}
            >
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: wp(5),
    },
    logo: {
        width: wp(30),
        height: hp(15),
        resizeMode: 'contain',
    },
    title: {
        fontSize: wp(6),
        fontWeight: 'bold',
        marginTop: hp(2),
    },
    subtitle: {
        fontSize: wp(4),
        color: 'gray',
        marginBottom: hp(3),
    },
    input: {
        width: '100%',
        height: hp(6),
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: wp(3),
        marginBottom: hp(2),
    },
    button: {
        width: '100%',
        height: hp(6),
        backgroundColor: '#C19A6B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: wp(5),
        fontWeight: 'bold',
    },
});

export default SignupScreen;
