import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { CreditCard, DollarSign } from 'lucide-react-native';

const CheckoutScreen = () => {
    const { width } = useWindowDimensions();
    const [paymentMethod, setPaymentMethod] = useState(null);

    return (
        <View style={[styles.container, { width }]}>
            <Text style={styles.title}>Cart</Text>

            <View style={styles.summaryContainer}>
                <Text style={styles.item}>Hair Cut <Text style={styles.price}>10 JDs</Text></Text>
                <Text style={styles.time}>35 Mins</Text>
                <Text style={styles.item}>Hair Style <Text style={styles.price}>20 JDs</Text></Text>
                <Text style={styles.time}>25 Mins</Text>
                <Text style={styles.item}>Eyebrows <Text style={styles.price}>5 JDs</Text></Text>
                <Text style={styles.time}>10 Mins</Text>
                <Text style={styles.item}>Service Fees <Text style={styles.price}>2 JDs</Text></Text>
                <Text style={styles.total}>Total: 37 JDs</Text>
            </View>

            <TouchableOpacity
                style={[styles.paymentButton, paymentMethod === 'cash' && styles.selectedButton]}
                onPress={() => setPaymentMethod('cash')}
            >
                <DollarSign color={paymentMethod === 'cash' ? '#fff' : '#000'} size={20} />
                <Text style={styles.paymentText}>Pay Cash</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.paymentButton, paymentMethod === 'visa' && styles.selectedButton]}
                onPress={() => setPaymentMethod('visa')}
            >
                <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg' }} style={styles.visaLogo} />
                <Text style={styles.paymentText}>Pay By Visa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#C4A484',
        marginBottom: 20,
    },
    summaryContainer: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    item: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    time: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
    },
    price: {
        fontWeight: 'bold',
        color: '#000',
    },
    total: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        marginTop: 10,
    },
    paymentButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EAEAEA',
        width: '90%',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    selectedButton: {
        backgroundColor: '#C4A484',
    },
    paymentText: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    },
    visaLogo: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
        marginRight: 10,
    },
    confirmButton: {
        backgroundColor: '#C4A484',
        width: '90%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    confirmText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});

export default CheckoutScreen;
