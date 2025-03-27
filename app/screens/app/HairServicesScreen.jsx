import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const services = [
    { id: '1', name: 'Hair Cut', time: '35 Mins', price: '10 JDs' },
    { id: '2', name: 'Hair Style', time: '25 Mins', price: '20 JDs' },
    { id: '3', name: 'Eyebrows', time: '10 Mins', price: '5 JDs' },
    { id: '4', name: 'Hair Colour', time: '18 Mins', price: '50 JDs' },
];

const HairServicesScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.backArrow}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Hair</Text>
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profileImage} />
                <View>
                    <Text style={styles.profileName}>Emani Ahmad</Text>
                    <Text style={styles.profileLocation}>Doha</Text>
                </View>
                <TouchableOpacity style={styles.mapButton}>
                    <Text style={styles.mapText}>Google Maps</Text>
                </TouchableOpacity>
            </View>

            {/* Categories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {Array(4).fill('hairdo').map((item, index) => (
                    <TouchableOpacity key={index} style={styles.categoryButton}>
                        <Text style={styles.categoryText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Service List */}
            <FlatList
                data={services}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.serviceItem}>
                        <View>
                            <Text style={styles.serviceName}>{item.name}</Text>
                            <Text style={styles.serviceTime}>{item.time}</Text>
                        </View>
                        <Text style={styles.servicePrice}>{item.price}</Text>
                        <TouchableOpacity style={styles.detailsButton}>
                            <Text style={styles.detailsText}>Details</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: wp('5%') },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: hp('2%') },
    backArrow: { fontSize: 24, fontWeight: 'bold' },
    title: { fontSize: 22, fontWeight: 'bold', flex: 1, textAlign: 'center' },
    profileSection: { flexDirection: 'row', alignItems: 'center', marginBottom: hp('2%') },
    profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: wp('3%') },
    profileName: { fontSize: 16, fontWeight: 'bold' },
    profileLocation: { fontSize: 14, color: 'gray' },
    mapButton: { backgroundColor: 'black', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5, marginLeft: 'auto' },
    mapText: { color: 'white', fontSize: 12 },
    categoryContainer: { flexDirection: 'row', marginBottom: hp('2%') },
    categoryButton: { backgroundColor: '#D2B48C', padding: 10, borderRadius: 20, marginRight: 10 },
    categoryText: { color: 'white', fontSize: 14 },
    serviceItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' },
    serviceName: { fontSize: 16, fontWeight: 'bold' },
    serviceTime: { fontSize: 12, color: 'gray' },
    servicePrice: { fontSize: 16, fontWeight: 'bold' },
    detailsButton: { backgroundColor: 'white', borderWidth: 1, borderColor: '#D2B48C', padding: 5, borderRadius: 5 },
    detailsText: { color: '#D2B48C', fontSize: 12 },
});

export default HairServicesScreen;
