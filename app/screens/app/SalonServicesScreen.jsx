import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCart, MapPin } from 'lucide-react-native';

const services = [
    { id: '1', name: 'HAIR', icon: require('../../assets/images/Ellipse18.png') },
];

const SalonServicesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backButton}>←</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <ShoppingCart size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image source={require('../../assets/images/salon-banner.jpg')} style={styles.profileImage} />
                <View>
                    <Text style={styles.salonName}>Emani Ahmad</Text>
                    <Text style={styles.salonLocation}>Hair Salon and more</Text>
                    <View style={styles.location}>
                        <MapPin size={16} color='gray' />
                        <Text style={styles.locationText}>Doha</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.mapButton}>
                    <Text style={styles.mapButtonText}>Google Maps</Text>
                </TouchableOpacity>
            </View>

            {/* Salon Image */}
            <Image source={require('../../assets/images/image1.png')}
                style={styles.salonImage} />

            {/* Services List */}
            <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.serviceItem}>
                        <Image source={item.icon} style={styles.serviceIcon} />
                        <Text style={styles.serviceText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.servicesContainer}
            />
        </View>
    );
};

export default SalonServicesScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 15 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    backButton: { fontSize: 24, color: 'black' },
    profileSection: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
    profileImage: { width: 60, height: 60, borderRadius: 30 },
    salonName: { fontSize: 18, fontWeight: 'bold' },
    salonLocation: { fontSize: 14, color: 'gray' },
    location: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
    locationText: { fontSize: 14, color: 'gray', marginLeft: 5 },
    mapButton: { backgroundColor: 'black', paddingVertical: 5, paddingHorizontal: 15, borderRadius: 5 },
    mapButtonText: { color: '#fff', fontSize: 14 },
    salonImage: { width: '100%', height: 150, borderRadius: 10, marginBottom: 15 },
    servicesContainer: { alignItems: 'center' },
    serviceItem: { alignItems: 'center', margin: 10, width: '30%' },
    serviceIcon: { width: 50, height: 50, marginBottom: 5 },
    serviceText: { fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
});
