import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const BookingDetailsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { booking } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Booking Details</Text>

            {/* Date & Time */}
            <Text style={styles.label}>Date & Time</Text>
            <Text style={styles.infoText}>Monday, October 24</Text>
            <Text style={styles.infoText}>10:00 PM</Text>

            {/* Client Info */}
            <Text style={styles.label}>Client Info</Text>
            <Text style={styles.infoText}>Name: Salma Ahmad</Text>
            <Text style={styles.infoText}>Phone: 0788888888</Text>
            <Text style={styles.infoText}>Address: Tabarbour - Amman</Text>

            {/* Services */}
            <Text style={styles.label}>Services</Text>
            <Text style={styles.serviceItem}>Haircuts - 15 JDs</Text>
            <Text style={styles.serviceItem}>Blow Dry - 30 JDs</Text>
            <Text style={styles.serviceItem}>Updo’s - 7 JDs</Text>

            {/* Total */}
            <Text style={styles.total}>Total: 52 JDs</Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.changeButton}>
                    <Text style={styles.buttonText}>Change Appointment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.buttonText}>Cancel Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default BookingDetailsScreen;

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 50 },
    header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
    infoText: { fontSize: 14, color: '#666', marginBottom: 5 },
    serviceItem: { fontSize: 14, color: '#444', marginBottom: 3 },
    total: { fontSize: 16, fontWeight: 'bold', color: '#C49A6C', marginTop: 10 },
    buttonContainer: { flexDirection: 'row', marginTop: 20 },
    changeButton: { flex: 1, padding: 12, backgroundColor: '#C49A6C', borderRadius: 8, marginRight: 10 },
    cancelButton: { flex: 1, padding: 12, backgroundColor: '#333', borderRadius: 8 },
    buttonText: { color: '#fff', textAlign: 'center', fontSize: 14, fontWeight: 'bold' },
});
