import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckCircle } from 'lucide-react-native';

const ConfirmScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CheckCircle size={80} color="#C69C6D" />
            <Text style={styles.title}>Booking Confirmed!</Text>
            <Text style={styles.subText}>Your appointment has been scheduled.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ConfirmScreen;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 22, fontWeight: 'bold', marginTop: 20 },
    subText: { fontSize: 16, color: 'gray', marginTop: 10 },
    button: { marginTop: 30, backgroundColor: '#C69C6D', padding: 15, borderRadius: 8 },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
