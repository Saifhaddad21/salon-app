import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Heart, ArrowLeft, MapPin } from 'lucide-react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const services = [
    { name: 'Hair', image: require('../../assets/images/image1.png') },
];

const SalonProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Heart size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Salon Info */}
            <View style={styles.salonInfo}>
                <View>
                    <Text style={styles.salonName}>Emani Ahmad</Text>
                    <Text style={styles.salonSubtitle}>Hair Salon and more</Text>
                    <View style={styles.locationRow}>
                        <MapPin size={14} color="#B88E2F" />
                        <Text style={styles.locationText}>Doha</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.mapButton}>
                    <Text style={styles.mapButtonText}>Google Maps</Text>
                </TouchableOpacity>
            </View>

            {/* Salon Image */}
            <Image
                source={require('../../assets/images/salon-banner.jpg')}
                style={styles.bannerImage}
            />

            {/* Service Categories */}
            <View style={styles.serviceGrid}>
                {services.map((service) => (
                    <TouchableOpacity key={service.name} style={styles.serviceItem}>
                        <FastImage source={service.image} style={styles.serviceIcon} resizeMode='contain' />
                        <Text style={styles.serviceText}>{service.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: wp(5) },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: wp(3) },
    salonInfo: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: wp(3) },
    profileImage: { width: wp(15), height: wp(15), borderRadius: wp(7.5) },
    salonName: { fontSize: wp(5), fontWeight: 'bold' },
    salonSubtitle: { fontSize: wp(4), color: '#777' },
    locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: wp(1) },
    locationText: { fontSize: wp(3.5), marginLeft: wp(1), color: '#B88E2F' },
    mapButton: { backgroundColor: '#000', paddingVertical: wp(1.5), paddingHorizontal: wp(4), borderRadius: wp(3) },
    mapButtonText: { color: '#fff', fontSize: wp(3.5), fontWeight: 'bold' },
    salonImage: { width: '100%', height: wp(40), borderRadius: wp(3), marginBottom: wp(4) },
    serviceGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    serviceItem: { alignItems: 'center', width: '30%', marginBottom: wp(4) },
    serviceIcon: { width: wp(12), height: wp(12) },
    serviceText: { fontSize: wp(4), marginTop: wp(1), textAlign: 'center' },
    bannerImage: {
        borderRadius: 30,
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
});

export default SalonProfileScreen;
