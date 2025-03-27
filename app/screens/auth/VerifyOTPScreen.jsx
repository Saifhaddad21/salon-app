import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const VerifyOTPScreen = () => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Arrowleft.png')} style={styles.logo} />
            <Text style={styles.title}>Verify OTP</Text>
            <Text style={styles.subtitle}>
                Enter your OTP which has been sent to your email and complete account verification.
            </Text>

            <TextInput
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={6}
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
            />

            <Text style={styles.timerText}>A code has been sent to your email</Text>
            <CountDown
                until={timer}
                size={wp(4)}
                digitStyle={{ backgroundColor: 'transparent' }}
                digitTxtStyle={{ color: "#C19A6B", fontSize: wp(5) }}
                timeToShow={['S']}
                timeLabels={{ s: '' }}
                onFinish={() => setTimer(0)}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
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
        textAlign: 'center',
        marginBottom: hp(2),
    },
    otpInput: {
        width: '80%',
        height: hp(6),
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: wp(6),
        marginBottom: hp(2),
    },
    button: {
        width: '80%',
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

export default VerifyOTPScreen;
