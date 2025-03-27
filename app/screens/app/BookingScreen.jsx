import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heart } from 'lucide-react-native';

const bookings = [
    {
        id: '1',
        name: 'Alia Ahmad',
        services: '3 services',
        price: '66 JDs',
        date: 'Monday June 4th at 05:00 PM',
        image: 'https://via.placeholder.com/60',
    },
    {
        id: '2',
        name: 'Hana - Eyes & Nails',
        services: '3 services',
        price: '65 JDs',
        date: 'Monday June 4th at 05:00 PM',
        image: 'https://via.placeholder.com/60',
    },
];

const BookingScreen = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Booked');

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bookings</Text>

            {/* Tabs */}
            <View style={styles.tabs}>
                {['Booked', 'Completed', 'Cancelled'].map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
                        <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Booking List */}
            <FlatList
                data={bookings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.bookingItem}>
                        <Image source={{ uri: item.image }} style={styles.avatar} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.services}>{item.services}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                            <Text style={styles.date}>{item.date}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.detailButton}
                            onPress={() => navigation.navigate('BookingDetails', { booking: item })}
                        >
                            <Text style={styles.detailText}>Detail</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default BookingScreen;

// Styles
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingTop: 50 },
    header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    tabs: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
    tab: { fontSize: 16, padding: 10, color: '#777' },
    activeTab: { color: '#C49A6C', fontWeight: 'bold' },
    bookingItem: { flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderColor: '#eee' },
    avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
    info: { flex: 1 },
    name: { fontSize: 16, fontWeight: 'bold' },
    services: { fontSize: 14, color: '#666' },
    price: { fontSize: 14, color: '#C49A6C', fontWeight: 'bold' },
    date: { fontSize: 12, color: '#999' },
    detailButton: { backgroundColor: '#C49A6C', padding: 10, borderRadius: 8 },
    detailText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});
