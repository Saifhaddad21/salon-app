import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';


// Dummy notifications data
const notifications = [
    { id: '1', type: 'Salons', message: 'Your Booking Appointment has been ....', time: '34 minutes ago' },
    { id: '2', type: 'Products', message: 'Your order is still in Process', time: '2 hours ago' },
    { id: '3', type: 'Salons', message: 'Your order is not approved by Pixie T...', time: '4 hours ago' },
    { id: '4', type: 'Offers', message: 'Get additional Discounts when you b....', time: 'A day ago' },
    { id: '5', type: 'Products', message: 'Your order has been Canceled', time: '2 days ago' },
    { id: '6', type: 'Products', message: 'Your order is still in Process', time: '4 days ago' },
    { id: '7', type: 'Offers', message: '30% Discount on Berlinne Nail Polish', time: '34 minutes ago' },
];

const NotificationScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.header}>Notifications</Text>

            {/* Notification List */}
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.notificationItem}>
                        <Image
                            source={require('../../assets/images/Ellipse1.png')} // Placeholder user image
                            style={styles.avatar}
                        />
                        <View style={styles.notificationText}>
                            <Text style={styles.type}>{item.type}</Text>
                            <Text style={styles.message}>{item.message}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

// Bottom Tab Navigation

export default NotificationScreen;

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 50 },
    header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    notificationItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 15 },
    notificationText: { flex: 1 },
    type: { fontSize: 14, fontWeight: 'bold', color: '#444' },
    message: { fontSize: 14, color: '#666', marginTop: 2 },
    time: { fontSize: 12, color: '#999', marginTop: 3 },
});
